import React, { useState } from "react";
import iconEyeOff from "/assets/icon/icon-eye-off.png";
import iconEyeOn from "/assets/icon/icon-eye-on.png"; // Pastikan file ini ada

function InputField({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  variant = "filled",
}) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const isPassword = type === "password";
  const togglePasswordVisibility = () =>
    setIsPasswordVisible(!isPasswordVisible);
  const inputType = isPassword
    ? isPasswordVisible
      ? "text"
      : "password"
    : type;

  if (variant === "outline") {
    return (
      <div className="relative">
        <input
          id={name}
          name={name}
          type={inputType}
          placeholder=" "
          value={value}
          onChange={onChange}
          className="block w-full px-4 py-3 text-text-dark-primary bg-white border border-other-border rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-main-primary peer"
        />
        <label
          htmlFor={name}
          className="absolute text-text-dark-secondary duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] start-4 peer-focus:text-main-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 bg-white px-1"
        >
          {label}
        </label>
        {isPassword && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-0 flex items-center pr-4 text-text-dark-secondary"
          >
            <img
              src={isPasswordVisible ? iconEyeOn : iconEyeOff}
              alt="Toggle visibility"
              className="w-5 h-5"
            />
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="w-full">
      <label
        htmlFor={name}
        className="block font-medium text-text-dark-primary mb-2"
      >
        {label} <span className="text-error-default">*</span>
      </label>
      <div className="relative">
        <input
          id={name}
          name={name}
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full px-4 py-3 border border-other-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-hover bg-other-secondary-background"
        />
        {isPassword && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-0 flex items-center pr-4 text-text-dark-secondary"
          >
            <img
              src={isPasswordVisible ? iconEyeOn : iconEyeOff}
              alt="Toggle visibility"
              className="w-5 h-5"
            />
          </button>
        )}
      </div>
    </div>
  );
}

export default InputField;
