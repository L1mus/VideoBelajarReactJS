function Checkbox({ label, checked, onChange, disabled = false }) {
  const boxStyle = `w-5 h-5 border-2 rounded flex-shrink-0 flex items-center justify-center transition-all duration-200 
    ${
      disabled
        ? "bg-gray-200 border-gray-300"
        : checked
        ? "bg-primary border-primary"
        : "bg-white border-gray-300"
    }`;

  const labelStyle = `ml-3 select-none ${
    disabled ? "text-gray-400" : "text-gray-700"
  }`;

  const checkIcon = (
    <svg
      className="w-3 h-3 text-white"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
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
        className="hidden"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <div className={boxStyle}>{checked && checkIcon}</div>
      <span className={labelStyle}>{label}</span>
    </label>
  );
}

export default Checkbox;
