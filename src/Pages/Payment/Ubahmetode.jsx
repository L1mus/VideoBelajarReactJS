import React, { useState } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import Navbar from "../../components/Navbar";
import Stepper from "../../components/Step/Stepper";
import Accordion from "../../components/Layout/Accordion";
import Button from "../../components/Button/Button";
import Chip from "../../components/Button/Chip";
import Footer from "../../components/Footer";

import courseImage from "/assets/images/cover1.png";
import iconCheck from "/assets/icon/icon-checkgreen.png";
import iconUjian from "/assets/icon/icon-checktask.png";
import iconVideo from "/assets/icon/icon-video.png";
import iconDokumen from "/assets/icon/icon-notebook.png";
import iconSertifikat from "/assets/icon/icon-certificate.png";
import iconPretest from "/assets/icon/icon-edittask.png";
import iconBahasa from "/assets/icon/icon-world.png";
import iconBCA from "/assets/images/bca.png";
import iconBNI from "/assets/images/bni.png";
import iconBRI from "/assets/images/bri.png";
import iconMandiri from "/assets/images/mandiri.png";
import iconDana from "/assets/images/dana.png";
import iconOVO from "/assets/images/ovo.png";
import iconLinkAja from "/assets/images/linkaja.png";
import iconShopee from "/assets/images/shopee.png";
import iconVisa from "/assets/images/visa.png";
import iconMastercard from "/assets/images/mastercard.png";
import iconJCB from "/assets/images/jcb.png";

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
      <span className="text-text-light-disabled line-through">Rp 500K</span>
      <Chip variant="secondary" style="solid">
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

const PaymentOption = ({ method, selectedMethod, onSelect }) => (
  <div
    onClick={() => onSelect(method.id)}
    className="flex justify-between items-center p-4 border border-other-border rounded-lg cursor-pointer hover:bg-text-light-secondary"
  >
    <div className="flex items-center gap-4">
      <img src={method.icon} alt={method.name} className="h-6" />
      <span>{method.name}</span>
    </div>
    {selectedMethod === method.id && (
      <img src={iconCheck} alt="Selected" className="w-5 h-5" />
    )}
  </div>
);

// Halaman Utama Ubah Metode
function UbahMetode({ onNavigate }) {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [selectedMethod, setSelectedMethod] = useState(null);
  const paymentMethods = {
    bank: [
      { name: "Bank BCA", icon: iconBCA, id: "bca" },
      { name: "Bank BNI", icon: iconBNI, id: "bni" },
      { name: "Bank BRI", icon: iconBRI, id: "bri" },
      { name: "Bank Mandiri", icon: iconMandiri, id: "mandiri" },
    ],
    ewallet: [
      { name: "Dana", icon: iconDana, id: "dana" },
      { name: "OVO", icon: iconOVO, id: "ovo" },
      { name: "LinkAja", icon: iconLinkAja, id: "linkaja" },
      { name: "Shopee Pay", icon: iconShopee, id: "shopee" },
    ],
  };

  return (
    <div className="bg-other-base-background min-h-screen">
      <Navbar
        centerContent={
          isDesktop ? (
            <Stepper
              steps={["Pilih Metode", "Bayar", "Selesai"]}
              currentStep={0}
            />
          ) : null
        }
      />

      <div className="container mx-auto px-6 py-8">
        {!isDesktop && (
          <div className="max-w-3xl mx-auto mb-6">
            <Stepper
              steps={["Pilih Metode", "Bayar", "Selesai"]}
              currentStep={0}
            />
          </div>
        )}

        <div className="flex flex-col lg:flex-row gap-8 items-start max-w-6xl mx-auto">
          {/* Kolom Kiri */}
          <div className="w-full lg:w-2/3 space-y-6 order-2 lg:order-1">
            <div className="bg-other-primary-background p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold font-poppins mb-4">
                Ringkasan Belanja
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <p className="text-lighbg-text-light-secondary0">
                    Total Harga (3 barang)
                  </p>
                  <p className="text-text-dark-primary">Rp 767.500</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-lighbg-text-light-secondary0">
                    Ongkos Kirim
                  </p>
                  <p className="text-text-dark-primary">Rp 7.000</p>
                </div>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between font-bold text-lg">
                <p>Total Pembayaran</p>
                <p className="text-main-primary">Rp 774.500</p>
              </div>
            </div>

            <div className="bg-other-primary-background p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-2">Ubah Metode Pembayaran</h2>
              <Accordion title="Transfer Bank" defaultOpen={true}>
                {paymentMethods.bank.map((method) => (
                  <PaymentOption
                    key={method.id}
                    method={method}
                    selectedMethod={selectedMethod}
                    onSelect={setSelectedMethod}
                  />
                ))}
              </Accordion>
              <Accordion title="E-Wallet">
                {paymentMethods.ewallet.map((method) => (
                  <PaymentOption
                    key={method.id}
                    method={method}
                    selectedMethod={selectedMethod}
                    onSelect={setSelectedMethod}
                  />
                ))}
              </Accordion>
              <Accordion title="Kartu Kredit/Debit">
                <div className="flex items-center p-4 border border-other-border rounded-lg">
                  <img src={iconVisa} alt="Visa" className="h-6 mr-2" />
                  <img
                    src={iconMastercard}
                    alt="Mastercard"
                    className="h-6 mr-2"
                  />
                  <img src={iconJCB} alt="JCB" className="h-6" />
                </div>
              </Accordion>
              <Button
                variant="primary"
                className="w-full"
                onClick={() => onNavigate("infopayment")}
              >
                Bayar Sekarang
              </Button>
            </div>
          </div>

          {/* Kolom Kanan */}
          <div className="w-full lg:w-1/3 order-1 lg:order-2">
            <OrderSummaryCard />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default UbahMetode;
