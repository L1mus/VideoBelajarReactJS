// src/components/common/CourseFilters.jsx
import React, { useState } from "react";

function CourseFilters() {
  const [activeCategory, setActiveCategory] = useState("Semua Kelas");
  const categories = [
    "Semua Kelas",
    "Pemasaran",
    "Desain",
    "Pengembangan Diri",
    "Bisnis",
  ];

  return (
    <section id="koleksi">
      <div className="mb-6">
        <h2 className="text-3xl font-bold font-poppins text-gray-800">
          Koleksi Video Pembelajaran Unggulan
        </h2>
        <p className="text-gray-500 mt-1">
          Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
        </p>
      </div>
      <div className="flex items-center space-x-6 border-b border-gray-200">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`py-2 text-base font-semibold transition-colors duration-300
              ${
                activeCategory === category
                  ? "border-b-2 border-orange-500 text-orange-500"
                  : "text-gray-500 hover:text-orange-500"
              }`}
          >
            {category}
          </button>
        ))}
      </div>
    </section>
  );
}

export default CourseFilters;
