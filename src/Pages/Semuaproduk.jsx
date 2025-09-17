import React, { useState, useMemo, useContext } from "react";
import { UserContext } from "../context/UserContext";
import useApi from "../Hooks/useAPI";
import api from "../services/API";
import Navbar from "../components/Navbar";
import FilterSidebar from "../components/Layout/Filtersidebar";
import CourseCard from "../components/Card/CourseCard";
import Footer from "../components/Footer";
import Button from "../components/Button/Button";
import Avatar from "../components/Avatar";
import userAvatar from "/assets/images/avatar.png";
import Dropdown from "../components/Dropdown/Dropdownmenu";
import DropdownItem from "../components/Dropdown/Dropdonwitem";
import Pagination from "../components/Pagination";
import logo from "/assets/images/logo.png";
import iconLogout from "/assets/icon/icon-logout.png";

const SORT_OPTIONS = [
  { value: "harga-rendah", label: "Harga Terendah" },
  { value: "harga-tinggi", label: "Harga Tertinggi" },
  { value: "rating-tertinggi", label: "Rating Tertinggi" },
];

function SemuaProduk({ onNavigate }) {
  const { currentUser, isLoggedIn, handleLogout } = useContext(UserContext);

  const {
    data: coursesData,
    isLoading: coursesLoading,
    error: coursesError,
  } = useApi(api.getCourses);
  const {
    data: authorsData,
    isLoading: authorsLoading,
    error: authorsError,
  } = useApi(api.getAuthors);

  const courses = useMemo(() => {
    if (!coursesData || !authorsData) return [];
    const authorsMap = new Map(
      authorsData.map((author) => [author.id, author])
    );
    return coursesData.map((course) => ({
      ...course,
      author: authorsMap.get(course.authorId) || {
        name: "Unknown Author",
        role: "",
      },
    }));
  }, [coursesData, authorsData]);

  const isLoading = coursesLoading || authorsLoading;
  const error = coursesError || authorsError;

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 6;
  const [sortOption, setSortOption] = useState(null);
  const [filters, setFilters] = useState({
    studyFields: {},
    price: {},
    duration: "",
  });

  const handleFilterChange = (filterType, filterName, value) => {
    setFilters((prev) => {
      const newFilters = { ...prev };
      if (filterType === "studyFields" || filterType === "price") {
        newFilters[filterType] = {
          ...newFilters[filterType],
          [filterName]: value,
        };
      } else {
        newFilters[filterType] = value;
      }
      return newFilters;
    });
  };

  const handleResetFilters = () => {
    setFilters({
      studyFields: {},
      price: {},
      duration: "",
    });
  };

  const processedCourses = useMemo(() => {
    let sortedCourses = [...courses];
    if (sortOption) {
      switch (sortOption.value) {
        case "harga-rendah":
          sortedCourses.sort((a, b) => a.price - b.price);
          break;
        case "harga-tinggi":
          sortedCourses.sort((a, b) => b.price - a.price);
          break;
        case "rating-tertinggi":
          sortedCourses.sort((a, b) => b.rating - a.rating);
          break;
        default:
          break;
      }
    }
    return sortedCourses;
  }, [courses, sortOption]);

  const NavLinks = () => (
    <a
      href="#"
      onClick={() => onNavigate("/semuaproduk")}
      className="text-gray-600 hover:text-primary py-2 font-semibold"
    >
      Kategori
    </a>
  );

  const handlePageChange = (page) => setCurrentPage(page);
  const LogoutIcon = () => (
    <img src={iconLogout} alt="Logout" className="pl-1 w-5 h-5" />
  );

  return (
    <div className="bg-main-secondary4 min-h-screen">
      <Navbar
        leftSection={
          <img
            src={logo}
            alt="Videobelajar Logo"
            className="h-7 cursor-pointer"
            onClick={() => onNavigate("/")}
          />
        }
        rightSection={
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
                <div className="my-1 border-t border-gray-200" />
                <DropdownItem onClick={handleLogout}>
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
                <Button variant="primary" onClick={() => onNavigate("/login")}>
                  Masuk
                </Button>
                <Button
                  variant="primary1"
                  onClick={() => onNavigate("/register")}
                >
                  Daftar
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
                  className="w-full"
                  onClick={() => onNavigate("/login")}
                  variant="primary"
                >
                  Masuk
                </Button>
                <Button
                  className="w-full"
                  onClick={() => onNavigate("/register")}
                  variant="primary1"
                >
                  Daftar
                </Button>
              </div>
            )}
          </>
        }
      />

      <main className="container mx-auto px-4 sm:px-6 py-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center md:text-left mb-8">
            <h1 className="text-3xl font-bold text-text-dark-primary">
              Koleksi Video Pembelajaran Unggulan
            </h1>
            <p className="text-text-dark-secondary mt-1">
              Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <FilterSidebar
              filters={filters}
              onFilterChange={handleFilterChange}
              onResetFilters={handleResetFilters}
            />
            <div className="w-full lg:w-3/4">
              <div className="flex flex-col sm:flex-row justify-end items-center mb-6 gap-4">
                <div className="w-full sm:w-48">
                  <Dropdown
                    trigger={
                      <button className="flex items-center justify-between w-full px-4 py-2.5 border border-other-border rounded-lg bg-other-primary-background text-left focus:outline-none focus:ring-2 focus:ring-primary">
                        <span className="text-text-dark-primary truncate">
                          {sortOption ? sortOption.label : "Urutkan"}
                        </span>
                        <svg
                          className="fill-current h-4 w-4 text-text-dark-secondary flex-shrink-0"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </button>
                    }
                  >
                    {SORT_OPTIONS.map((option) => (
                      <DropdownItem
                        key={option.value}
                        onClick={() => setSortOption(option)}
                      >
                        {option.label}
                      </DropdownItem>
                    ))}
                  </Dropdown>
                </div>
                <div className="relative w-full sm:w-auto">
                  <input
                    className="w-full px-4 py-2.5 border border-other-border rounded-lg focus:outline-none focus:border-primary bg-other-primary-background"
                    placeholder="Cari Kelas..."
                    type="text"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-text-light-disabled">
                    🔍
                  </span>
                </div>
              </div>

              {isLoading ? (
                <p className="text-center">Memuat kursus...</p>
              ) : error ? (
                <p className="text-center text-red-500">{error}</p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {processedCourses.map((course) => (
                    <CourseCard
                      data={course}
                      key={course.id}
                      onClick={() => onNavigate("detailproduk", course)}
                    />
                  ))}
                </div>
              )}

              <div className="flex justify-center md:justify-end mt-10">
                <Pagination
                  currentPage={currentPage}
                  onPageChange={handlePageChange}
                  totalPages={totalPages}
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default SemuaProduk;
