import React, { useState, useMemo } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Avatar from "../components/Avatar";
import Dropdown from "../components/Dropdown/Dropdownmenu";
import DropdownItem from "../components/Dropdown/Dropdonwitem";
import FilterTabs from "../components/Filtertabs";
import OrderCard from "../components/Card/OrderCard";
import Pagination from "../components/Pagination";
import Sidebar from "../components/Layout/Sidebar";
import userAvatar from "/assets/images/avatar.png";
import iconLogout from "/assets/icon/icon-logout.png";

function PesananSaya({ onNavigate, onLogout, currentUser, onDeleteOrder }) {
  const [activeOrderTab, setActiveOrderTab] = useState("Semua Pesanan");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState(null);
  const totalPages = 6;

  const SORT_OPTIONS = [
    { value: "terbaru", label: "Terbaru" },
    { value: "terlama", label: "Terlama" },
  ];

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

  const filterTabs = ["Semua Pesanan", "Menunggu", "Berhasil", "Gagal"];

  const filteredOrders = useMemo(() => {
    if (!currentUser || !currentUser.orders) {
      return [];
    }
    // Logika filter bisa tetap digunakan jika diperlukan
    return currentUser.orders;
  }, [currentUser]);

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
          Daftar Pesanan
        </h1>
        <p className="text-text-dark-secondary mt-1">
          Informasi terperinci mengenai pembelian Anda.
        </p>

        <div className="flex flex-col lg:flex-row gap-8 mt-8">
          <Sidebar activeTab="Pesanan Saya" onNavigate={onNavigate} />

          <div className="w-full lg:w-3/4">
            <div className="bg-other-primary-background p-6 rounded-lg shadow-sm">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
                <FilterTabs
                  tabs={filterTabs}
                  activeTab={activeOrderTab}
                  onTabClick={setActiveOrderTab}
                />
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <div className="relative w-full sm:w-auto">
                    <input
                      type="text"
                      placeholder="Cari Kelas..."
                      className="w-full sm:w-48 px-4 py-2.5 border border-other-border rounded-lg focus:outline-none focus:border-primary bg-other-primary-background"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-text-light-disabled">
                      🔍
                    </span>
                  </div>

                  <div className="w-full sm:w-48">
                    <Dropdown
                      trigger={
                        <button className="flex items-center justify-between w-full px-4 py-2.5 border border-other-border rounded-lg bg-other-primary-background text-left">
                          <span className="text-text-dark-secondary truncate">
                            {sortOption ? sortOption.label : "Urutkan"}
                          </span>
                          <svg
                            className="fill-current h-4 w-4 text-text-dark-secondary flex-shrink-0"
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
                          onClick={() => setSortOption(option)}
                        >
                          {option.label}
                        </DropdownItem>
                      ))}
                    </Dropdown>
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                {filteredOrders.length > 0 ? (
                  filteredOrders.map((order) => (
                    <OrderCard
                      key={order.id}
                      data={order}
                      onDelete={() => onDeleteOrder(order.id)}
                    />
                  ))
                ) : (
                  <p className="text-center text-text-dark-secondary">
                    Anda belum memiliki pesanan.
                  </p>
                )}
              </div>

              <div className="flex justify-end mt-10">
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

export default PesananSaya;
