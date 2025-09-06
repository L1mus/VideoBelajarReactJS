import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdownmenu";
import DropdownItem from "../Dropdown/Dropdonwitem";
import { countries } from "../../Data/Countries";

function PhoneNumberInput({
  label,
  name,
  value,
  onChange,
  variant = "filled",
}) {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  const variantStyles = {
    filled: "bg-other-secondary-background",
    outline: "bg-white",
  };
  const style = variantStyles[variant] || variantStyles.filled;

  // Varian "OUTLINE" untuk halaman Profil
  if (variant === "outline") {
    return (
      // Komponen ini sekarang menjadi grid wrapper
      <div className="grid grid-cols-3 gap-3">
        {/* 1. Kolom Dropdown (tanpa label) */}
        <div className="col-span-1">
          <Dropdown
            trigger={
              <button
                type="button"
                className={`w-full h-full flex items-stretch border border-other-border rounded-lg text-left overflow-hidden`}
              >
                <div className="flex items-center px-3 py-3 bg-other-secondary-background border-r border-other-border">
                  <img
                    src={selectedCountry.flag}
                    alt={selectedCountry.name}
                    className="w-6 h-auto"
                  />
                </div>
                <div
                  className={`flex-grow flex items-center justify-between px-3 py-3 ${style}`}
                >
                  <span className="font-sans text-text-dark-primary">
                    {selectedCountry.code}
                  </span>
                  <svg
                    className="fill-current h-4 w-4 text-gray-500"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </button>
            }
          >
            {countries.map((country) => (
              <DropdownItem
                key={country.name}
                onClick={() => setSelectedCountry(country)}
              >
                <div className="flex items-center gap-3">
                  <img
                    src={country.flag}
                    alt={country.name}
                    className="w-6 h-auto"
                  />
                  <span>
                    {country.name} ({country.code})
                  </span>
                </div>
              </DropdownItem>
            ))}
          </Dropdown>
        </div>

        {/* 2. Kolom Input Nomor (dengan label floating internalnya sendiri) */}
        <div className="relative col-span-2">
          <input
            id={name}
            type="tel"
            name={name}
            placeholder=" "
            className={`block w-full px-4 py-3 text-text-dark-primary border border-other-border rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-main-primary peer ${style}`}
            value={value}
            onChange={onChange}
          />
          <label
            htmlFor={name}
            className="absolute text-text-dark-secondary duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] start-4 peer-focus:text-main-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 bg-white px-1"
          >
            {label}
          </label>
        </div>
      </div>
    );
  }

  // Varian "FILLED" untuk halaman Register (tidak berubah)
  return (
    <div>
      <label className="block font-medium text-text-dark-primary mb-2">
        {label} <span className="text-error-default">*</span>
      </label>
      <div className="grid grid-cols-3 gap-3">
        <div className="col-span-1">
          <Dropdown
            trigger={
              <button
                type="button"
                className={`w-full flex items-stretch border border-other-border rounded-lg text-left overflow-hidden`}
              >
                <div className="flex items-center px-3 py-3 bg-other-secondary-background border-r border-other-border">
                  <img
                    src={selectedCountry.flag}
                    alt={selectedCountry.name}
                    className="w-6 h-auto"
                  />
                </div>
                <div
                  className={`flex-grow flex items-center justify-between px-3 py-3 ${style}`}
                >
                  <span className="font-sans text-text-dark-primary">
                    {selectedCountry.code}
                  </span>
                  <svg
                    className="fill-current h-4 w-4 text-gray-500"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </button>
            }
          >
            {countries.map((country) => (
              <DropdownItem
                key={country.name}
                onClick={() => setSelectedCountry(country)}
              >
                <div className="flex items-center gap-3">
                  <img
                    src={country.flag}
                    alt={country.name}
                    className="w-6 h-auto"
                  />
                  <span>
                    {country.name} ({country.code})
                  </span>
                </div>
              </DropdownItem>
            ))}
          </Dropdown>
        </div>
        <input
          type="tel"
          name={name}
          placeholder=""
          className={`col-span-2 w-full px-4 py-3 border border-other-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-hover ${style}`}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export default PhoneNumberInput;
