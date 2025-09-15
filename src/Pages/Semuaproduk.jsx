import React, { useState, useMemo, useContext } from "react"; // Tambahkan useContext
import { UserContext } from "../context/UserContext";
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

function SemuaProduk({ onNavigate }) {
  const { isLoggedIn, handleLogout } = useContext(UserContext);
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

  const filteredCourses = useMemo(() => {
    let filtered = [...courses, ...courses, ...courses, ...courses];

    // Filter Bidang Studi
    const selectedFields = Object.keys(filters.studyFields).filter(
      (key) => filters.studyFields[key]
    );
    if (selectedFields.length > 0) {
      filtered = filtered.filter((course) =>
        selectedFields.includes(
          course.category.toLowerCase().replace(" & ", " ").replace("-", " ")
        )
      );
    }

    // Filter Harga
    const selectedPrices = Object.keys(filters.price).filter(
      (key) => filters.price[key]
    );
    if (selectedPrices.length > 0) {
      filtered = filtered.filter((course) => {
        if (selectedPrices.includes("berbayar") && course.price > 0)
          return true;
        if (selectedPrices.includes("gratis") && course.price === 0)
          return true;
        return false;
      });
    }

    // Filter Durasi
    if (filters.duration) {
      const [min, max] = filters.duration.split("-");
      filtered = max
        ? filtered.filter((c) => c.duration >= +min && c.duration <= +max)
        : filtered.filter((c) => c.duration >= +min);
    }

    return filtered;
  }, [filters]);

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
        onLogoClick={() => onNavigate("/")}
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
                  variant="primary"
                  className="w-full"
                  onClick={() => onNavigate("/login")}
                >
                  Masuk
                </Button>
                <Button
                  variant="primary1"
                  className="w-full"
                  onClick={() => onNavigate("/register")}
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
                        isSelected={sortOption?.value === option.value}
                        onClick={() => setSortOption(option)}
                      >
                        {option.label}
                      </DropdownItem>
                    ))}
                  </Dropdown>
                </div>
                <div className="relative w-full sm:w-auto">
                  <input
                    type="text"
                    placeholder="Cari Kelas..."
                    className="w-full px-4 py-2.5 border border-other-border rounded-lg focus:outline-none focus:border-primary bg-other-primary-background"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-text-light-disabled">
                    🔍
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredCourses.map((course, index) => (
                  <CourseCard
                    key={`${course.id}-${index}`}
                    data={course}
                    onClick={() => onNavigate("detailproduk", course)}
                  />
                ))}
              </div>

              <div className="flex justify-center md:justify-end mt-10">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
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
