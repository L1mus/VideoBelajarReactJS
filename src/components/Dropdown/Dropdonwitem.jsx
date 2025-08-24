function DropdownItem({ children, onClick, isFirst = false }) {
  const textStyle = isFirst
    ? "text-text-dark-primary font-bold bg-other-secondary-backround"
    : "text-text-dark-secondary";

  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        if (onClick) onClick();
      }}
      className={`block px-4 py-3 text-base hover:bg-other-secondary-backround ${textStyle}`}
    >
      {children}
    </a>
  );
}

export default DropdownItem;
