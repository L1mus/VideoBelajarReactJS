import { useState } from "react";
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
  const [currentPage, setCurrentPage] = useState("kelas");
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);

  const handleNavigate = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    handleNavigate("beranda");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    handleNavigate("beranda");
  };

  const renderPage = () => {
    switch (currentPage) {
      case "beranda":
      default:
        return <Beranda onNavigate={handleNavigate} isLoggedIn={isLoggedIn} />;
      case "login":
        return <LoginPage onNavigate={handleNavigate} onLogin={handleLogin} />;
      case "register":
        return <RegisterPage onNavigate={handleNavigate} />;
      case "semuaproduk":
        return (
          <SemuaProduk onNavigate={handleNavigate} isLoggedIn={isLoggedIn} />
        );
      case "detailproduk":
        return (
          <DetailProduk onNavigate={handleNavigate} isLoggedIn={isLoggedIn} />
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
      case "pesanan":
        return (
          <PesananSaya
            onNavigate={handleNavigate}
            isLoggedIn={isLoggedIn}
            onLogout={handleLogout}
          />
        );
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
            isLoggedIn={isLoggedIn}
            onLogout={handleLogout}
          />
        );
    }
  };

  return <div>{renderPage()}</div>;
}

export default App;
