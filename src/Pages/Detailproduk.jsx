import React from "react";

// Import komponen yang sudah ada
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Avatar from "../components/Avatar";
import Button from "../components/Button/Button";
import CourseCard from "../components/Card/CourseCard";
import Accordion from "../components/Layout/Accordion";

// Import data & ikon
import { courses } from "../data/courses";
import userAvatar from "/assets/images/avatar.png";
import tutorAvatar from "/assets/images/avatar5.png";
import iconStar from "/assets/icon/icon-star.png";
import iconStarEmpty from "/assets/icon/icon-star2.png";
import iconVideo from "/assets/icon/icon-video.png";
import iconCertificate from "/assets/icon/icon-certificate.png";
import iconWorld from "/assets/icon/icon-world.png";
import iconPlay from "/assets/icon/icon-play.png";
import heroImage from "/assets/images/cover4.png";

// --- Komponen kecil spesifik untuk halaman ini ---

const PurchaseCard = ({ onNavigate }) => (
  <div className="w-full lg:w-96 bg-white rounded-lg shadow-lg lg:sticky top-10">
    <div className="relative">
      <img
        src={heroImage}
        alt="Course preview"
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-t-lg">
        <img src={iconPlay} alt="Play" className="w-14 h-14" />
      </div>
    </div>
    <div className="p-6">
      <h2 className="font-poppins font-bold text-lg mb-3">
        Gapai Karier Impianmu sebagai Seorang UI/UX Designer & Product Manager.
      </h2>
      <div className="flex items-center gap-3 mb-4">
        <span className="text-xl font-bold text-green-600">Rp 250K</span>
        <span className="text-gray-500 line-through">Rp 500K</span>
      </div>
      <div className="flex flex-col gap-3">
        <Button
          variant="secondary"
          className="w-full"
          onClick={() => onNavigate("metodepembayaran")}
        >
          Beli Sekarang
        </Button>
        <Button variant="primary1" className="w-full">
          Tambah ke Keranjang
        </Button>
      </div>
      <ul className="mt-5 space-y-3 text-gray-700">
        <li className="flex items-center gap-3">
          <img src={iconCertificate} alt="Sertifikat" className="w-5 h-5" />
          <span>Sertifikat</span>
        </li>
        <li className="flex items-center gap-3">
          <img src={iconVideo} alt="Modul Video" className="w-5 h-5" />
          <span>12 Modul Video</span>
        </li>
        <li className="flex items-center gap-3">
          <img src={iconWorld} alt="Bahasa" className="w-5 h-5" />
          <span>Bahasa Indonesia</span>
        </li>
      </ul>
    </div>
  </div>
);

const HeroStarRating = ({ rating, reviews }) => (
  <div className="flex items-center gap-2">
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <img key={i} src={iconStar} alt="star" className="w-5 h-5" />
      ))}
    </div>
    <span className="text-white font-semibold">
      {rating} ({reviews} ulasan)
    </span>
  </div>
);

const CardStarRating = ({ rating }) => {
  const totalStars = 5;
  const fullStars = Math.floor(rating);
  const emptyStars = totalStars - fullStars;

  return (
    <div className="flex items-center gap-2 mt-3">
      <div className="flex">
        {[...Array(fullStars)].map((_, i) => (
          <img
            key={`full-${i}`}
            src={iconStar}
            alt="Full Star"
            className="w-4 h-4"
          />
        ))}
        {[...Array(emptyStars)].map((_, i) => (
          <img
            key={`empty-${i}`}
            src={iconStarEmpty}
            alt="Empty Star"
            className="w-4 h-4"
          />
        ))}
      </div>
      <span className="text-sm font-semibold text-gray-700">{rating}</span>
    </div>
  );
};

const InfoCard = ({ avatar, name, subtitle, description, rating }) => (
  <div className="bg-white border border-gray-200 rounded-lg p-4 flex-1 min-w-[300px]">
    <div className="flex items-center gap-3">
      <Avatar src={avatar} size="md" />
      <div>
        <h4 className="font-bold text-gray-800">{name}</h4>
        <p className="text-sm text-gray-500">{subtitle}</p>
      </div>
    </div>
    <p className="text-sm text-gray-600 mt-3 leading-relaxed">{description}</p>
    {rating && <CardStarRating rating={rating} />}
  </div>
);

