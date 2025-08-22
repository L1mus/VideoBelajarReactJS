// src/components/common/FilterSidebar.jsx
import React, { useState } from "react";
import Checkbox from "../Checkbox";
import RadioInput from "../Button/Radio";
import FilterAccordion from "./Accordion";

// Impor ikon yang relevan dari folder assets Anda
import iconBook from "/assets/icon/icon-book.png";
import iconTag from "/assets/icon/icon-shopingbag.png"; // Menggunakan ikon tas belanja untuk harga
import iconClock from "/assets/icon/icon-clock.png";

function FilterSidebar() {
  // State untuk mengelola filter yang dipilih
  const [studyFields, setStudyFields] = useState({ teknologi: true });
  const [duration, setDuration] = useState("");

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setStudyFields((prev) => ({ ...prev, [name]: checked }));
  };

  const DURATION_OPTIONS = [
    { value: "1-4", label: "Kurang dari 4 Jam" },
    { value: "4-8", label: "4 - 8 Jam" },
    { value: "8+", label: "Lebih dari 8 Jam" },
  ];

  return (
    <aside className="w-full max-h-fit lg:w-1/4 bg-white p-5 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Filter</h2>
        <button className="text-sm text-red-500 hover:underline">Reset</button>
      </div>
      <div>
        <FilterAccordion
          title="Bidang Studi"
          icon={iconBook}
          defaultOpen={true}
        >
          <Checkbox
            label="Pemasaran"
            name="pemasaran"
            checked={!!studyFields.pemasaran}
            onChange={handleCheckboxChange}
          />
          <Checkbox
            label="Digital & Teknologi"
            name="teknologi"
            checked={!!studyFields.teknologi}
            onChange={handleCheckboxChange}
          />
          <Checkbox
            label="Pengembangan Diri"
            name="pengembangan"
            checked={!!studyFields.pengembangan}
            onChange={handleCheckboxChange}
          />
          <Checkbox
            label="Bisnis Manajemen"
            name="bisnis"
            checked={!!studyFields.bisnis}
            onChange={handleCheckboxChange}
          />
        </FilterAccordion>

        <FilterAccordion title="Harga" icon={iconTag} defaultOpen={true}>
          <Checkbox
            label="Pemasaran"
            name="pemasaran"
            checked={!!studyFields.pemasaran}
            onChange={handleCheckboxChange}
          />
          <Checkbox
            label="Digital & Teknologi"
            name="teknologi"
            checked={!!studyFields.teknologi}
            onChange={handleCheckboxChange}
          />
          <Checkbox
            label="Pengembangan Diri"
            name="pengembangan"
            checked={!!studyFields.pengembangan}
            onChange={handleCheckboxChange}
          />
          <Checkbox
            label="Bisnis Manajemen"
            name="bisnis"
            checked={!!studyFields.bisnis}
            onChange={handleCheckboxChange}
          />
        </FilterAccordion>

        <FilterAccordion title="Durasi" icon={iconClock} defaultOpen={true}>
          <RadioInput
            label="Kurang dari 4 Jam "
            name="duration"
            options={DURATION_OPTIONS}
            selectedValue={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
          <RadioInput
            label="4 - 8 Jam"
            name="duration"
            options={DURATION_OPTIONS}
            selectedValue={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
          <RadioInput
            label="Lebih dari 8 Jam"
            name="duration"
            options={DURATION_OPTIONS}
            selectedValue={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </FilterAccordion>
      </div>
    </aside>
  );
}

export default FilterSidebar;
