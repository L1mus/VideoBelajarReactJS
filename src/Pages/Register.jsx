import React, { useState } from "react";
import Navbar from "../components/Navbar";
import InputField from "../components/InputFormControl/InputField";
import SelectField from "../components/InputFormControl/SelectField";
import Button from "../components/Button/Button";
import iconGoogle from "/assets/icon/icon-google.png";
import PhoneNumberInput from "../components/InputFormControl/PhoneNumberInput";

const RegisterPage = ({ onNavigate, onAddUser }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    gender: "pria",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Mencegah reload halaman

    // Validasi sederhana (bisa dikembangkan lebih lanjut)
    if (formData.password !== formData.confirmPassword) {
      alert("Konfirmasi kata sandi tidak cocok!");
      return;
    }
    if (!formData.fullName || !formData.email || !formData.password) {
      alert("Harap isi semua kolom yang wajib diisi.");
      return;
    }

    // Memanggil fungsi onAddUser dari props dengan membawa data form
    onAddUser(formData);
  };

  const genderOptions = [
    { value: "wanita", label: "Wanita" },
    { value: "pria", label: "Pria" },
  ];

  return (
    <div>
      <Navbar />
      <div className="min-h-screen px-3 py-6 md:px-9 flex items-center justify-center gap-9 bg-main-secondary4">
        <main className="flex-grow flex items-center justify-center p-4">
          <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-xl">
            <div className="text-center mb-8">
              <h2 className="font-poppins text-3xl font-bold">
                Pendaftaran Akun
              </h2>
              <p className=" text-text-dark-secondary mt-2">
                Yuk, daftarkan akunmu sekarang juga!
              </p>
            </div>
            <form className="space-y-5">
              <InputField
                label="Nama Lengkap"
                name="fullName"
                type="text"
                placeholder="Masukkan nama lengkap"
                value={formData.fullName}
                onChange={handleInputChange}
              />
              <InputField
                label="E-Mail"
                name="email"
                type="email"
                placeholder="contoh@email.com"
                value={formData.email}
                onChange={handleInputChange}
              />
              <SelectField
                label="Jenis Kelamin"
                name="gender"
                options={genderOptions}
                value={formData.gender}
                onChange={handleInputChange}
              />
              <PhoneNumberInput
                label="No. Hp"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
              />
              <InputField
                label="Kata Sandi"
                name="password"
                type="password"
                placeholder="********"
                value={formData.password}
                onChange={handleInputChange}
              />
              <InputField
                label="Konfirmasi Kata Sandi"
                name="confirmPassword"
                type="password"
                placeholder="********"
                value={formData.confirmPassword}
                onChange={handleInputChange}
              />

              <div className="flex flex-col gap-3 pt-3">
                <Button
                  variant="primary"
                  className="w-full"
                  onClick={handleSubmit}
                >
                  Daftar
                </Button>
                <Button
                  variant="primary1"
                  className="w-full"
                  onClick={() => onNavigate("login")}
                >
                  Masuk
                </Button>
                <div className="text-center text-text-dark-secondary">atau</div>
                <button
                  type="button"
                  className="w-full flex items-center justify-center px-4 py-3 border border-other-border rounded-lg hover:bg-other-secondary-background"
                >
                  <img src={iconGoogle} alt="Google" className="w-5 h-5 mr-3" />
                  Daftar dengan Google
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default RegisterPage;
