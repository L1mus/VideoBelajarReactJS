import React, { useState } from "react";
import Navbar from "../components/Navbar";
import FilterSidebar from "../components/Layout/Filtersidebar";
import CourseCard from "../components/Card/CourseCard";
import { courses } from "../data/courses";
import Footer from "../components/Footer";
import Button from "../components/Button/Button";
import Avatar from "../components/Avatar";
import userAvatar from "/assets/images/avatar.png";
import Dropdown from "../components/Dropdown/Dropdownmenu";
import DropdownItem from "../components/Dropdown/Dropdonwitem";
import Pagination from "../components/Pagination";
import iconLogout from "/assets/icon/icon-logout.png";

function SemuaProduk({ isLoggedIn, onNavigate, onLogout }) {
  const displayCourses = [...courses, ...courses];
  const SORT_OPTIONS = [
    { value: "harga-rendah", label: "Harga Rendah" },
    { value: "harga-tinggi", label: "Harga Tinggi" },
    { value: "a-to-z", label: "A to Z" },
    { value: "z-to-a", label: "Z to A" },
    { value: "rating-tertinggi", label: "Rating Tertinggi" },
    { value: "rating-terendah", label: "Rating Terendah" },
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 6;
  const [sortOption, setSortOption] = useState(null);

  const NavLinks = () => (
    <div className="flex items-center space-x-4">
      <span className="text-primary font-semibold py-2">Kategori</span>
    </div>
  );
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const LogoutIcon = () => (
    <img src={iconLogout} alt="Logout" className="pl-1 w-5 h-5" />
  );

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
                <div className="my-1 border-t border-gray-200" />
                <DropdownItem onClick={onLogout}>
                  <div className="flex items-center font-semibold text-red-600">
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
          <>
            <NavLinks />
            {!isLoggedIn && (
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
            )}
          </>
        }
      />

      <main className="container mx-auto px-6 py-10">
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold font-poppins text-gray-800">
            Koleksi Video Pembelajaran Unggulan
          </h1>
          <p className="text-gray-500 mt-1">
            Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 mt-8">
          <FilterSidebar />
          <div className="w-full lg:w-3/4">
            <div className="flex flex-row justify-end items-center mb-6 gap-4">
              <div className="w-1/2 sm:w-48">
                <Dropdown
                  trigger={
                    <button className="flex items-center justify-between w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-white text-left focus:outline-none focus:ring-2 focus:ring-primary">
                      <span className="text-gray-800 truncate">
                        {sortOption ? sortOption.label : "Urutkan"}
                      </span>
                      <svg
                        className="fill-current h-4 w-4 text-gray-500 flex-shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </button>
                  }
                >
                  {SORT_OPTIONS.map((option) => (
                    <DropdownItem
                      key={option.value}
                      isSelected={
                        sortOption && sortOption.value === option.value
                      }
                      onClick={() => setSortOption(option)}
                    >
                      {option.label}
                    </DropdownItem>
                  ))}
                </Dropdown>
              </div>

              <div className="relative w-1/2 sm:w-auto">
                <input
                  type="text"
                  placeholder="Cari Kelas..."
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-primary bg-white"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                  🔍
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-5 justify-end">
              {displayCourses.map((course, index) => (
                <CourseCard
                  key={`${course.id}-${index}`}
                  data={course}
                  onClick={() => onNavigate("detailproduk")}
                />
              ))}
            </div>

            <div className="flex justify-end mt-10">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default SemuaProduk;
