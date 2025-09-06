import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Stepper from "../../components/Step/Stepper";
import Accordion from "../../components/Layout/Accordion";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer";
import OrderSummaryCard from "../../components/Card/OrderSummaryCard";
import useMediaQuery from "../../hooks/useMediaQuery";

// Import Ikon
import iconCheck from "/assets/icon/icon-checkgreen.png";
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

const PaymentOption = ({ method, selectedMethod, onSelect }) => (
  <div
    onClick={() => onSelect(method.id)}
    className={`flex justify-between items-center p-4 border rounded-lg cursor-pointer transition-all duration-200 ${
      selectedMethod === method.id
        ? "border-main-primary bg-main-primary4"
        : "border-gray-200 hover:bg-gray-50"
    }`}
  >
    <div className="flex items-center gap-4">
      <img src={method.icon} alt={method.name} className="h-6" />
      <span className="font-semibold text-text-dark-primary">
        {method.name}
      </span>
    </div>
    {selectedMethod === method.id && (
      <img src={iconCheck} alt="Selected" className="w-5 h-5" />
    )}
  </div>
);

function MetodePembayaran({ onNavigate }) {
  const [selectedMethod, setSelectedMethod] = useState("bca");
  const isDesktop = useMediaQuery("(min-width: 768px)");

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

  const stepperComponent = (
    <Stepper steps={["Pilih Metode", "Bayar", "Selesai"]} currentStep={0} />
  );

  return (
    <div className="bg-other-base-background min-h-screen">
      <Navbar desktopContent={isDesktop ? stepperComponent : null} />
      <div className="container mx-auto px-4 sm:px-6 py-10">
        {!isDesktop && <div className="mb-8">{stepperComponent}</div>}

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 items-start">
          <div className="w-full lg:w-1/3 lg:order-2">
            <OrderSummaryCard />
          </div>

          <div className="w-full lg:w-2/3 lg:order-1 space-y-6">
            {/* Kartu Metode Pembayaran */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h1 className="text-2xl font-bold font-poppins mb-4">
                Metode Pembayaran
              </h1>
              <Accordion title="Transfer Bank" defaultOpen={true}>
                <div className="space-y-3">
                  {paymentMethods.bank.map((method) => (
                    <PaymentOption
                      key={method.id}
                      method={method}
                      selectedMethod={selectedMethod}
                      onSelect={setSelectedMethod}
                    />
                  ))}
                </div>
              </Accordion>
              <Accordion title="E-Wallet">
                <div className="space-y-3">
                  {paymentMethods.ewallet.map((method) => (
                    <PaymentOption
                      key={method.id}
                      method={method}
                      selectedMethod={selectedMethod}
                      onSelect={setSelectedMethod}
                    />
                  ))}
                </div>
              </Accordion>
              <Accordion title="Kartu Kredit/Debit">
                <div className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center gap-3">
                    <img src={iconVisa} alt="Visa" className="h-6" />
                    <img
                      src={iconMastercard}
                      alt="Mastercard"
                      className="h-6"
                    />
                    <img src={iconJCB} alt="JCB" className="h-6" />
                  </div>
                </div>
              </Accordion>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold font-poppins mb-4">
                Ringkasan Pesanan
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <p className="text-text-dark-secondary max-w-xs">
                    Video Learning: Gapai Karier Impianmu sebagai...
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
              <Button
                variant="primary"
                className="w-full mt-6"
                onClick={() => onNavigate("bayar")}
              >
                Beli Sekarang
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MetodePembayaran;
