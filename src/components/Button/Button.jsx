// Komponen Tombol yang bisa dipakai ulang

function Button({ onClick, children, variant = "" }) {
  const baseStyle =
    "px-7 py-3 font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105 focus:outline-none";

  // Gaya spesifik untuk setiap varian (sekarang menggunakan utility class Tailwind)
  const variantStyles = {
    primary:
      "bg-primaryMainColor text-white hover:bg-primaryMainColor4 hover:text-primaryMainColor",
    secondary:
      "bg-secondaryMainColor text-white hover:bg-secondaryMainColor4 hover:text-secondaryMainColor",
    tetrinary:
      "bg-tertiaryMainColor text-white hover:bg-tertiaryMainColor4 hover:text-tertiaryMainColor",
    primary1:
      "border border-primaryMainColor text-primaryMainColor hover:bg-primaryMainColor4",
    secondary1:
      "border border-secondaryMainColor text-secondaryMainColor hover:bg-secondaryMainColor4",
    tetrinary1:
      "border border-tetrinaryMainColor text-tetrinaryMainColor hover:bg-tetrinaryMainColor4",
  };

  const buttonClassName = `${baseStyle} ${variantStyles[variant]}`;

  return (
    <button onClick={onClick} className={buttonClassName}>
      {children}
    </button>
  );
}

export default Button;
