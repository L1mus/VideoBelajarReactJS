import Button from "./Button/Button";

function Newsletter() {
  return (
    <section
      className="py-16 px-4 text-text-light-primary text-center rounded-lg shadow-lg overflow-hidden relative"
      style={{
        backgroundImage: `url('/assets/images/cover8.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="relative z-10 max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold font-poppins">
          Mau Belajar Lebih Banyak?
        </h2>
        <p className="mt-2 text-text-light-primary">
          Daftarkan email Anda untuk mendapatkan informasi terbaru seputar promo
          spesial dan program-program terbaik lainnya.
        </p>
        <div className="mt-6 max-w-md mx-auto">
          <form
            action="Submit"
            className="flex flex-col gap-3 sm:flex-row sm:gap-0 items-center bg-other-primary-background rounded-lg shadow px-2 py-2 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="Masukkan alamat email"
              className="flex-grow px-4 py-2 rounded-lg focus:outline-none text-text-dark-primary bg-transparent w-full"
            />
            <Button variant="secondary" className="flex-shrink-0">
              Berlangganan
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
