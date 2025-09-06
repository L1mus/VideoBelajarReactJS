import React, { useState, useMemo } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Avatar from "../components/Avatar";
import Dropdown from "../components/Dropdown/Dropdownmenu";
import DropdownItem from "../components/Dropdown/Dropdonwitem";
import FilterTabs from "../components/Filtertabs";
import MyCourseCard from "../components/Card/MyCourseCard";
import Pagination from "../components/Pagination";
import Sidebar from "../components/Layout/Sidebar";
import { myCourses } from "../Data/MyCourses";

import userAvatar from "/assets/images/avatar.png";
import iconLogout from "/assets/icon/icon-logout.png";

function KelasSaya({ onNavigate, onLogout }) {
  const [activeCourseTab, setActiveCourseTab] = useState("Semua Kelas");
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const NavLinks = () => (
    <a
      href="#"
      onClick={() => onNavigate("semuaproduk")}
      className="text-text-dark-secondary hover:text-primary py-2 font-semibold"
    >
      Kategori
    </a>
  );

  const LogoutIcon = () => (
    <img src={iconLogout} alt="Logout" className="pl-1 w-5 h-5" />
  );

  const filterTabs = ["Semua Kelas", "Sedang Berjalan", "Selesai"];

  const filteredCourses = useMemo(() => {
    if (activeCourseTab === "Semua Kelas") {
      return myCourses;
    }
    return myCourses.filter((course) => course.status === activeCourseTab);
  }, [activeCourseTab]);

  return (
    <div className="bg-main-secondary4">
      <Navbar
        onLogoClick={() => onNavigate("beranda")}
        desktopContent={
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
                <div className="flex items-center font-semibold text-error-hover">
                  Keluar <LogoutIcon />
                </div>
              </DropdownItem>
            </Dropdown>
          </>
        }
        mobileMenu={<NavLinks />}
      />

      <main className="container mx-auto max-w-screen-xl px-4 sm:px-6 py-10">
        <h1 className="text-2xl md:text-3xl font-bold font-poppins text-text-dark-primary">
          Daftar Kelas
        </h1>
        <p className="text-text-dark-secondary mt-1">
          Akses Materi Belajar dan Mulailah Meningkatkan Pengetahuan Anda!
        </p>

        <div className="flex flex-col lg:flex-row gap-8 mt-8">
          <Sidebar activeTab="Kelas Saya" onNavigate={onNavigate} />

          <div className="w-full lg:w-3/4">
            <div className="bg-other-primary-background p-6 rounded-lg shadow-sm">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
                <FilterTabs
                  tabs={filterTabs}
                  activeTab={activeCourseTab}
                  onTabClick={setActiveCourseTab}
                />
                <div className="relative w-full sm:w-auto">
                  <input
                    type="text"
                    placeholder="Cari Kelas..."
                    className="w-full sm:w-64 px-4 py-2.5 border border-other-border rounded-lg focus:outline-none focus:border-primary bg-other-primary-background"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-text-light-disabled">
                    🔍
                  </span>
                </div>
              </div>

              <div className="space-y-5">
                {filteredCourses.map((course) => (
                  <MyCourseCard key={course.id} data={course} />
                ))}
              </div>

              <div className="flex justify-center md:justify-end mt-10">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
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

export default KelasSaya;
