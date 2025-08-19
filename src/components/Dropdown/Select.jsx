import React, { useState } from "react";

function Select({
  label,
  options,
  helperText,
  status = "normal",
  initialValue = "",
}) {
  const [value, setValue] = useState(initialValue);
  const [isFocused, setIsFocused] = useState(false);

  const statusStyles = {
    normal: "border-gray-300 focus:border-primary text-gray-500",
    success: "border-green-500 text-green-600",
    error: "border-red-500 text-red-600",
  };

  const labelStyles = {
    normal: "text-gray-500",
    success: "text-green-600",
    error: "text-red-600",
  };

  const hasValue = value !== "";
  const isLabelFloating = isFocused || hasValue;

  return (
    <div className="relative w-full max-w-xs">
      <label
        className={`absolute transition-all duration-200 ease-in-out pointer-events-none
          ${
            isLabelFloating
              ? ` -top-2 left-2 text-xs bg-white px-1 ${labelStyles[status]}`
              : `top-3 left-4 text-base ${labelStyles[status]}`
          }`}
      >
        {label}
      </label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`w-full px-4 py-3 border-2 rounded-lg appearance-none bg-transparent focus:outline-none 
            ${statusStyles[status]} ${
            hasValue ? "text-gray-800" : "text-transparent"
          }`}
        >
          <option value="" disabled></option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
      {helperText && (
        <p className={`mt-1 text-xs ${labelStyles[status]}`}>{helperText}</p>
      )}
    </div>
  );
}

export default Select;
