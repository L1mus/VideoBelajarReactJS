import React from "react";

function StateDisplay({ image, title, message, children }) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-10 px-6">
      <img src={image} alt={title} className="w-64 h-auto mx-auto mb-6" />
      <h2 className="text-2xl font-bold font-poppins text-text-dark-primary mb-2">
        {title}
      </h2>
      <p className="text-text-dark-secondary max-w-md mb-6">{message}</p>
      {children && <div className="mt-2">{children}</div>}
    </div>
  );
}

export default StateDisplay;
