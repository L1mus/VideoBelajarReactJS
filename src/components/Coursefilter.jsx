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
        <h2 className="text-3xl font-bold font-poppins text-text-dark-primary">
          Koleksi Video Pembelajaran Unggulan
        </h2>
        <p className="text-text-dark-secondary mt-1">
          Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
        </p>
      </div>
      <div className="flex items-center space-x-6 border-b border-other-border">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`py-2 text-base font-semibold transition-colors duration-300
              ${
                activeCategory === category
                  ? "border-b-2 border-main-tertiary text-main-tertiary"
                  : "text-text-dark-secondary hover:text-main-tertiary"
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
