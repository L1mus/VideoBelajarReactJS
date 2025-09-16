import { useState } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
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
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const navigate = useNavigate();

  const handleNavigate = (path, data = null) => {
    if (path === "detailproduk" && data) {
      navigate(`/detailproduk/${data.id}`);
    } else {
      navigate(path);
    }
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <Routes>
        {/* Rute Publik */}
        <Route path="/" element={<Beranda onNavigate={handleNavigate} />} />
        <Route
          path="/login"
          element={<LoginPage onNavigate={handleNavigate} />}
        />
        <Route
          path="/register"
          element={<RegisterPage onNavigate={handleNavigate} />}
        />
        <Route
          path="/semuaproduk"
          element={<SemuaProduk onNavigate={handleNavigate} />}
        />
        <Route
          path="/detailproduk/:id"
          element={<DetailProduk onNavigate={handleNavigate} />}
        />

        {/* Rute Terproteksi */}
        <Route
          path="/pesanan"
          element={
            <ProtectedRoute>
              <PesananSaya onNavigate={handleNavigate} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/kelas"
          element={
            <ProtectedRoute>
              <KelasSaya onNavigate={handleNavigate} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profil"
          element={
            <ProtectedRoute>
              <ProfilSaya onNavigate={handleNavigate} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/metodepembayaran"
          element={
            <ProtectedRoute>
              <MetodePembayaran
                onNavigate={handleNavigate}
                selectedMethodId={selectedPaymentMethod}
                onMethodChange={setSelectedPaymentMethod}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="/bayar"
          element={
            <ProtectedRoute>
              <HalamanBayar
                onNavigate={handleNavigate}
                selectedMethodId={selectedPaymentMethod}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="/ubahmetode"
          element={
            <ProtectedRoute>
              <UbahMetode
                onNavigate={handleNavigate}
                selectedMethodId={selectedPaymentMethod}
                onMethodChange={setSelectedPaymentMethod}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="/infopayment"
          element={
            <ProtectedRoute>
              <InfoPayment onNavigate={handleNavigate} status="success" />
            </ProtectedRoute>
          }
        />

        {/* Rute Default */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
