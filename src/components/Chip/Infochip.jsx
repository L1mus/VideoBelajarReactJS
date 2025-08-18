// infoChipButton.jsx
import React from "react";

const infoChipButton = ({
  onClick,
  children,
  type = "button",
  className = "",
}) => {
  return (
    <button type={type} onClick={onClick} className={`my-button ${className}`}>
      {children}
    </button>
  );
};

export default infoChipButton;
