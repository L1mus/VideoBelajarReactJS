import React, { useState } from "react";
import Navbar from "../components/Navbar";
import InputField from "../components/InputFormControl/InputField";
import Button from "../components/Button/Button";
import iconGoogle from "/assets/icon/icon-google.png";

const LoginPage = ({ onNavigate, onLogin }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(formData);
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen px-3 md:px-9 flex items-center justify-center gap-9 bg-main-secondary4">
        <div className="bg-other-primary-background p-9 rounded-xl shadow-lg w-full max-w-xl">
          <div className="text-center mb-8">
            <h2 className="font-poppins text-3xl font-bold">Masuk ke Akun</h2>
            <p className=" text-text-dark-secondary mt-2">
              Yuk, lanjutin belajarmu di videobelajar.
            </p>
          </div>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <InputField
              label="E-Mail"
              name="email"
              type="email"
              placeholder="contoh@email.com"
              value={formData.email}
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
            <div className="text-right -mt-2">
              <a href="#" className="text-sm text-primary hover:underline">
                Lupa Password?
              </a>
            </div>
            <div className="flex flex-col gap-3 pt-3">
              <Button variant="primary" onClick={handleSubmit}>
                Masuk
              </Button>
              <Button
                variant="primary1"
                onClick={() => onNavigate("/register")}
              >
                Daftar
              </Button>
              <div className="text-center text-text-dark-secondary">atau</div>
              <button
                type="button"
                className="w-full flex items-center justify-center px-4 py-3 border border-other-border rounded-lg hover:bg-other-secondary-background"
              >
                <img src={iconGoogle} alt="Google" className="w-5 h-5 mr-3" />
                Masuk dengan Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
