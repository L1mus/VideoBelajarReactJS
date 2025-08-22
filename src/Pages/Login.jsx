import Navbar from "../components/Navbar";
import InputField from "../components/InputFormControl/InputField";
import Button from "../components/Button/Button";
import iconGoogle from "/assets/icon/icon-google.png";

const LoginPage = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen px-3 md:px-9 flex items-center justify-center gap-9 bg-main-secondary4">
        <div className="bg-white  p-9 rounded-xl shadow-lg w-full max-w-xl font-DM-Sans">
          <div className="text-center mb-8">
            <h2 className="font-poppins text-3xl font-bold">Masuk ke Akun</h2>
            <p className="font-sans text-gray-500 mt-2">
              Yuk, lanjutin belajarmu di videobelajar.
            </p>
          </div>
          <form className="space-y-6">
            <InputField
              label="E-Mail"
              name="emailLogin"
              type="email"
              placeholder="contoh@email.com"
            />
            <InputField
              label="Kata Sandi"
              name="passwordLogin"
              type="password"
              placeholder="********"
            />
            <div className="text-right -mt-2">
              <a
                href="#"
                className="font-sans text-sm text-primary hover:underline"
              >
                Lupa Password?
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <Button variant="primary" onClick={(e) => e.preventDefault()}>
                Masuk
              </Button>
              <Button
                variant="primary-light"
                onClick={(e) => e.preventDefault()}
              >
                Daftar
              </Button>
              <div className="text-center font-sans text-gray-400">atau</div>
              <button
                type="button"
                className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50"
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
