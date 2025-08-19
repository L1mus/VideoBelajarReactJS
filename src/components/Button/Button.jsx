function Button({ onClick, children, variant = "" }) {
  const baseStyle =
    "px-7 py-3 font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105 focus:outline-none";
  const variantStyles = {
    primary:
      "bg-main-primary text-text-light-primary hover:bg-main-primary3 hover:text-main-primary",
    secondary:
      "bg-main-secondary text-text-light-primary hover:bg-main-secondary3 hover:text-main-secondary",
    tertiary:
      "bg-main-tertiary text-text-light-primary hover:bg-main-tertiary3 hover:text-main-tertiary",
    primary1:
      "border border-main-primary text-main-primary hover:bg-main-primary4",
    secondary1:
      "border border-main-secondary text-main-secondary hover:bg-main-secondary4",
    tertiary1:
      "border border-main-tertiary text-main-tertiary hover:bg-main-tertiary4",
  };

  const buttonClassName = `${baseStyle} ${variantStyles[variant]}`;

  return (
    <button onClick={onClick} className={buttonClassName}>
      {children}
    </button>
  );
}

export default Button;
