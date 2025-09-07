import React from "react";

const CheckCircleIcon = () => (
  <svg
    className="w-4 h-4 text-white"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

const Stepper = ({ steps = [], currentStep = 0 }) => {
  return (
    <div className="flex items-center justify-center space-x-2 sm:space-x-4">
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <div className="flex items-center">
            <div
              className={`flex items-center justify-center w-7.5 h-7.5 rounded-full transition-all duration-300
                ${
                  index < currentStep
                    ? "bg-main-primary"
                    : index === currentStep
                    ? "border-2 border-main-primary"
                    : "bg-other-primary-background border border-text-light-disabled"
                }`}
            >
              {index < currentStep && <CheckCircleIcon />}
              {index === currentStep && (
                <div className="w-4 h-4 rounded-full border-2 border-main-primary bg-main-primary"></div> // Inner circle for active step
              )}
              {index > currentStep && (
                <div className="w-4 h-4 rounded-full bg-text-light-disabled"></div>
              )}
            </div>
            <span
              className={`ml-2 font-poppins text-sm font-medium transition-colors duration-300 ${
                index <= currentStep
                  ? "text-text-dark-primary"
                  : "text-text-dark-secondary"
              }`}
            >
              {step}
            </span>
          </div>

          {index < steps.length - 1 && (
            <div
              className={`flex-1 h-0.5 min-w-[20px] sm:min-w-[40px] ${
                index < currentStep
                  ? "bg-main-primary"
                  : "bg-text-light-disabled"
              }`}
            ></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Stepper;
