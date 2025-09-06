function Checkbox({ label, name, checked, onChange, disabled = false }) {
  const baseStyle =
    "w-5 h-5 rounded flex-shrink-0 flex items-center justify-center transition-all duration-200";

  const boxStyle = disabled
    ? `${baseStyle} bg-gray-200 border-gray-300`
    : `${baseStyle} bg-main-primary4 border border-main-primary`;

  const labelStyle = `ml-3 select-none ${
    disabled ? "text-gray-400" : "text-gray-600"
  }`;

  const checkIcon = (
    <svg
      className="w-3 h-3 text-white"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );

  return (
    <label className="flex items-center cursor-pointer">
      <input
        type="checkbox"
        name={name}
        className="hidden"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <div className={boxStyle}>
        {checked && (
          <div className="w-full h-full rounded bg-main-primary flex items-center justify-center">
            {checkIcon}
          </div>
        )}
      </div>
      <span className={labelStyle}>{label}</span>
    </label>
  );
}

export default Checkbox;
