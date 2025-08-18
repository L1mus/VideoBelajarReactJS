// Komponen Tombol yang bisa dipakai ulang

function Button({ onClick, children, variant = "primary" }) {
  // 1. Definisikan gaya dasar (sama untuk semua varian)
  const baseStyle =
    "px-7 py-3 font-semibold text-white rounded-lg shadow-md transition-transform transform hover:scale-105 focus:outline-none";

  // 2. Definisikan gaya spesifik untuk setiap varian
  const variantStyles = {
    primary:
      "primaryMainColor lightPrimary hover:primaryMainColor4 hover:primaryMainColor",
    secondary:
      "secondaryMainColor lightPrimary hover:secondaryMainColor4 hover:secondaryMainColor",
    tetrinary:
      "tetrinaryMainColor lightPrimary hover:tetrinaryMainColor4 hover:tetrinaryMainColor",
    primary1:
      "border-primaryMainColor text-primaryMainColor hover:bg-primaryMainColor4",
    secondary1:
      "border-secondaryColor text-secondaryColor hover:bg-secondaryColor4",
    tetrinary1:
      "border-tetrinaryMainColor text-tetrinaryMainColor hover:bg-tetrinaryMainColor4",
  };

  // 3. Gabungkan gaya dasar dengan gaya varian yang dipilih
  const buttonClassName = `${baseStyle} ${variantStyles[variant]}`;

  // 4. Render elemen <button> HTML dengan properti yang diterima
  return (
    <button onClick={onClick} className={buttonClassName}>
      {children}
    </button>
  );
}

// 5. Ekspor komponen agar bisa diimpor di file lain
export default Button;
