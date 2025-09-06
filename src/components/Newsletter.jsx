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
          {/* Form sekarang hanya mengatur layout, bukan sebagai kontainer putih */}
          <form
            action="Submit"
            className="flex flex-col sm:flex-row gap-3 sm:gap-0 items-center"
          >
            <input
              type="email"
              placeholder="Masukkan alamat email"
              className="w-full flex-grow px-4 py-3 bg-other-primary-background text-text-dark-primary rounded-lg sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-main-secondary"
            />
            <Button
              variant="secondary"
              className="w-full sm:w-auto flex-shrink-0 sm:rounded-l-none"
            >
              Berlangganan
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
