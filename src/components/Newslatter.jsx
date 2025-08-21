import Button from "./Button/Button";

function Newsletter() {
  return (
    <section
      className="py-16 px-4 text-white text-center rounded-lg shadow-lg overflow-hidden relative"
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
        <p className="mt-2 text-gray-300">
          Daftarkan email Anda untuk mendapatkan informasi terbaru seputar promo
          spesial dan program-program terbaik lainnya.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Masukkan alamat email"
            className="w-full px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-secondary"
          />
          <Button variant="secondary" className="flex-shrink-0">
            Berlangganan
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
