const CheckIcon = () => (
  <svg
    className="w-4 h-4 text-white"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M5 13l4 4L19 7"
    />
  </svg>
);
function Step({ title, status }) {
  const getStatusStyles = () => {
    switch (status) {
      case "completed":
        return {
          circle: "bg-primary flex items-center justify-center",
          title: "text-primary",
        };
      case "active":
        return {
          circle: "border-2 border-primary p-1 bg-white",
          title: "text-gray-800 font-bold",
        };
      default: // upcoming
        return {
          circle: "border-2 border-gray-300",
          title: "text-gray-400",
        };
    }
  };

  const styles = getStatusStyles();

  return (
    <div className="flex items-center">
      <div
        className={`w-6 h-6 rounded-full transition-all duration-300 ${styles.circle}`}
      >
        {status === "completed" && <CheckIcon />}
        {status === "active" && (
          <div className="w-full h-full rounded-full bg-primary"></div>
        )}
      </div>
      <span
        className={`ml-2 text-sm transition-all duration-300 ${styles.title}`}
      >
        {title}
      </span>
    </div>
  );
}

export default Step;
