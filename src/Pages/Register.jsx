import Navbar from "../components/Navbar";
import InputField from "../components/InputFormControl/InputField";
import SelectField from "../components/InputFormControl/SelectField";
import Button from "../components/Button/Button";
import iconGoogle from "/assets/icon/icon-google.png";
import iconIndonesia from "/assets/icon/icon-indonesia.png";

const RegisterPage = (onNavigate) => {
  const genderOptions = [
    { value: "wanita", label: "Wanita" },
    { value: "pria", label: "Pria" },
  ];

  return (
    <div>
      <Navbar />
      <div className="min-h-screen px-3 py-6 md:px-9 flex items-center justify-center gap-9 bg-main-secondary4">
        <main className="flex-grow flex items-center justify-center p-4 font-DM-Sans">
          <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-xl">
            <div className="text-center mb-8">
              <h2 className="font-poppins text-3xl font-bold">
                Pendaftaran Akun
              </h2>
              <p className="font-sans text-gray-500 mt-2">
                Yuk, daftarkan akunmu sekarang juga!
              </p>
            </div>
            <form className="space-y-5">
              <InputField
                label="Nama Lengkap"
                name="fullName"
                type="text"
                placeholder="Masukkan nama lengkap"
              />
              <InputField
                label="E-Mail"
                name="emailRegister"
                type="email"
                placeholder="contoh@email.com"
              />
              <SelectField
                label="Jenis Kelamin"
                name="gender"
                options={genderOptions}
              />
              <div>
                <label className="block font-medium text-gray-700 mb-2">
                  No. Hp <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center">
                  <div className="flex items-center border border-r-0 border-gray-300 bg-gray-50 rounded-l-lg px-3 py-3">
                    <img src={iconIndonesia} alt="ID" className="w-6 h-auto" />
                    <span className="font-sans ml-2 text-gray-700">+62</span>
                    <svg
                      className="w-4 h-4 ml-2 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="812..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-primary-hover"
                  />
                </div>
              </div>

              <InputField
                label="Kata Sandi"
                name="passwordRegister"
                type="password"
                placeholder="********"
              />
              <InputField
                label="Konfirmasi Kata Sandi"
                name="confirmPassword"
                type="password"
                placeholder="********"
              />

              <div className="flex flex-col gap-3">
                <Button
                  variant="primary"
                  className="w-full"
                  onClick={(e) => e.preventDefault()}
                >
                  Daftar
                </Button>
                <Button
                  variant="primary2"
                  className="w-full"
                  onClick={() => onNavigate("beranda")}
                >
                  Masuk
                </Button>
                <div className="text-center font-sans text-gray-400">atau</div>
                <button
                  type="button"
                  className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50"
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
