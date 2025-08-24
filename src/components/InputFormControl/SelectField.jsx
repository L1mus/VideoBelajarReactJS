function SelectField({ label, name, options }) {
  const baseStyle =
    "w-full px-4 py-3 border border-other-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-hover appearance-none";

  return (
    <div className="w-full">
      <label
        htmlFor={name}
        className="block font-medium text-text-dark-primary mb-2"
      >
        {label} <span className="text-error-default">*</span>
      </label>
      <div className="relative">
        <select id={name} name={name} className={baseStyle}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-text-dark-primary">
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
