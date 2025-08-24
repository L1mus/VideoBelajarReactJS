import React, { useState } from "react";

// Icon panah
const ChevronIcon = ({ isOpen }) => (
  <svg
    className={`w-4 h-4 text-main-primary transform transition-transform duration-300 ${
      isOpen ? "" : "rotate-180"
    }`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 15l7-7 7 7"
    />
  </svg>
);

function FilterAccordion({ title, icon, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="bg-other-primary-background rounded-lg shadow-sm p-4 mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left"
      >
        <div className="flex items-center">
          {icon && <img src={icon} alt="" className="w-5 h-5 mr-3" />}
          <h3 className="font-bold text-main-primary text-base">{title}</h3>
        </div>
        <ChevronIcon isOpen={isOpen} />
      </button>
      {isOpen && <div className="mt-4 space-y-3 text-base">{children}</div>}
    </div>
  );
}

export default FilterAccordion;
