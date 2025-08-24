import React, { useState, useEffect, useRef } from "react";
import logo from "/assets/images/logo.png";

function Navbar({ leftContent, centerContent, desktopContent, mobileMenu }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      className="bg-other-primary-background shadow-md w-full relative"
      ref={navRef}
    >
      <div className="container mx-auto px-4 sm:px-6 py-4 flex items-center">
        {/* Bagian Kiri */}
        <div className="flex-1 flex justify-start items-center space-x-4">
          <img src={logo} alt="Videobelajar Logo" className="h-7" />
          <div className="hidden md:flex items-center">{leftContent}</div>
        </div>

        {/* Bagian Tengah*/}
        <div className="hidden md:flex justify-center">{centerContent}</div>

        {/* Bagian Kanan */}
        <div className="flex-1 flex justify-end items-center">
          <div className="hidden md:flex items-center space-x-4">
            {desktopContent}
          </div>

          {/* Tombol Hamburger */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <svg
                className="w-6 h-6 text-text-dark-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-other-primary-background absolute w-full shadow-lg border-t border-other-border">
          <div className="px-6 pt-2 pb-4 flex flex-col space-y-3">
            {mobileMenu}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
