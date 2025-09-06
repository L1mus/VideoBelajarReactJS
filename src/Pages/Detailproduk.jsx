import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Avatar from "../components/Avatar";
import Button from "../components/Button/Button";
import Chip from "../components/Button/Chip";
import CourseCard from "../components/Card/CourseCard";
import Accordion from "../components/Layout/Accordion";

import { courses } from "../data/courses";
import userAvatar from "/assets/images/avatar.png";
import tutorAvatar from "/assets/images/avatar5.png";
import iconStar from "/assets/icon/icon-star.png";
import iconStarEmpty from "/assets/icon/icon-star2.png";
import heroImage from "/assets/images/cover4.png";

import iconUjian from "/assets/icon/icon-checktask.png";
import iconVideo from "/assets/icon/icon-video.png";
import iconDokumen from "/assets/icon/icon-notebook.png";
import iconCertificate from "/assets/icon/icon-certificate.png";
import iconPretest from "/assets/icon/icon-edittask.png";
import iconWorld from "/assets/icon/icon-world.png";
import iconPlay2 from "/assets/icon/icon-play2.png";

const PurchaseCard = ({ course, onNavigate }) => {
  // menampilkan harga dalam format 'K'
  const formatPriceK = (value) => {
    if (value === 0) return "Gratis";
    return `Rp ${value / 1000}K`;
  };

  // menghitung diskon
  const discount = course.originalPrice
    ? Math.round(
        ((course.originalPrice - course.price) / course.originalPrice) * 100
      )
    : 0;

  return (
    <div className="w-full lg:w-96 bg-other-primary-background rounded-lg shadow-lg lg:sticky top-10 p-6">
      <h2 className="font-poppins font-bold text-2xl leading-tight mb-3">
        {course.title}
      </h2>
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-2">
        <span className="text-2xl font-bold text-main-primary">
          {formatPriceK(course.price)}
        </span>
        {course.originalPrice && (
          <span className="text-lg text-gray-400 line-through">
            {formatPriceK(course.originalPrice)}
          </span>
        )}
        {discount > 0 && (
          <Chip variant="secondary" style="solid">
            Diskon {discount}%
          </Chip>
        )}
      </div>

      <p className="text-sm text-info-default font-semibold mb-4 cursor-pointer hover:underline">
        {course.offerText}
      </p>

      <Button
        variant="primary"
        className="w-full"
        onClick={() => onNavigate("metodepembayaran")}
      >
        Beli Sekarang
      </Button>

      <hr className="my-5 border-other-border" />

      <h4 className="font-bold mb-3 text-text-dark-primary">
        Kelas Ini Sudah Termasuk
      </h4>
      <div className="grid grid-cols-2 gap-y-2 text-sm text-text-dark-secondary">
        {course.includes.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <img src={item.icon} alt="" className="w-4 h-4" /> {item.text}
          </div>
        ))}
      </div>

      <hr className="my-5 border-other-border" />

      <h4 className="font-bold mb-3 text-text-dark-primary">
        Bahasa Pengantar
      </h4>
      <div className="flex items-center gap-2 text-sm text-text-dark-secondary">
        <img src={course.language.icon} alt="" className="w-4 h-4" />
        {course.language.text}
      </div>
    </div>
  );
};

const HeroStarRating = ({ rating, reviews }) => (
  <div className="flex items-center gap-2">
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <img key={i} src={iconStar} alt="star" className="w-5 h-5" />
      ))}
    </div>
    <span className="text-text-light-primary font-semibold">
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
      <span className="text-sm font-semibold text-text-light-disabled">
        {rating}
      </span>
    </div>
  );
};

const InfoCard = ({ avatar, name, subtitle, description, rating }) => (
  <div className="bg-other-primary-background border border-other-border rounded-lg p-4 flex-1 min-w-[300px]">
    <div className="flex items-center gap-3">
      <Avatar src={avatar} size="md" />
      <div>
        <h4 className="font-bold text-text-dark-primary">{name}</h4>
        <p className="text-sm text-text-dark-secondary">{subtitle}</p>
      </div>
    </div>
    <p className="text-sm text-text-dark-secondary mt-3 leading-relaxed">
      {description}
    </p>
    {rating && <CardStarRating rating={rating} />}
  </div>
);

