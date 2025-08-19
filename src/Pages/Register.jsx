import InputField from "../components/InputFormControl/InputField";
import SelectField from "../components/InputFormControl/SelectField"; // Impor komponen baru
import Button from "../components/Button/Button";
import iconGoogle from "/assets/icon/icon-google.png";

const RegisterPage = () => {
  const genderOptions = [
    { value: "wanita", label: "Wanita" },
    { value: "pria", label: "Pria" },
  ];

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
      <div className="text-center mb-8">
        <h2 className="font-poppins text-3xl font-bold">Pendaftaran Akun</h2>
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
        <InputField
          label="No. Hp"
          name="phone"
          type="tel"
          placeholder="812..."
        />
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

        <div className="pt-2 space-y-4">
          <Button variant="primary" onClick={(e) => e.preventDefault()}>
            Daftar
          </Button>
          <Button variant="primary-light" onClick={(e) => e.preventDefault()}>
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
  );
};

export default RegisterPage;
