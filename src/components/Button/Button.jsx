function Button({ onClick, children, variant = "" }) {
  const baseStyle =
    "px-7 py-3 font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105 focus:outline-none";

  // Gaya spesifik untuk setiap varian (sekarang menggunakan utility class Tailwind)
  const variantStyles = {
    primary: "bg-main-primary text-white hover:bg-primaryMainColor1",
    secondary: "bg-secondaryMainColor text-white hover:bg-secondaryMainColor1",
    tertiary: "bg-tertiaryMainColor text-white hover:bg-tertiaryMainColor1",
    primary1:
      "border border-primaryMainColor text-primaryMainColor hover:bg-primaryMainColor4",
    secondary1:
      "border border-secondaryMainColor text-secondaryMainColor hover:bg-secondaryMainColor4",
    tertiary1:
      "border border-tertiaryMainColor text-tertiaryMainColor hover:bg-tertiaryMainColor4",
  };

  const buttonClassName = `${baseStyle} ${variantStyles[variant]}`;

  return (
    <button onClick={onClick} className={buttonClassName}>
      {children}
    </button>
  );
}

export default Button;