const CourseModuleItem = ({ title, type, duration }) => (
  <div className="flex justify-between items-center p-4 border border-gray-200 rounded-lg bg-other-primary-background">
    <span className="text-text-dark-primary text-sm">{title}</span>
    <div className="flex items-center gap-3 text-sm text-gray-500 flex-shrink-0">
      <img src={iconPlay2} alt="type" className="w-5 h-5" />
      <span>{type}</span>
      <span>{duration}</span>
    </div>
  </div>
);

function DetailProdukPage({ onNavigate, isLoggedIn }) {
  // Data dummy
  const currentCourse = {
    title:
      "Gapai Karier Impianmu sebagai Seorang UI/UX Designer & Product Manager.",
    price: 250000,
    originalPrice: 500000,
    offerText: "Penawaran spesial tersisa 2 hari lagi!",
    includes: [
      { icon: iconUjian, text: "Ujian Akhir" },
      { icon: iconVideo, text: "49 Video" },
      { icon: iconDokumen, text: "7 Dokumen" },
      { icon: iconCertificate, text: "Sertifikat" },
      { icon: iconPretest, text: "Pretest" },
    ],
    language: { icon: iconWorld, text: "Bahasa Indonesia" },
  };

  const NavLinks = () => (
    <a
      href="#"
      onClick={() => onNavigate("semuaproduk")}
      className="text-text-dark-secondary hover:text-primary py-2"
    >
      Kategori
    </a>
  );

  const tutorDescription =
    "Berkarier di bidang HR selama lebih dari 3 tahun. Saat ini bekerja sebagai Senior Talent Acquisition Specialist di Wings Group Indonesia (Sayap Mas Utama) selama hampir 1 tahun.";

  return (
    <div className="bg-main-secondary4">
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
        <p className="text-sm text-text-dark-secondary mb-4">
          Beranda &gt; Desain &gt;{" "}
          <span className="text-text-dark-primary">
            Gapai Karier Impianmu...
          </span>
        </p>

        <section
          className="py-12 px-8 text-text-light-primary rounded-lg relative overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="relative z-10 max-w-3xl">
            <h1 className="text-4xl font-bold leading-tight">
              {currentCourse.title}
            </h1>
            <p className="mt-2 text-otheborder-other-border">
              Ikuti jejak para expert di bidang UI/UX Design & Product
              Management bersama tutor profesional di Video Course.
            </p>
            <div className="mt-3">
              <HeroStarRating rating={4.9} reviews={230} />
            </div>
          </div>
        </section>

        <div className="flex flex-col lg:flex-row gap-8 mt-8 items-start">
          <div className="w-full lg:w-auto order-1 lg:order-2">
            <PurchaseCard course={currentCourse} onNavigate={onNavigate} />
          </div>

          <div className="w-full lg:flex-grow space-y-8 order-2 lg:order-1">
            <div className="bg-other-primary-background p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold font-poppins mb-3">
                Deskripsi
              </h2>
              <p className="text-text-dark-secondary leading-relaxed">
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

            <div className="bg-other-primary-background p-6 rounded-lg shadow-sm">
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

            <div className="bg-other-primary-background p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold font-poppins mb-2">
                Kamu akan Mempelajari
              </h2>
              <Accordion
                title="Introduction to Course 1: Foundations of User Experience Design"
                defaultOpen={true}
              >
                <CourseModuleItem
                  title="The basics of user experience design"
                  type="Video"
                  duration="12 Menit"
                />
                <CourseModuleItem
                  title="Jobs in the field of user experience"
                  type="Video"
                  duration="12 Menit"
                />
              </Accordion>
              <Accordion title="The product development life cycle">
                <CourseModuleItem
                  title="The product development life cycle"
                  type="Video"
                  duration="12 Menit"
                />
              </Accordion>
              <Accordion title="Universal design, inclusive design, and equity-focused design">
                {/* Konten bisa ditambahkan di sini */}
              </Accordion>
            </div>

            <div className="bg-other-primary-background p-6 rounded-lg shadow-sm">
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
                {courses.slice(0, 3).map((course) => (
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
