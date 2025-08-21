function Avatar({ src, name, size = "md", className = "" }) {
  const sizeStyles = {
    sm: "w-8 h-8 text-xs",
    md: "w-10 h-10 text-sm",
    lg: "w-14 h-14 text-lg",
    xl: "w-20 h-20 text-xl",
  };

  // tampilkan gambar.
  if (src) {
    return (
      <img
        src={src}
        alt={name || "Avatar"}
        className={`rounded-full object-cover ${sizeStyles[size]} ${className}`}
      />
    );
  }

  // tampilkan inisial nama.
  const getInitials = (nameStr) => {
    if (!nameStr) return "?";
    const names = nameStr.split(" ");
    if (names.length > 1) {
      return `${names[0][0]}${names[names.length - 1][0]}`.toUpperCase();
    }
    return nameStr.substring(0, 2).toUpperCase();
  };

  return (
    <div
      className={`flex items-center justify-center rounded-full bg-gray-200 text-gray-600 font-bold ${sizeStyles[size]} ${className}`}
    >
      <span>{getInitials(name)}</span>
    </div>
  );
}

export default Avatar;
