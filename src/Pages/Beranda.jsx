import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FilterTabs from "../components/Filtertabs";
import CourseCard from "../components/Card/CourseCard";
import { courses } from "../data/courses";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Button from "../components/Button/Button";
import Avatar from "../components/Avatar";
import userAvatar from "/assets/images/avatar.png";
import Dropdown from "../components/Dropdown/Dropdownmenu";
import DropdownItem from "../components/Dropdown/Dropdonwitem";
import iconLogout from "/assets/icon/icon-logout.png";

function Beranda({ isLoggedIn, onNavigate, onLogout }) {
  // Menggandakan data kursus untuk mengisi halaman
  const displayCourses = [...courses, ...courses];

  const NavLinks = () => (
    <a
      href="#"
      onClick={() => onNavigate("semuaproduk")}
      className="text-text-dark-secondary hover:text-primary py-2"
    >
      Kategori
    </a>
  );

  const LogoutIcon = () => (
    <img src={iconLogout} alt="Logout" className="pl-1 w-5 h-5" />
  );

  const [activeCategory, setActiveCategory] = useState("Semua Kelas");
  const categories = [
    "Semua Kelas",
    "Pemasaran",
    "Desain",
    "Pengembangan Diri",
    "Bisnis",
  ];

  return (
    <div className="bg-main-secondary4">
      <Navbar
        onLogoClick={() => onNavigate("beranda")}
        desktopContent={
          isLoggedIn ? (
            <>
              <NavLinks />
              <Dropdown
                trigger={
                  <button>
                    <Avatar src={userAvatar} alt="User Avatar" size="md" />
                  </button>
                }
              >
                <DropdownItem onClick={() => onNavigate("profil")}>
                  Profil Saya
                </DropdownItem>
                <DropdownItem onClick={() => onNavigate("kelas")}>
                  Kelas Saya
                </DropdownItem>
                <DropdownItem onClick={() => onNavigate("pesanan")}>
                  Pesanan Saya
                </DropdownItem>
                <div className="my-1 border-t border-other-border" />
                <DropdownItem onClick={onLogout}>
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
        mobileMenu={
          isLoggedIn ? (
            <NavLinks />
          ) : (
            <>
              <NavLinks />
              <div className="pt-2 space-y-2">
                <Button
                  variant="primary"
                  className="w-full"
                  onClick={() => onNavigate("login")}
                >
                  Login
                </Button>
                <Button
                  variant="primary1"
                  className="w-full"
                  onClick={() => onNavigate("register")}
                >
                  Register
                </Button>
              </div>
            </>
          )
        }
      />

      {/* --- PERUBAHAN CONTAINER UTAMA UNTUK RESPONSIVITAS LAYAR LEBAR --- */}
      <main className="container mx-auto max-w-screen-xl px-6 py-10 space-y-16">
        <Hero />

        {/* --- BAGIAN KOLEKSI VIDEO DENGAN JUDUL BARU --- */}
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
            tabs={categories}
            activeTab={activeCategory}
            onTabClick={setActiveCategory}
            borderColorClass="bg-main-tertiary"
            activeColorClass="text-main-tertiary"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
            {displayCourses.map((course, index) => (
              <CourseCard
                key={`${course.id}-${index}`}
                data={course}
                onClick={() => onNavigate("detailproduk")}
              />
            ))}
          </div>
        </section>

        <Newsletter />
      </main>

      <Footer />
    </div>
  );
}

export default Beranda;
