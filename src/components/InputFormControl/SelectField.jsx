function SelectField({
  label,
  name,
  options,
  value,
  onChange,
  variant = "filled",
}) {
  if (variant === "outline") {
    return (
      <div className="relative">
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className="block w-full px-4 py-3 text-text-dark-primary bg-white border border-other-border rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-main-primary peer"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <label
          htmlFor={name}
          className="absolute text-text-dark-secondary duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] start-4 bg-white px-1"
        >
          {label}
        </label>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-text-dark-primary">
          <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
    );
  }

  // Varian "FILLED"
  return (
    <div className="w-full">
      <label
        htmlFor={name}
        className="block font-medium text-text-dark-primary mb-2"
      >
        {label} <span className="text-error-default">*</span>
      </label>
      <div className="relative">
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className="w-full px-4 py-3 border border-other-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-hover bg-other-secondary-background appearance-none"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-text-dark-primary">
          <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default SelectField;
