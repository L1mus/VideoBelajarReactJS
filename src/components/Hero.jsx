import Button from "./Button/Button"; // Pastikan path ini benar

function Hero() {
  return (
    <section
      className="py-20 px-4 text-white text-center rounded-lg shadow-lg overflow-hidden relative"
      // Ganti dengan path gambar hero Anda
      style={{
        backgroundImage: `url('/assets/images/jumbotron.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold font-poppins leading-tight">
          Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video
          Interaktif!
        </h1>
        <p className="mt-4 text-lg text-gray-200">
          Temukan kursus terbaik yang relevan dengan minat dan karir Anda,
          dibimbing oleh para ahli di bidangnya.
        </p>
        <div className="mt-8">
          <Button variant="primary" size="lg">
            Telusuri Video Course
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
