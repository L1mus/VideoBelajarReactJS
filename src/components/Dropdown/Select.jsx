function Select({ placeholder, options, value, onChange }) {
  return (
    <div className="relative w-full sm:w-auto">
      <select
        value={value || ""}
        onChange={onChange}
        className={`w-full sm:w-48 px-4 py-2.5 border border-other-border rounded-lg appearance-none bg-other-primary-backgroundfocus:outline-none focus:ring-2 focus:ring-primary ${
          value ? "text-text-dark-primary" : "text-text-dark-secondary"
        }`}
      >
        <option value="" disabled hidden>
          {placeholder}
        </option>

        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {/* Icon panah */}
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-text-dark-secondary">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  );
}

export default Select;
