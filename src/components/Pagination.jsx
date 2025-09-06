import React, { useMemo } from "react";
import useMediaQuery from "../Hooks/useMediaQuery";

const DOTS = "...";

function Pagination({ currentPage, totalPages, onPageChange }) {
  const isMobile = useMediaQuery("(max-width: 640px)");

  const paginationRange = useMemo(() => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    // LogikaMobile
    if (isMobile) {
      if (currentPage <= 2) {
        return [1, 2, 3, DOTS];
      }

      if (currentPage >= totalPages - 1) {
        return [DOTS, totalPages - 2, totalPages - 1, totalPages];
      }

      return [DOTS, currentPage, DOTS];
    }

    const siblingCount = 1;
    const totalPageNumbers = siblingCount + 5;

    if (totalPageNumbers >= totalPages) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPages - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPages;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      let leftItemCount = 3 + 2 * siblingCount;
      let leftRange = Array.from({ length: leftItemCount }, (_, i) => i + 1);
      return [...leftRange, DOTS, totalPages];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      let rightItemCount = 3 + 2 * siblingCount;
      let rightRange = Array.from(
        { length: rightItemCount },
        (_, i) => totalPages - rightItemCount + i + 1
      );
      return [firstPageIndex, DOTS, ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      let middleRange = Array.from(
        { length: rightSiblingIndex - leftSiblingIndex + 1 },
        (_, i) => leftSiblingIndex + i
      );
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }
  }, [totalPages, currentPage, isMobile]);

  const handlePrevious = () => {
    onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    onPageChange(currentPage + 1);
  };

  const NavButton = ({ children, onClick }) => (
    <button
      onClick={onClick}
      className="w-10 h-10 p-2 flex items-center justify-center rounded bg-gray-100 transition-colors duration-200 hover:bg-gray-200"
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
      {currentPage > 1 && (
        <NavButton onClick={handlePrevious}>
          <svg
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
      )}

      {paginationRange.map((pageNumber, index) => {
        if (pageNumber === DOTS) {
          return (
            <span key={index} className="px-2 py-1 text-text-dark-secondary">
              ...
            </span>
          );
        }
        return (
          <PageButton
            key={index}
            page={pageNumber}
            isActive={currentPage === pageNumber}
          />
        );
      })}

      {currentPage < totalPages && (
        <NavButton onClick={handleNext}>
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </NavButton>
      )}
    </div>
  );
}

export default Pagination;
