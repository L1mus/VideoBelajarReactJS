import Step from "./Step";
function Stepper({ steps = [], currentStep = 0 }) {
  return (
    <div className="flex items-center space-x-2">
      {steps.map((stepTitle, index) => {
        let status = "upcoming";
        if (index < currentStep) {
          status = "completed";
        } else if (index === currentStep) {
          status = "active";
        }

        const isLastStep = index === steps.length - 1;
        const isConnectorActive = index < currentStep;

        return (
          <React.Fragment key={index}>
            <Step title={stepTitle} status={status} />
            {!isLastStep && (
              <div
                className={`flex-grow h-0.5 transition-all duration-300 ${
                  isConnectorActive ? "bg-primary" : "bg-gray-300"
                } w-12`}
              ></div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default Stepper;
