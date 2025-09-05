function Pagination({ currentPage, totalPages, onPageChange }) {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const NavButton = ({ children, onClick, disabled }) => (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-10 h-10 p-2 flex items-center justify-center rounded bg-gray-100 transition-opacity duration-200 ${
        disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"
      }`}
    >
      {children}
    </button>
  );

  const PageButton = ({ page, isActive }) => (
    <button
      onClick={() => onPageChange(page)}
      className={`w-10 h-10 p-2 rounded font-semibold text-sm transition-colors duration-200 ${
        isActive
          ? "bg-main-secondary text-text-light-primary"
          : "text-text-dark-primary hover:bg-main-secondary2"
      }`}
    >
      {page}
    </button>
  );

  return (
    <div className="flex justify-center items-center space-x-2">
      <NavButton onClick={handlePrevious} disabled={currentPage === 1}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </NavButton>

      {pageNumbers.map((number) => (
        <PageButton
          key={number}
          page={number}
          isActive={currentPage === number}
        />
      ))}

      <NavButton onClick={handleNext} disabled={currentPage === totalPages}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </NavButton>
    </div>
  );
}

export default Pagination;
