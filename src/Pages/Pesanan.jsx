import React, { useState, useMemo } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Avatar from "../components/Avatar";
import Dropdown from "../components/Dropdown/Dropdownmenu";
import FilterTabs from "../components/Filtertabs";
import DropdownItem from "../components/Dropdown/Dropdonwitem";
import OrderCard from "../components/Card/OrderCard";
import Pagination from "../components/Pagination";
import { orders } from "../Data/Order";
import userAvatar from "/assets/images/avatar.png";
import iconLogout from "/assets/icon/icon-logout.png";

import IconProfile from "../components/icons/Iconprofile";
import IconClass from "../components/icons/Iconkelas";
import IconOrder from "../components/icons/Iconpesanan";

const SidebarLink = ({ children, active = false, onClick }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-4 py-3 text-left rounded-lg transition-colors duration-200 
      ${
        active
          ? "bg-main-secondary4 text-main-secondary font-bold border border-main-secondary"
          : "text-text-light-disabled hover:bg-other-primary-background"
      }`}
  >
    {children}
  </button>
);

function PesananSaya({ onNavigate, onLogout }) {
  const [activeSidebarTab, setActiveSidebarTab] = useState("Pesanan Saya");
  const [activeOrderTab, setActiveOrderTab] = useState("Semua Pesanan");
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 6;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

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
    if (activeOrderTab === "Semua Pesanan") {
      return orders;
    }
    return orders.filter((order) => order.status === activeOrderTab);
  }, [activeOrderTab]);

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
              <DropdownItem onClick={() => setActiveSidebarTab("Profil Saya")}>
                Profil Saya
              </DropdownItem>
              <DropdownItem onClick={() => setActiveSidebarTab("Kelas Saya")}>
                Kelas Saya
              </DropdownItem>
              <DropdownItem onClick={() => setActiveSidebarTab("Pesanan Saya")}>
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

      <main className="container mx-auto px-4 sm:px-6 py-10">
        <h1 className="text-2xl md:text-3xl font-bold font-poppins text-text-dark-primary">
          Daftar Pesanan
        </h1>
        <p className="text-text-dark-secondary mt-1">
          Informasi terperinci mengenai pembelian
        </p>

        <div className="flex flex-col lg:flex-row gap-8 mt-8">
          {/* Sidebar */}
          <aside className="w-full lg:w-1/4">
            <div className="bg-other-primary-background p-4 rounded-lg shadow-sm space-y-2">
              <SidebarLink
                active={activeSidebarTab === "Profil Saya"}
                onClick={() => setActiveSidebarTab("Profil Saya")}
              >
                <IconProfile className="w-5 h-5" /> <span>Profil Saya</span>
              </SidebarLink>
              <SidebarLink
                active={activeSidebarTab === "Kelas Saya"}
                onClick={() => setActiveSidebarTab("Kelas Saya")}
              >
                <IconClass className="w-5 h-5" /> <span>Kelas Saya</span>
              </SidebarLink>
              <SidebarLink
                active={activeSidebarTab === "Pesanan Saya"}
                onClick={() => setActiveSidebarTab("Pesanan Saya")}
              >
                <IconOrder className="w-5 h-5" /> <span>Pesanan Saya</span>
              </SidebarLink>
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="w-full lg:w-3/4">
            {activeSidebarTab === "Profil Saya" && (
              <div className="bg-other-primary-background p-6 rounded-lg shadow-sm text-center">
                <h2 className="text-xl font-bold">Halaman Profil Saya</h2>
                <p className="mt-2 text-text-dark-secondary">
                  Konten untuk profil akan ditampilkan di sini.
                </p>
              </div>
            )}

            {activeSidebarTab === "Kelas Saya" && (
              <div className="bg-other-primary-background p-6 rounded-lg shadow-sm text-center">
                <h2 className="text-xl font-bold">Halaman Kelas Saya</h2>
                <p className="mt-2 text-text-dark-secondary">
                  Konten untuk kelas akan ditampilkan di sini.
                </p>
              </div>
            )}

            {activeSidebarTab === "Pesanan Saya" && (
              <div className="bg-other-primary-background p-6 rounded-lg shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6 border-b border-other-border">
                  <FilterTabs
                    tabs={filterTabs}
                    activeTab={activeOrderTab}
                    onTabClick={setActiveOrderTab}
                  />
                </div>

                <div className="space-y-5">
                  {filteredOrders.map((order) => (
                    <OrderCard key={order.id} data={order} />
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
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default PesananSaya;
