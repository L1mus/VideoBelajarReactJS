function Chip({
  children,
  variant = "primary",
  style = "solid",
  disabled = false,
}) {
  const baseStyle =
    "px-4 py-1.5 text-sm font-semibold rounded-full cursor-pointer transition-all duration-200";

  const disabledStyles = {
    light: "bg-gray-200 text-gray-400",
    solid: "bg-gray-300 text-gray-500",
    outline: "border border-gray-300 text-gray-400",
  };

  const variantStyles = {
    light: {
      success: "bg-green-100 text-green-700",
      info: "bg-blue-100 text-blue-700",
      warning: "bg-yellow-100 text-yellow-700",
      error: "bg-red-100 text-red-700",
      primary: "bg-primary-outline text-primary",
      secondary: "bg-secondary-outline text-secondary",
    },
    solid: {
      success: "bg-green-500 text-white",
      info: "bg-blue-500 text-white",
      warning: "bg-yellow-500 text-white",
      error: "bg-red-500 text-white",
      primary: "bg-primary text-white",
      secondary: "bg-secondary text-white",
    },
    outline: {
      success: "border border-green-500 text-green-600",
      info: "border border-blue-500 text-blue-600",
      warning: "border border-yellow-500 text-yellow-600",
      error: "border border-red-500 text-red-600",
      primary: "border border-primary text-primary",
      secondary: "border border-secondary text-secondary",
    },
  };

  const chipClassName = disabled
    ? `${baseStyle} ${disabledStyles[style]}`
    : `${baseStyle} ${variantStyles[style][variant]}`;

  return <div className={chipClassName}>{children}</div>;
}

export default Chip;
