import { useState, useEffect } from "react";
import Beranda from "./Pages/Beranda";
import LoginPage from "./Pages/Login";
import RegisterPage from "./Pages/Register";
import SemuaProduk from "./Pages/Semuaproduk";
import DetailProduk from "./Pages/Detailproduk";
import MetodePembayaran from "./Pages/Payment/Metode";
import HalamanBayar from "./Pages/Payment/Bayar";
import UbahMetode from "./Pages/Payment/Ubahmetode";
import InfoPayment from "./Pages/Payment/Infopayment";
import PesananSaya from "./Pages/Pesanan";
import KelasSaya from "./Pages/Kelas";
import ProfilSaya from "./Pages/Profile";

function App() {
  const [currentPage, setCurrentPage] = useState("beranda");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);

  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem("users");
    return savedUsers ? JSON.parse(savedUsers) : [];
  });

  const [currentUser, setCurrentUser] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  console.log("Data Pengguna:", users);
  console.log("Pengguna Saat Ini:", currentUser);

  const handleNavigate = (page, data = null) => {
    if (page === "detailproduk") {
      setSelectedCourse(data);
    }
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const handleAddUser = (newUser) => {
    const userWithOrders = { ...newUser, id: Date.now(), orders: [] }; // Tambahkan properti orders
    setUsers((prevUsers) => [...prevUsers, userWithOrders]);
    alert("Pendaftaran berhasil! Silakan login.");
    handleNavigate("login");
  };

  const handleLogin = (loginData) => {
    const user = users.find(
      (u) => u.email === loginData.email && u.password === loginData.password
    );
    if (user) {
      setIsLoggedIn(true);
      setCurrentUser(user);
      handleNavigate("beranda");
    } else {
      alert("Email atau kata sandi salah!");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    handleNavigate("beranda");
  };

  const handleUpdateUser = (updatedData) => {
    setUsers(
      users.map((user) =>
        user.id === currentUser.id ? { ...user, ...updatedData } : user
      )
    );
    setCurrentUser((prev) => ({ ...prev, ...updatedData }));
    alert("Profil berhasil diperbarui!");
  };

  const handleDeleteUser = (userId) => {
    if (
      window.confirm(
        "Apakah Anda yakin ingin menghapus akun ini? Aksi ini tidak dapat dibatalkan."
      )
    ) {
      setUsers(users.filter((user) => user.id !== userId));
      handleLogout();
      alert("Akun berhasil dihapus.");
    }
  };

  const handleCreateOrder = (courseDetails) => {
    if (!currentUser) {
      alert("Anda harus login untuk membuat pesanan.");
      handleNavigate("login");
      return;
    }

    const newOrder = {
      id: Date.now(),
      invoice: `INV/${Date.now()}`,
      date: new Date().toLocaleString("id-ID"),
      title: courseDetails.title,
      price: courseDetails.price
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, "."),
      status: "Belum Bayar",
      image: courseDetails.image,
    };

    const updatedUsers = users.map((user) => {
      if (user.id === currentUser.id) {
        return { ...user, orders: [...user.orders, newOrder] };
      }
      return user;
    });

    setUsers(updatedUsers);

    setCurrentUser((prev) => ({ ...prev, orders: [...prev.orders, newOrder] }));

    alert("Pesanan berhasil dibuat! Silakan selesaikan pembayaran.");
    handleNavigate("pesanan");
  };

  const handleDeleteOrder = (orderId) => {
    if (!currentUser) return;

    if (window.confirm("Apakah Anda yakin ingin membatalkan pesanan ini?")) {
      const updatedOrders = currentUser.orders.filter(
        (order) => order.id !== orderId
      );

      const updatedUsers = users.map((user) => {
        if (user.id === currentUser.id) {
          return { ...user, orders: updatedOrders };
        }
        return user;
      });

      setUsers(updatedUsers);
      setCurrentUser((prev) => ({ ...prev, orders: updatedOrders }));
      alert("Pesanan berhasil dibatalkan.");
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case "beranda":
      default:
        return <Beranda onNavigate={handleNavigate} isLoggedIn={isLoggedIn} />;
      case "login":
        return <LoginPage onNavigate={handleNavigate} onLogin={handleLogin} />;
      case "register":
        return (
          <RegisterPage onNavigate={handleNavigate} onAddUser={handleAddUser} />
        );
      case "semuaproduk":
        return (
          <SemuaProduk onNavigate={handleNavigate} isLoggedIn={isLoggedIn} />
        );
      case "detailproduk": {
        return (
          <DetailProduk
            onNavigate={handleNavigate}
            isLoggedIn={isLoggedIn}
            course={selectedCourse}
            onBuatPesanan={() => handleCreateOrder(selectedCourse)}
          />
        );
      }
      case "pesanan":
        return (
          <PesananSaya
            onNavigate={handleNavigate}
            onLogout={handleLogout}
            currentUser={currentUser}
            onDeleteOrder={handleDeleteOrder}
          />
        );
      case "metodepembayaran":
        return (
          <MetodePembayaran
            onNavigate={handleNavigate}
            isLoggedIn={isLoggedIn}
            selectedMethodId={selectedPaymentMethod}
            onMethodChange={setSelectedPaymentMethod}
          />
        );
      case "bayar":
        return (
          <HalamanBayar
            onNavigate={handleNavigate}
            isLoggedIn={isLoggedIn}
            selectedMethodId={selectedPaymentMethod}
          />
        );
      case "ubahmetode":
        return (
          <UbahMetode
            onNavigate={handleNavigate}
            isLoggedIn={isLoggedIn}
            selectedMethodId={selectedPaymentMethod}
            onMethodChange={setSelectedPaymentMethod}
          />
        );
      case "infopayment":
        return <InfoPayment onNavigate={handleNavigate} status="success" />;
      case "kelas":
        return (
          <KelasSaya
            onNavigate={handleNavigate}
            isLoggedIn={isLoggedIn}
            onLogout={handleLogout}
          />
        );
      case "profil":
        return (
          <ProfilSaya
            onNavigate={handleNavigate}
            onLogout={handleLogout}
            currentUser={currentUser}
            onUpdateUser={handleUpdateUser}
            onDeleteUser={handleDeleteUser}
          />
        );
    }
  };

  return <div>{renderPage()}</div>;
}

export default App;
