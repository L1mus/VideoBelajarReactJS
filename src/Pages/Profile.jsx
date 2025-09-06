import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Avatar from "../components/Avatar";
import Dropdown from "../components/Dropdown/Dropdownmenu";
import DropdownItem from "../components/Dropdown/Dropdonwitem";
import Sidebar from "../components/Layout/Sidebar";
import InputField from "../components/InputFormControl/InputField";
import SelectField from "../components/InputFormControl/SelectField";
import Button from "../components/Button/Button";
import PhoneNumberInput from "../components/InputFormControl/PhoneNumberInput";

import userAvatar from "/assets/images/avatar.png";
import iconLogout from "/assets/icon/icon-logout.png";

function ProfilSaya({ onNavigate, onLogout }) {
  const [formData, setFormData] = useState({
    fullName: "Jennie Ruby Jane",
    email: "rubyjane@gmail.com",
    gender: "wanita",
    phone: "81234567890",
    password: "howyoulikethat",
    confirmPassword: "howyoulikethat",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const genderOptions = [
    { value: "wanita", label: "Wanita" },
    { value: "pria", label: "Pria" },
  ];

  const NavLinks = () => (
    <a
      href="#"
      onClick={() => onNavigate("semuaproduk")}
      className="text-text-dark-secondary hover:text-primary py-2 font-semibold"
    >
      Kategori
    </a>
  );

  const LogoutIcon = () => (
    <img src={iconLogout} alt="Logout" className="pl-1 w-5 h-5" />
  );

  return (
    <div className="bg-main-secondary4">
      <Navbar
        onLogoClick={() => onNavigate("beranda")}
        desktopContent={
          <>
            <NavLinks />
            <Dropdown
              trigger={
                <button>
                  <Avatar src={userAvatar} alt="User Avatar" size="md" />
                </button>
              }
            >
              <DropdownItem onClick={() => onNavigate("profil")}>
                Profil Saya
              </DropdownItem>
              <DropdownItem onClick={() => onNavigate("kelas")}>
                Kelas Saya
              </DropdownItem>
              <DropdownItem onClick={() => onNavigate("pesanan")}>
                Pesanan Saya
              </DropdownItem>
              <div className="my-1 border-t border-other-border" />
              <DropdownItem onClick={onLogout}>
                <div className="flex items-center font-semibold text-error-hover">
                  Keluar <LogoutIcon />
                </div>
              </DropdownItem>
            </Dropdown>
          </>
        }
        mobileMenu={<NavLinks />}
      />

      <main className="container mx-auto max-w-screen-xl px-4 sm:px-6 py-10">
        <h1 className="text-2xl md:text-3xl font-bold font-poppins text-text-dark-primary">
          Ubah Profil
        </h1>
        <p className="text-text-dark-secondary mt-1">Ubah data diri Anda</p>

        <div className="flex flex-col lg:flex-row gap-8 mt-8">
          <Sidebar activeTab="Profil Saya" onNavigate={onNavigate} />

          <div className="w-full lg:w-3/4">
            <div className="bg-other-primary-background p-6 rounded-lg shadow-sm">
              <div className="flex flex-col sm:flex-row items-center gap-4 border-b border-other-border pb-6 mb-6">
                <Avatar src={userAvatar} alt="User Avatar" size="xl" />
                <div>
                  <h2 className="text-xl font-bold font-poppins">
                    {formData.fullName}
                  </h2>
                  <p className="text-text-dark-secondary">{formData.email}</p>
                  <button className="text-sm text-main-primary font-semibold mt-1 hover:underline">
                    Ganti Foto Profil
                  </button>
                </div>
              </div>

              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <InputField
                    variant="outline"
                    label="Nama Lengkap"
                    name="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={handleInputChange}
                  />
                  <InputField
                    variant="outline"
                    label="E-Mail"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  <SelectField
                    variant="outline"
                    label="Jenis Kelamin"
                    name="gender"
                    options={genderOptions}
                    value={formData.gender}
                    onChange={handleInputChange}
                  />
                  <PhoneNumberInput
                    variant="outline"
                    label="No. Hp"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                  <InputField
                    variant="outline"
                    label="Kata Sandi"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                  <InputField
                    variant="outline"
                    label="Konfirmasi Kata Sandi"
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex justify-end pt-4">
                  <Button variant="primary" onClick={(e) => e.preventDefault()}>
                    Simpan
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ProfilSaya;
