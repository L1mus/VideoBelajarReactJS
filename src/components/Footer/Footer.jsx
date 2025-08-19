// src/components/common/Footer.jsx
import React, { useState } from "react";
import logo from "/assets/images/logo.png";
import iconLinkedin from "/assets/icon/icon-linkedin.png";
import iconFacebook from "/assets/icon/icon-facebook.png";
import iconInstagram from "/assets/icon/icon-instagram.png";
import iconTwitter from "/assets/icon/icon-twitter.png";
import iconArrow from "/assets/icon/icon-arrow.png";

const AccordionItem = ({ title, links, isOpen, onClick }) => (
  <div className="border-b border-gray-200 py-4">
    <button
      onClick={onClick}
      className="w-full flex justify-between items-center text-left font-poppins font-bold text-gray-800"
    >
      <span>{title}</span>
      <img
        src={iconArrow}
        alt="toggle"
        className={`w-4 h-4 transform transition-transform duration-300 ${
          isOpen ? "rotate-90" : ""
        }`}
      />
    </button>
    {isOpen && (
      <ul className="mt-3 pl-2 space-y-2">
        {links.map((link) => (
          <li key={link}>
            <a href="#" className="text-gray-600 hover:text-primary">
              {link}
            </a>
          </li>
        ))}
      </ul>
    )}
  </div>
);

const Footer = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (category) => {
    setOpenAccordion(openAccordion === category ? null : category);
  };

  const links = {
    Kategori: [
      "Digital & Teknologi",
      "Pemasaran",
      "Manajemen Bisnis",
      "Pengembangan Diri",
      "Desain",
    ],
    Perusahaan: [
      "Tentang Kami",
      "FAQ",
      "Kebijakan Privasi",
      "Ketentuan Layanan",
      "Bantuan",
    ],
    Komunitas: ["Tips Sukses", "Blog"],
  };

  const socialMedia = [
    { icon: iconLinkedin, alt: "LinkedIn" },
    { icon: iconFacebook, alt: "Facebook" },
    { icon: iconInstagram, alt: "Instagram" },
    { icon: iconTwitter, alt: "Twitter" },
  ];

  return (
    <footer className="bg-white font-sans text-gray-700 py-10 px-6 md:px-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <img src={logo} alt="Videobelajar Logo" className="h-8 mb-4" />
            <p className="font-bold text-lg mb-2">
              Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!
            </p>
            <p className="text-sm">
              Jl. Usman Effendi No. 50 Lowokwaru, Malang
            </p>
            <p className="text-sm">+62-877-7123-1234</p>
          </div>
          <div className="hidden md:col-span-1 lg:col-span-3 md:grid grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.keys(links).map((category) => (
              <div key={category}>
                <h3 className="font-poppins font-bold text-base mb-4">
                  {category}
                </h3>
                <ul className="space-y-3">
                  {links[category].map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="hover:text-primary hover:underline"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="block md:hidden col-span-1 -mt-4">
            {Object.keys(links).map((category) => (
              <AccordionItem
                key={category}
                title={category}
                links={links[category]}
                isOpen={openAccordion === category}
                onClick={() => toggleAccordion(category)}
              />
            ))}
          </div>
        </div>
        <hr className="my-8 border-gray-200" />
        <div className="flex flex-col-reverse md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mt-6 md:mt-0">
            @2023 Gerobok Sayur All Rights Reserved.
          </p>
          <div className="flex space-x-4">
            {socialMedia.map((social) => (
              <a
                href="#"
                key={social.alt}
                className="text-gray-500 border border-gray-300 rounded-full p-2 hover:bg-gray-100"
              >
                <img src={social.icon} alt={social.alt} className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
