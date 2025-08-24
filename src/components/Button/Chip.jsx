function Chip({
  children,
  variant = "primary",
  style = "solid",
  disabled = false,
}) {
  const baseStyle =
    "px-4 py-1.5 text-sm font-semibold rounded-full cursor-pointer transition-all duration-200";

  const disabledStyles = {
    light: "bg-text-light-disabled text-text-light-secondary",
    solid: "bg-gray-300 text-text-dark-secondary",
    outline: "border border-other-border text-text-dark-secondary",
  };

  const variantStyles = {
    light: {
      success: "bg-success-background text-success-hover",
      info: "bg-info-background text-info-hover",
      warning: "bg-warning-background text-warning-hover",
      error: "bg-error-background text-error-hover",
      primary: "bg-main-primary4 text-main-primary",
      secondary: "bg-main-secondary4 text-main-secondary",
    },
    solid: {
      success: "bg-success-hover text-text-light-primary",
      info: "bg-info-hover text-text-light-primary",
      warning: "bg-warning-hover text-text-light-primary",
      error: "bg-error-hover text-text-light-primary",
      primary: "bg-main-primary4 text-main-primary",
      secondary: "bg-main-secondary4 text-main-secondary",
    },
    outline: {
      success: "border border-success-hover text-success-hover ",
      info: "border border-info-hover text-info-hover ",
      warning: "border border-warning-hover text-warning-hover",
      error: "border border-error-hover text-error-hover",
      primary: "border border-main-primary text-main-primary",
      secondary: "border border-main-secondary text-main-secondary",
    },
  };

  const chipClassName = disabled
    ? `${baseStyle} ${disabledStyles[style]}`
    : `${baseStyle} ${variantStyles[style][variant]}`;

  return <div className={chipClassName}>{children}</div>;
}

export default Chip;
