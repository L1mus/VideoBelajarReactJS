function RadioInput({
  label,
  name,
  value,
  checked,
  onChange,
  disabled = false,
}) {
  const outerCircleStyle = `w-5 h-5 border rounded-full flex-shrink-0 flex items-center justify-center transition-all duration-200 p-0.5
    ${
      disabled
        ? "bg-gray-200 border-gray-300"
        : checked
        ? "border-main-primary bg-main-primary4"
        : "border-gray-300 bg-main-primary4"
    }`;

  const innerCircleStyle = `w-full h-full rounded-full transition-all duration-200 ${
    checked ? "bg-main-primary scale-100" : "bg-transparent scale-0"
  }`;

  const labelStyle = `ml-3 select-none ${
    disabled ? "text-gray-400" : "text-gray-600"
  }`;

  return (
    <label className="flex items-center cursor-pointer text-base">
      <input
        type="radio"
        className="hidden"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <div className={outerCircleStyle}>
        {checked && <div className={innerCircleStyle} />}
      </div>
      <span className={labelStyle}>{label}</span>
    </label>
  );
}

export default RadioInput;
