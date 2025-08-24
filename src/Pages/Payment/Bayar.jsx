import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Stepper from "../../components/Step/Stepper";
import Accordion from "../../components/Layout/Accordion";
import Button from "../../components/Button/Button";
import Chip from "../../components/Button/Chip";
import Footer from "../../components/Footer";
import useMediaQuery from "../../hooks/useMediaQuery";

import courseImage from "/assets/images/cover1.png";
import iconBCA from "/assets/images/bca.png";
import iconUjian from "/assets/icon/icon-checktask.png";
import iconVideo from "/assets/icon/icon-video.png";
import iconDokumen from "/assets/icon/icon-notebook.png";
import iconSertifikat from "/assets/icon/icon-certificate.png";
import iconPretest from "/assets/icon/icon-edittask.png";
import iconBahasa from "/assets/icon/icon-world.png";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60 + 55);

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
    <div className="text-center bg-other-primary-background p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold text-text-dark-primary">
        Selesaikan pemesanan dalam
      </h2>
      <div className="text-2xl font-bold text-error-default mt-2">
        <span>{h}</span> : <span>{m}</span> : <span>{s}</span>
      </div>
    </div>
  );
};

const OrderSummaryCard = () => (
  <div className="bg-other-primary-background p-4 rounded-lg shadow-md">
    <img
      src={courseImage}
      alt="Course"
      className="hidden lg:block w-full h-40 object-cover rounded-md mb-4"
    />
    <h3 className="font-bold text-text-dark-primary leading-tight mb-2">
      Gapai Karier Impianmu sebagai Seorang UI/UX Designer & Product Manager.
    </h3>
    <div className="flex items-center gap-3 mb-4">
      <span className="text-xl font-bold text-main-primary1">Rp 250K</span>
      <span className="text-text-dark-secondary line-through">Rp 500K</span>
      <Chip variant="error" style="light">
        Diskon 50%
      </Chip>
    </div>
    <hr className="my-4" />
    <h4 className="font-bold mb-3">Kelas Ini Sudah Termasuk</h4>
    <div className="grid grid-cols-2 gap-y-2 text-sm text-text-dark-secondary">
      <div className="flex items-center gap-2">
        <img src={iconUjian} alt="Icon" className="w-4 h-4" /> Ujian Akhir
      </div>
      <div className="flex items-center gap-2">
        <img src={iconVideo} alt="Icon" className="w-4 h-4" /> 49 Video
      </div>
      <div className="flex items-center gap-2">
        <img src={iconDokumen} alt="Icon" className="w-4 h-4" /> 7 Dokumen
      </div>
      <div className="flex items-center gap-2">
        <img src={iconSertifikat} alt="Icon" className="w-4 h-4" /> Sertifikat
      </div>
      <div className="flex items-center gap-2">
        <img src={iconPretest} alt="Icon" className="w-4 h-4" /> Pretest
      </div>
    </div>
    <hr className="my-4" />
    <h4 className="font-bold mb-2">Bahasa Pengantar</h4>
    <div className="flex items-center gap-2 text-sm text-text-dark-secondary">
      <img src={iconBahasa} alt="Icon" className="w-4 h-4" /> Bahasa Indonesia
    </div>
  </div>
);

function HalamanBayar({ onNavigate }) {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  return (
    <div className="bg-other-base-background min-h-screen">
      <Navbar
        centerContent={
          isDesktop ? (
            <Stepper
              steps={["Pilih Metode", "Bayar", "Selesai"]}
              currentStep={1}
            />
          ) : null
        }
      />

      <div className="container mx-auto px-6 py-8">
        <div className="max-w-xl mx-auto mb-6">
          <CountdownTimer />
        </div>

        {/* Tampilkan mobile */}
        {!isDesktop && (
          <div className="max-w-3xl mx-auto mb-6">
            <Stepper
              steps={["Pilih Metode", "Bayar", "Selesai"]}
              currentStep={1}
            />
          </div>
        )}

        <div className="flex flex-col lg:flex-row gap-8 items-start max-w-6xl mx-auto">
          <div className="w-full lg:w-1/3 order-1 lg:order-2">
            <OrderSummaryCard />
          </div>
          <div className="w-full lg:w-2/3 space-y-6 order-2 lg:order-1">
            <div>
              <h2 className="text-xl font-bold mb-4">Metode Pembayaran</h2>
              <div className="bg-other-primary-background p-6 rounded-lg shadow-md flex flex-col items-center text-center gap-2">
                <img src={iconBCA} alt="BCA" className="h-10 mb-2" />
                <p className="font-semibold text-lg">
                  Bayar Melalui Virtual Account BCA
                </p>
                <div>
                  <span className="text-text-dark-secondary">
                    11739 081234567890
                  </span>
                  <span className="text-main-tertiary font-semibold cursor-pointer ml-2">
                    Salin
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold font-poppins mb-4">
                Ringkasan Pesanan
              </h2>
              <div className="bg-other-primary-background p-6 rounded-lg shadow-md">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <p className="text-text-dark-primary max-w-xs">
                      Video Learning: Gapai Karier Impianmu...
                    </p>
                    <p className="text-text-dark-primary">Rp 767.500</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-text-light-disabled">Biaya Admin</p>
                    <p className="text-text-dark-primary">Rp 7.000</p>
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
                    onClick={() => onNavigate("ubahmetode")}
                  >
                    Ganti Metode Pembayaran
                  </Button>
                  <Button
                    variant="primary"
                    className="w-full"
                    onClick={() => onNavigate("infopayment")}
                  >
                    Bayar Sekarang
                  </Button>
                </div>
              </div>
            </div>

            <div className="bg-other-primary-background p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-2">Tata Cara Pembayaran</h2>

              {/* Tampilan Desktop */}
              <div className="hidden lg:block">
                <Accordion title="ATM BCA" defaultOpen={true}>
                  <ol className="list-decimal list-inside space-y-2 text-text-dark-secondary">
                    <li>Masukkan kartu ATM dan PIN BCA Anda.</li>
                    <li>Di menu utama, pilih "Transaksi Lainnya".</li>
                  </ol>
                </Accordion>
                <Accordion title="Mobile Banking BCA">
                  <ol className="list-decimal list-inside space-y-2 text-text-dark-secondary">
                    <li>Buka Aplikasi BCA Mobile.</li>
                  </ol>
                </Accordion>
                <Accordion title="Internet Banking BCA">
                  <ol className="list-decimal list-inside space-y-2 text-text-dark-secondary">
                    <li>Login ke KlikBCA Individual.</li>
                  </ol>
                </Accordion>
              </div>
              {/* Tampilan Mobile */}
              <div className="lg:hidden">
                <Accordion title="Transfer Bank"></Accordion>
                <Accordion title="E-Wallet"></Accordion>
                <Accordion title="Kartu Kredit/Debit"></Accordion>
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
