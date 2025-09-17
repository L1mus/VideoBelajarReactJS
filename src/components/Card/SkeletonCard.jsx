// src/components/Card/SkeletonCard.jsx

import React from "react";

function SkeletonCard() {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
      {/* Skeleton Image */}
      <div className="w-full h-48 bg-gray-300 animate-pulse"></div>

      <div className="p-4 flex flex-col flex-grow">
        {/* Skeleton Title */}
        <div className="h-6 w-3/4 bg-gray-300 rounded animate-pulse mb-3"></div>

        {/* Skeleton Description */}
        <div className="h-4 w-full bg-gray-200 rounded animate-pulse mb-2"></div>
        <div className="h-4 w-5/6 bg-gray-200 rounded animate-pulse mb-4"></div>

        {/* Skeleton Author */}
        <div className="flex items-center mb-4 mt-auto">
          <div className="w-8 h-8 bg-gray-300 rounded-full animate-pulse"></div>
          <div className="ml-3 flex-grow">
            <div className="h-4 w-1/2 bg-gray-300 rounded animate-pulse mb-2"></div>
            <div className="h-3 w-1/3 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>

        {/* Skeleton Rating & Price */}
        <div className="flex items-center justify-between">
          <div className="h-5 w-1/4 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-6 w-1/3 bg-gray-300 rounded animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}

export default SkeletonCard;
