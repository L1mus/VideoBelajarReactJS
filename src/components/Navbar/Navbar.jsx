import React, { useState } from "react";
import logo from "/assets/images/logo.png";

function Navbar({ leftContent, children, mobileMenu }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md w-full relative">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Videobelajar Logo" className="h-7" />
          <div className="hidden md:flex items-center">{leftContent}</div>
        </div>

        <div className="hidden md:flex items-center space-x-4">{children}</div>

        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w.org/2000/svg"
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

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute w-full shadow-lg">
          <div className="px-6 pt-2 pb-4 flex flex-col space-y-3">
            {mobileMenu}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
