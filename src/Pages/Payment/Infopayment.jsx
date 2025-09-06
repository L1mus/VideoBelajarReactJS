import React from "react";
import useMediaQuery from "../../Hooks/useMediaQuery";
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
      <p className="text-text-light-disabled mb-8">{message}</p>
      <Button variant="primary" onClick={() => onNavigate("pesanan")}>
        Lihat Detail Pesanan
      </Button>
    </div>
  );
};

function InfoPayment({ onNavigate, status = "success" }) {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <div className="bg-other-base-background min-h-screen font-DM-Sans">
      <Navbar
        centerContent={
          isDesktop ? (
            <Stepper
              steps={["Pilih Metode", "Bayar", "Selesai"]}
              currentStep={2}
            />
          ) : null
        }
      />

      <div className="container mx-auto px-6 py-12 flex flex-col items-center">
        {!isDesktop && (
          <div className="w-full max-w-3xl mb-8">
            <Stepper
              steps={["Pilih Metode", "Bayar", "Selesai"]}
              currentStep={2}
            />
          </div>
        )}
        <InfoCard status={status} onNavigate={onNavigate} />
      </div>
      <Footer />
    </div>
  );
}

export default InfoPayment;
