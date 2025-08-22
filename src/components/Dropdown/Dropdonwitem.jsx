function DropdownItem({ children, onClick, isFirst = false }) {
  const textStyle = isFirst
    ? "text-gray-800 font-bold bg-gray-100"
    : "text-gray-600";

  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        if (onClick) onClick();
      }}
      className={`block px-4 py-3 text-base hover:bg-gray-100 ${textStyle}`}
    >
      {children}
    </a>
  );
}

export default DropdownItem;
