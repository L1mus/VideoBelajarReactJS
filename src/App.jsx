import React, { useState } from "react";
import Berandalogin from "./Pages/Berandalogin";
import Berandalogout from "./Pages/Berandalogout";
import Button from "./components/Button/Button";
import Beranda from "./Pages/Beranda";
import SemuaProduk from "./Pages/Semuaproduk";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Avatar from "./components/Avatar";
import userAvatar from "/assets/images/avatar.png";

function App() {
  const [currentPage, setCurrentPage] = useState("beranda");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  const NavLinks = () => (
    <button
      onClick={() => navigateTo("semuaproduk")}
      className="text-gray-600 hover:text-primary py-2"
    >
      Kategori
    </button>
  );

  return (
    <div className="flex flex-col min-h-screen bg-white">
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
                <Button variant="primary" onClick={() => setIsLoggedIn(true)}>
                  Login
                </Button>
                <Button variant="primary-outline">Register</Button>
              </div>
            </>
          )
        }
        mobileMenu={
          <>
            <NavLinks />
          </>
        }
      />
      <main className="flex-grow">
        {currentPage === "beranda" && <Beranda />}
        {currentPage === "semuaproduk" && <SemuaProduk />}
      </main>

      <Footer />

      <div className="fixed bottom-20 right-5 z-50">
        <Button onClick={() => setIsLoggedIn(!isLoggedIn)}>
          {isLoggedIn ? "Logout" : "Simulate Login"}
        </Button>
      </div>
    </div>
  );
}

export default App;
