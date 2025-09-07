import React, { useState } from "react";

const ChevronIcon = ({ isOpen }) => (
  <svg
    className={`w-5 h-5 text-gray-500 transform transition-transform duration-300 ${
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
      strokeWidth={3}
      d="M19 9l-7 7-7-7"
    />
  </svg>
);

// Nama komponen diubah menjadi 'Accordion' agar lebih umum
function Accordion({
  title,
  children,
  defaultOpen = false,
  titleColor = "main-primary",
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const getTextColorClass = () => {
    switch (titleColor) {
      case "dark-primary":
        return "text-text-dark-primary";
      case "main-primary":
      default:
        return "text-main-primary";
    }
  };

  return (
    <div className="border-b last:border-b-0 border-other-border">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left py-4"
      >
        <h3 className={`font-bold text-base ${getTextColorClass()}`}>
          {title}
        </h3>
        <ChevronIcon isOpen={isOpen} />
      </button>
      {isOpen && <div className="pb-4 space-y-3">{children}</div>}
    </div>
  );
}

export default Accordion;
