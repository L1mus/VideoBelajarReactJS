import Button from "./Button/Button";

function Hero() {
  return (
    <section
      className="py-20 px-4 text-text-light-primary text-center rounded-lg shadow-lg overflow-hidden relative"
      style={{
        backgroundImage: `url('/assets/images/jumbotron.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold font-poppins leading-tight">
          Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video
          Interaktif!
        </h1>
        <p className="mt-4 text-lg text-text-light-primary">
          Temukan ilmu baru yang menarik dan mendalam melalui koleksi video
          pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat
          berpartisipasi dalam latihan interaktif yang akan meningkatkan
          pemahaman Anda.
        </p>
        <div className="mt-8">
          <Button variant="primary" size="lg">
            Temukan Video Course untuk Dipelajari!{" "}
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
