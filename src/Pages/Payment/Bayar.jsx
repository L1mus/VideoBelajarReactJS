import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Stepper from "../../components/Step/Stepper";
import Accordion from "../../components/Layout/Accordion";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer";
import useMediaQuery from "../../hooks/useMediaQuery";
import OrderSummaryCard from "../../components/Card/OrderSummaryCard";
import { paymentDetails } from "../../Data/MetodePay";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(55 * 60 + 55); // 50 menit 55 detik

  useEffect(() => {
    if (timeLeft === 0) return;
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600)
      .toString()
      .padStart(2, "0");
    const m = Math.floor((seconds % 3600) / 60)
      .toString()
      .padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return { h, m, s };
  };

  const { h, m, s } = formatTime(timeLeft);

  return (
    <div className="text-center bg-main-tertiary4 p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold text-text-dark-primary">
        Selesaikan pemesanan dalam
      </h2>
      <div className="flex justify-center items-center gap-2 text-2xl font-bold mt-2">
        <span className="bg-main-tertiary text-text-light-primary px-3 py-2 rounded-md min-w-[48px] text-center">
          {h}
        </span>
        <span className="text-main-tertiary">:</span>
        <span className="bg-main-tertiary text-text-light-primary px-3 py-2 rounded-md min-w-[48px] text-center">
          {m}
        </span>
        <span className="text-main-tertiary">:</span>
        <span className="bg-main-tertiary text-text-light-primary px-3 py-2 rounded-md min-w-[48px] text-center">
          {s}
        </span>
      </div>
    </div>
  );
};

function HalamanBayar({ onNavigate, selectedMethodId = "bca" }) {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const method = paymentDetails[selectedMethodId] || paymentDetails.bca;

  const stepperComponent = (
    <Stepper steps={["Pilih Metode", "Bayar", "Selesai"]} currentStep={1} />
  );

  return (
    <div className="bg-main-secondary4 min-h-screen">
      <Navbar desktopContent={isDesktop ? stepperComponent : null} />

      <div className="container mx-auto px-4 sm:px-6 py-8">
        {!isDesktop && (
          <div className="max-w-3xl mx-auto mb-6">{stepperComponent}</div>
        )}
        <div className="max-w-xl mx-auto mb-6">
          <CountdownTimer />
        </div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 items-start">
          <div className="w-full lg:w-1/3 order-1 lg:order-2">
            <OrderSummaryCard />
          </div>

          <div className="w-full lg:w-2/3 order-2 lg:order-1 space-y-6">
            <div className="bg-other-primary-background p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold font-poppins mb-4">
                Metode Pembayaran
              </h2>
              <div className="flex flex-col items-center text-center gap-2 border border-other-border p-4 rounded-lg">
                <img
                  src={method.icon}
                  alt={method.name}
                  className="h-10 mb-2"
                />
                <p className="font-semibold text-lg">
                  Bayar Melalui {method.name}
                </p>
                <div>
                  <span className="text-text-dark-secondary">{method.va}</span>
                  <span className="text-main-primary font-semibold cursor-pointer ml-2 hover:underline">
                    Salin
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-other-primary-background p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold font-poppins mb-4">
                Ringkasan Pesanan
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <p className="text-text-dark-secondary max-w-xs">
                    Video Learning: Gapai Karier Impianmu...
                  </p>
                  <p className="text-text-dark-primary font-semibold">
                    Rp 767.500
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-text-dark-secondary">Biaya Admin</p>
                  <p className="text-text-dark-primary font-semibold">
                    Rp 7.000
                  </p>
                </div>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between font-bold text-lg">
                <p>Total Pembayaran</p>
                <p className="text-main-primary">Rp 774.500</p>
              </div>
              <div className="flex flex-col md:flex-row gap-4 mt-6">
                <Button
                  variant="primary1"
                  className="w-full"
                  onClick={() => onNavigate("/ubahmetode")}
                >
                  Ganti Metode Pembayaran
                </Button>
                <Button
                  variant="primary"
                  className="w-full"
                  onClick={() => onNavigate("/infopayment")}
                >
                  Bayar Sekarang
                </Button>
              </div>
            </div>

            <div className="bg-other-primary-background p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold font-poppins mb-2">
                Tata Cara Pembayaran
              </h2>
              <div>
                {method.instructions.atm && (
                  <Accordion
                    title={`ATM ${method.name}`}
                    defaultOpen={true}
                    titleColor="dark-primary"
                  >
                    <ol className="list-decimal list-inside space-y-1 text-sm text-text-dark-secondary">
                      {method.instructions.atm.map((step, i) => (
                        <li key={i}>{step}</li>
                      ))}
                    </ol>
                  </Accordion>
                )}
                {method.instructions.mobile && (
                  <Accordion
                    title={`Mobile Banking ${method.name}`}
                    titleColor="dark-primary"
                  >
                    <ol className="list-decimal list-inside space-y-1 text-sm text-text-dark-secondary">
                      {method.instructions.mobile.map((step, i) => (
                        <li key={i}>{step}</li>
                      ))}
                    </ol>
                  </Accordion>
                )}
                {method.instructions.internet && (
                  <Accordion
                    title={`Internet Banking ${method.name}`}
                    titleColor="dark-primary"
                  >
                    <ol className="list-decimal list-inside space-y-1 text-sm text-text-dark-secondary">
                      {method.instructions.internet.map((step, i) => (
                        <li key={i}>{step}</li>
                      ))}
                    </ol>
                  </Accordion>
                )}
                {method.instructions.ewallet && (
                  <Accordion
                    title={`Panduan ${method.name}`}
                    defaultOpen={true}
                    titleColor="dark-primary"
                  >
                    <ol className="list-decimal list-inside space-y-1 text-sm text-text-dark-secondary">
                      {method.instructions.ewallet.map((step, i) => (
                        <li key={i}>{step}</li>
                      ))}
                    </ol>
                  </Accordion>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HalamanBayar;
