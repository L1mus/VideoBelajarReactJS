// src/components/SelectField/SelectField.jsx
function SelectField({ label, name, options }) {
  const baseStyle =
    "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-hover appearance-none";

  return (
    <div className="w-full">
      <label
        htmlFor={name}
        className="block font-sans font-medium text-gray-700 mb-2"
      >
        {label} <span className="text-red-500">*</span>
      </label>
      <div className="relative">
        <select id={name} name={name} className={baseStyle}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default SelectField;
