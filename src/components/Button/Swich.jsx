function Switch({ isOn, onToggle, disabled = false }) {
  const backgroundStyle = `w-12 h-6 rounded-full flex items-center p-1 transition-colors duration-300 ease-in-out
    ${
      disabled
        ? "bg-gray-300 cursor-not-allowed"
        : isOn
        ? "bg-primary justify-end"
        : "bg-green-200 justify-start"
    }`;

  const handleStyle = `w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ease-in-out`;

  return (
    <button
      type="button"
      className={backgroundStyle}
      onClick={!disabled ? onToggle : undefined}
      disabled={disabled}
    >
      <div className={handleStyle}></div>
    </button>
  );
}

export default Switch;