function DetailProdukPage({ onNavigate, isLoggedIn }) {
  const NavLinks = () => (
    <a
      href="#"
      onClick={() => onNavigate("semuaproduk")}
      className="text-gray-600 hover:text-primary py-2"
    >
      Kategori
    </a>
  );

  const tutorDescription =
    "Berkarier di bidang HR selama lebih dari 3 tahun. Saat ini bekerja sebagai Senior Talent Acquisition Specialist di Wings Group Indonesia (Sayap Mas Utama) selama hampir 1 tahun.";

  return (
    <div className="bg-other-base-background font-DM-Sans">
      <Navbar
        desktopContent={
          isLoggedIn ? (
            <>
              <NavLinks />
              <Avatar src={userAvatar} alt="User Avatar" size="md" />
            </>
          ) : (
            <>
              <NavLinks />
              <div className="flex items-center space-x-2">
                <Button variant="primary" onClick={() => onNavigate("login")}>
                  Login
                </Button>
                <Button
                  variant="primary1"
                  onClick={() => onNavigate("register")}
                >
                  Register
                </Button>
              </div>
            </>
          )
        }
        mobileMenu={<NavLinks />}
      />

      <main className="container mx-auto px-6 py-8">
        <p className="text-sm text-gray-500 mb-4">
          Beranda &gt; Desain &gt;{" "}
          <span className="text-gray-800">Gapai Karier Impianmu...</span>
        </p>

        <section
          className="py-12 px-8 text-white rounded-lg relative overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="relative z-10 max-w-3xl">
            <h1 className="text-4xl font-bold font-poppins leading-tight">
              Gapai Karier Impianmu sebagai Seorang UI/UX Designer & Product
              Manager.
            </h1>
            <p className="mt-2 text-gray-200">
              Ikuti jejak para expert di bidang UI/UX Design & Product
              Management bersama tutor profesional di Video Course.
            </p>
            <div className="mt-3">
              <HeroStarRating rating={4.9} reviews={230} />
            </div>
          </div>
        </section>

        {/* --- PERUBAHAN LOGIKA TATA LETAK DIMULAI DI SINI --- */}
        <div className="flex flex-col lg:flex-row gap-8 mt-8 items-start">
          {/* Kolom Kanan (PurchaseCard) - Muncul pertama di mobile */}
          <div className="w-full lg:w-auto order-1 lg:order-2">
            <PurchaseCard onNavigate={onNavigate} />
          </div>

          {/* Kolom Kiri (Konten Utama) - Muncul kedua di mobile */}
          <div className="w-full lg:flex-grow space-y-8 order-2 lg:order-1">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold font-poppins mb-3">
                Deskripsi
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Foundations of User Experience (UX) Design adalah yang pertama
                dari rangkaian tujuh kursus yang akan membekali Anda dengan
                keterampilan yang dibutuhkan untuk melamar pekerjaan tingkat
                pemula dalam desain pengalaman pengguna. Desainer UX fokus pada
                interaksi yang dilakukan orang dengan produk seperti situs web,
                aplikasi seluler, dan objek fisik. Desainer UX membuat interaksi
                sehari-hari itu dapat digunakan, menyenangkan, dan dapat
                diakses.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold font-poppins mb-4">
                Belajar bersama Tutor Profesional
              </h2>
              <div className="flex flex-col md:flex-row gap-4">
                <InfoCard
                  avatar={tutorAvatar}
                  name="Gregorius Edrik Lawanto"
                  subtitle="Senior Talent Acquisition di WingsGroup"
                  description={tutorDescription}
                />
                <InfoCard
                  avatar={tutorAvatar}
                  name="Gregorius Edrik Lawanto"
                  subtitle="Senior Talent Acquisition di WingsGroup"
                  description={tutorDescription}
                />
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold font-poppins mb-2">
                Kamu akan Mempelajari
              </h2>
              <Accordion
                title="Introduction to Course 1: Foundations of User Experience Design"
                defaultOpen={true}
              >
                <div className="flex justify-between items-center p-2 hover:bg-gray-50 rounded">
                  <span>The basics of your experience design</span>{" "}
                  <span className="text-sm text-gray-500">
                    Video (12 Menit)
                  </span>
                </div>
                <div className="flex justify-between items-center p-2 hover:bg-gray-50 rounded">
                  <span>Jobs in the field of user experience</span>{" "}
                  <span className="text-sm text-gray-500">
                    Video (12 Menit)
                  </span>
                </div>
              </Accordion>
              <Accordion title="The product development life cycle">
                {/* Konten di sini */}
              </Accordion>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold font-poppins mb-4">
                Rating dan Review
              </h2>
              <div className="flex flex-col md:flex-row gap-4">
                <InfoCard
                  avatar={tutorAvatar}
                  name="Gregorius Edrik Lawanto"
                  subtitle="Alumni Batch 2"
                  description={tutorDescription}
                  rating={3.5}
                />
                <InfoCard
                  avatar={tutorAvatar}
                  name="Gregorius Edrik Lawanto"
                  subtitle="Alumni Batch 4"
                  description={tutorDescription}
                  rating={3.5}
                />
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-poppins mb-4">
                Video Pembelajaran Terkait Lainnya
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map((course) => (
                  <CourseCard
                    key={course.id}
                    data={course}
                    onClick={() => onNavigate("detailproduk")}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default DetailProdukPage;
