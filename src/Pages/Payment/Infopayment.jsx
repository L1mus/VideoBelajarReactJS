import React, { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import useMediaQuery from "../../hooks/useMediaQuery";
import Navbar from "../../components/Navbar";
import Stepper from "../../components/Step/Stepper";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer";
import paymentDoneImg from "/assets/images/paymentdone.png";
import paymentFailedImg from "/assets/images/paymentfailed.png";

const InfoCard = ({ status, onNavigate }) => {
  const isSuccess = status === "success";
  const title = isSuccess ? "Pembayaran Berhasil!" : "Pembayaran Tertunda!";
  const message =
    "Silakan cek email kamu untuk informasi lebih lanjut. Hubungi kami jika ada kendala.";
  const image = isSuccess ? paymentDoneImg : paymentFailedImg;

  return (
    <div className="bg-other-primary-background p-8 rounded-lg shadow-md max-w-lg mx-auto text-center">
      <img src={image} alt={title} className="w-64 h-auto mx-auto mb-6" />
      <h1 className="text-3xl font-bold font-poppins mb-3">{title}</h1>
      <p className="text-text-dark-secondary mb-8">{message}</p>
      <Button variant="primary" onClick={() => onNavigate("/pesanan")}>
        Lihat Detail Pesanan
      </Button>
    </div>
  );
};

function InfoPayment({ status = "success" }) {
  const { handlePayment } = useContext(UserContext);
  const location = useLocation();
  const navigate = useNavigate();

  const { orderId } = location.state || {};

  useEffect(() => {
    const processPayment = async () => {
      if (orderId) {
        const paymentStatus = status === "success" ? "Berhasil" : "Gagal";
        await handlePayment(orderId, paymentStatus);
      }
    };

    processPayment();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orderId, status]);

  const isDesktop = useMediaQuery("(min-width: 768px)");
  const stepperComponent = (
    <Stepper steps={["Pilih Metode", "Bayar", "Selesai"]} currentStep={2} />
  );

  return (
    <div className="bg-main-secondary4 min-h-screen flex flex-col">
      <Navbar desktopContent={isDesktop ? stepperComponent : null} />
      <main className="flex-grow flex items-center justify-center container mx-auto px-4 sm:px-6 py-10">
        <div className="w-full">
          {!isDesktop && (
            <div className="w-full max-w-3xl mx-auto mb-8">
              {stepperComponent}
            </div>
          )}
          <InfoCard status={status} onNavigate={navigate} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default InfoPayment;
