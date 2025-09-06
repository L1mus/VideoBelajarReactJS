import React from "react";
import Checkbox from "../Checkbox";
import RadioInput from "../Button/Radio";
import FilterAccordion from "./Accordion";

import iconBook from "/assets/icon/icon-book.png";
import iconTag from "/assets/icon/icon-shopingbag.png";
import iconClock from "/assets/icon/icon-clock.png";

function FilterSidebar({ filters, onFilterChange, onResetFilters }) {
  const DURATION_OPTIONS = [
    { value: "0-4", label: "Kurang dari 4 Jam" },
    { value: "4-8", label: "4 - 8 Jam" },
    { value: "8", label: "Lebih dari 8 Jam" },
  ];

  // Opsi harga sekarang mencerminkan kategori sesuai gambar
  const PRICE_OPTIONS = [
    { value: "pemasaran", label: "Pemasaran" },
    { value: "digital & teknologi", label: "Digital & Teknologi" },
    { value: "pengembangan diri", label: "Pengembangan Diri" },
    { value: "bisnis", label: "Bisnis Manajemen" },
  ];

  return (
    <aside className="w-full lg:w-1/4">
      <div className="bg-white p-5 rounded-lg shadow-md">
        <div className="flex justify-between items-center pb-4">
          <h2 className="text-xl font-bold text-text-dark-primary">Filter</h2>
          <button
            className="text-sm text-error-default hover:underline font-semibold"
            onClick={onResetFilters}
          >
            Reset
          </button>
        </div>
        <div>
          <FilterAccordion
            title="Bidang Studi"
            icon={iconBook}
            defaultOpen={true}
          >
            {/* Opsi Bidang Studi tetap sama */}
            <Checkbox
              label="Pemasaran"
              name="pemasaran"
              checked={!!filters.studyFields.pemasaran}
              onChange={(e) =>
                onFilterChange("studyFields", e.target.name, e.target.checked)
              }
            />
            <Checkbox
              label="Digital & Teknologi"
              name="digital & teknologi"
              checked={!!filters.studyFields["digital & teknologi"]}
              onChange={(e) =>
                onFilterChange("studyFields", e.target.name, e.target.checked)
              }
            />
            <Checkbox
              label="Pengembangan Diri"
              name="pengembangan diri"
              checked={!!filters.studyFields["pengembangan diri"]}
              onChange={(e) =>
                onFilterChange("studyFields", e.target.name, e.target.checked)
              }
            />
            <Checkbox
              label="Bisnis Manajemen"
              name="bisnis"
              checked={!!filters.studyFields.bisnis}
              onChange={(e) =>
                onFilterChange("studyFields", e.target.name, e.target.checked)
              }
            />
          </FilterAccordion>

          {/* Bagian Harga sekarang menggunakan Checkbox */}
          <FilterAccordion title="Harga" icon={iconTag} defaultOpen={true}>
            {PRICE_OPTIONS.map((option) => (
              <Checkbox
                key={option.value}
                label={option.label}
                name={option.value}
                checked={!!filters.price[option.value]}
                onChange={(e) =>
                  onFilterChange("price", e.target.name, e.target.checked)
                }
              />
            ))}
          </FilterAccordion>

          <FilterAccordion title="Durasi" icon={iconClock} defaultOpen={true}>
            {DURATION_OPTIONS.map((option) => (
              <RadioInput
                key={option.value}
                label={option.label}
                name="duration"
                value={option.value}
                checked={filters.duration === option.value}
                onChange={(e) =>
                  onFilterChange("duration", "duration", e.target.value)
                }
              />
            ))}
          </FilterAccordion>
        </div>
      </div>
    </aside>
  );
}

export default FilterSidebar;
