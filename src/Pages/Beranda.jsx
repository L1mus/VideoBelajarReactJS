import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FilterTabs from "../components/Filtertabs";
import CourseCard from "../components/Card/CourseCard";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Button from "../components/Button/Button";
import Avatar from "../components/Avatar";
import userAvatar from "/assets/images/avatar.png";
import Dropdown from "../components/Dropdown/Dropdownmenu";
import DropdownItem from "../components/Dropdown/Dropdonwitem";
import iconLogout from "/assets/icon/icon-logout.png";

function Beranda({ onNavigate }) {
  const { isLoggedIn, currentUser, handleLogout } = useContext(UserContext);

  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCoursesAndAuthors = async () => {
      try {
        const [coursesResponse, authorsResponse] = await Promise.all([
          fetch("http://localhost:3001/courses?_limit=6"), // Ambil 6 kursus
          fetch("http://localhost:3001/authors"),
        ]);

        if (!coursesResponse.ok || !authorsResponse.ok) {
          throw new Error("Gagal mengambil data dari server");
        }

        const coursesData = await coursesResponse.json();
        const authorsData = await authorsResponse.json();

        const authorsMap = new Map(
          authorsData.map((author) => [author.id, author])
        );

        const combinedCourses = coursesData.map((course) => ({
          ...course,
          author: authorsMap.get(course.authorId) || {
            name: "Unknown Author",
            role: "",
          },
        }));

        setCourses(combinedCourses);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCoursesAndAuthors();
  }, []);

  const [activeCategory, setActiveCategory] = useState("Semua Kelas");
  const categories = [
    "Semua Kelas",
    "Pemasaran",
    "Desain",
    "Pengembangan Diri",
    "Bisnis",
  ];

  const NavLinks = () => (
    <a
      href="#"
      onClick={() => onNavigate("/semuaproduk")}
      className="text-text-dark-secondary hover:text-primary py-2"
    >
      Kategori
    </a>
  );

  const LogoutIcon = () => (
    <img src={iconLogout} alt="Logout" className="pl-1 w-5 h-5" />
  );

  return (
    <div className="bg-main-secondary4">
      <Navbar
        onLogoClick={() => onNavigate("/")}
        desktopContent={
          isLoggedIn && currentUser ? (
            <>
              <NavLinks />
              <Dropdown
                trigger={
                  <button>
                    <Avatar
                      alt={currentUser.fullName || "User Avatar"}
                      size="md"
                      src={currentUser.avatar || userAvatar}
                    />
                  </button>
                }
              >
                <DropdownItem onClick={() => onNavigate("/profil")}>
                  Profil Saya
                </DropdownItem>
                <DropdownItem onClick={() => onNavigate("/kelas")}>
                  Kelas Saya
                </DropdownItem>
                <DropdownItem onClick={() => onNavigate("/pesanan")}>
                  Pesanan Saya
                </DropdownItem>
                <div className="my-1 border-t border-other-border" />
                <DropdownItem onClick={handleLogout}>
                  <div className="flex items-center font-semibold text-error-default">
                    Keluar <LogoutIcon />
                  </div>
                </DropdownItem>
              </Dropdown>
            </>
          ) : (
            <>
              <NavLinks />
              <div className="flex items-center space-x-2">
                <Button onClick={() => onNavigate("login")} variant="primary">
                  Login
                </Button>
                <Button
                  onClick={() => onNavigate("/register")}
                  variant="primary1"
                >
                  Register
                </Button>
              </div>
            </>
          )
        }
        mobileMenu={
          isLoggedIn ? (
            <NavLinks />
          ) : (
            <>
              <NavLinks />
              <div className="pt-2 space-y-2">
                <Button
                  className="w-full"
                  onClick={() => onNavigate("/login")}
                  variant="primary"
                >
                  Login
                </Button>
                <Button
                  className="w-full"
                  onClick={() => onNavigate("/register")}
                  variant="primary1"
                >
                  Register
                </Button>
              </div>
            </>
          )
        }
      />

      <main className="container mx-auto max-w-screen-xl px-6 py-10 space-y-16">
        <Hero />

        <section className="space-y-6">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold font-poppins text-text-dark-primary">
              Koleksi Video Pembelajaran Unggulan
            </h2>
            <p className="text-text-dark-secondary mt-1">
              Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
            </p>
          </div>
          <FilterTabs
            activeColorClass="text-main-tertiary"
            activeTab={activeCategory}
            borderColorClass="bg-main-tertiary"
            onTabClick={setActiveCategory}
            tabs={categories}
          />

          {isLoading ? (
            <p className="text-center">Memuat kursus...</p>
          ) : error ? (
            <p className="text-center text-red-500">{error}</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
              {courses.map((course) => (
                <CourseCard
                  data={course}
                  key={course.id}
                  onClick={() => onNavigate("detailproduk", course)}
                />
              ))}
            </div>
          )}
        </section>

        <Newsletter />
      </main>

      <Footer />
    </div>
  );
}

export default Beranda;
