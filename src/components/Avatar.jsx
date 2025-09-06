import React from "react";

const sizeClasses = {
  sm: "w-8 h-8",
  md: "w-10 h-10",
  lg: "w-12 h-12",
  xl: "w-16 h-16",
};

function Avatar({ src, alt, size = "md", className = "" }) {
  const classes = sizeClasses[size] || sizeClasses.md;

  return (
    <div
      className={`${classes} overflow-hidden bg-gray-200 flex items-center justify-center ${className}`}
      style={{ borderRadius: "25%" }}
    >
      {src ? (
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      ) : (
        <span className="text-gray-600 text-sm font-medium">
          {alt ? alt[0].toUpperCase() : "N/A"}
        </span>
      )}
    </div>
  );
}

export default Avatar;
