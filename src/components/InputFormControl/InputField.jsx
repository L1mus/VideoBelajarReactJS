import React, { useState } from "react";
import iconEye from "/assets/icon/icon-eye-off.png";
import iconIndonesia from "/assets/icon/icon-indonesia.png";

function InputField({ label, type = "text", name, placeholder }) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const inputType =
    type === "password" ? (isPasswordVisible ? "text" : "password") : type;

  const baseInputStyle =
    "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-hover";

  return (
    <div className="w-full">
      <label
        htmlFor={name}
        className="block font-sans font-medium text-gray-700 mb-2"
      >
        {label} <span className="text-red-500">*</span>
      </label>
      <div className="relative">
        {type === "tel" ? (
          <div className="flex items-center">
            <div className="flex items-center border border-r-0 border-gray-300 bg-gray-50 rounded-l-lg px-3 py-3">
              <img src={iconIndonesia} alt="ID" className="w-6 h-auto" />
              <span className="font-sans ml-2 text-gray-700">+62</span>
            </div>
            <input
              type={inputType}
              id={name}
              name={name}
              placeholder={placeholder}
              className={`${baseInputStyle} rounded-l-none`}
            />
          </div>
        ) : (
          <input
            type={inputType}
            id={name}
            name={name}
            placeholder={placeholder}
            className={baseInputStyle}
          />
        )}
        {type === "password" && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-500"
          >
            <img src={iconEye} alt="Toggle visibility" className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
}

export default InputField;
