import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem("users");
    return savedUsers ? JSON.parse(savedUsers) : [];
  });
  const [currentUser, setCurrentUser] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  console.log("Data Pengguna:", users);
  console.log("Pengguna Saat Ini:", currentUser);

  const handleNavigate = (path, data = null) => {
    if (path === "detailproduk" && data) {
      setSelectedCourse(data);

      navigate(`/detailproduk/${data.id}`);
    } else {
      navigate(path);
    }

    window.scrollTo(0, 0);
  };

  const handleAddUser = (newUser) => {
    const userWithOrders = { ...newUser, id: Date.now(), orders: [] };
    setUsers((prevUsers) => [...prevUsers, userWithOrders]);
    alert("Pendaftaran berhasil! Silakan login.");
    navigate("/login");
  };

  const handleLogin = (loginData) => {
    const user = users.find(
      (u) => u.email === loginData.email && u.password === loginData.password
    );
    if (user) {
      setIsLoggedIn(true);
      setCurrentUser(user);
      navigate("/");
    } else {
      alert("Email atau kata sandi salah!");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    navigate("/");
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
      navigate("/login");
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
    navigate("/pesanan");
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
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Beranda
              onNavigate={handleNavigate}
              isLoggedIn={isLoggedIn}
              onLogout={handleLogout}
            />
          }
        />
        <Route
          path="/login"
          element={
            <LoginPage onNavigate={handleNavigate} onLogin={handleLogin} />
          }
        />
        <Route
          path="/register"
          element={
            <RegisterPage
              onNavigate={handleNavigate}
              onAddUser={handleAddUser}
            />
          }
        />
        <Route
          path="/semuaproduk"
          element={
            <SemuaProduk
              onNavigate={handleNavigate}
              isLoggedIn={isLoggedIn}
              onLogout={handleLogout}
            />
          }
        />
        <Route
          path="/detailproduk/:id"
          element={
            <DetailProduk
              onNavigate={handleNavigate}
              isLoggedIn={isLoggedIn}
              course={selectedCourse}
              onBuatPesanan={() => handleCreateOrder(selectedCourse)}
            />
          }
        />

        <Route
          path="/pesanan"
          element={
            isLoggedIn ? (
              <PesananSaya
                onNavigate={handleNavigate}
                onLogout={handleLogout}
                currentUser={currentUser}
                onDeleteOrder={handleDeleteOrder}
              />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/kelas"
          element={
            isLoggedIn ? (
              <KelasSaya onNavigate={handleNavigate} onLogout={handleLogout} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/profil"
          element={
            isLoggedIn ? (
              <ProfilSaya
                onNavigate={handleNavigate}
                onLogout={handleLogout}
                currentUser={currentUser}
                onUpdateUser={handleUpdateUser}
                onDeleteUser={handleDeleteUser}
              />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        {/* Rute Pembayaran */}
        <Route
          path="/metodepembayaran"
          element={
            isLoggedIn ? (
              <MetodePembayaran
                onNavigate={handleNavigate}
                selectedMethodId={selectedPaymentMethod}
                onMethodChange={setSelectedPaymentMethod}
              />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/bayar"
          element={
            isLoggedIn ? (
              <HalamanBayar
                onNavigate={handleNavigate}
                selectedMethodId={selectedPaymentMethod}
              />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/ubahmetode"
          element={
            isLoggedIn ? (
              <UbahMetode
                onNavigate={handleNavigate}
                selectedMethodId={selectedPaymentMethod}
                onMethodChange={setSelectedPaymentMethod}
              />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/infopayment"
          element={
            isLoggedIn ? (
              <InfoPayment onNavigate={handleNavigate} status="success" />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        {/* Rute Default */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
