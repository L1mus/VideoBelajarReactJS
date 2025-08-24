import React, { useState } from "react";
import Checkbox from "../Checkbox";
import RadioInput from "../Button/Radio";
import FilterAccordion from "./Accordion";

import iconBook from "/assets/icon/icon-book.png";
import iconTag from "/assets/icon/icon-shopingbag.png";
import iconClock from "/assets/icon/icon-clock.png";

function FilterSidebar() {
  const [studyFields, setStudyFields] = useState({ teknologi: true });
  const [price, setPrice] = useState({});
  const [duration, setDuration] = useState("");

  const handleCheckboxChange = (setter) => (event) => {
    const { name, checked } = event.target;
    setter((prev) => ({ ...prev, [name]: checked }));
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
        <button className="text-sm text-error-default hover:underline">
          Reset
        </button>
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
            onChange={handleCheckboxChange(setStudyFields)}
          />
          <Checkbox
            label="Digital & Teknologi"
            name="teknologi"
            checked={!!studyFields.teknologi}
            onChange={handleCheckboxChange(setStudyFields)}
          />
          <Checkbox
            label="Pengembangan Diri"
            name="pengembangan"
            checked={!!studyFields.pengembangan}
            onChange={handleCheckboxChange(setStudyFields)}
          />
          <Checkbox
            label="Bisnis Manajemen"
            name="bisnis"
            checked={!!studyFields.bisnis}
            onChange={handleCheckboxChange(setStudyFields)}
          />
        </FilterAccordion>

        <FilterAccordion title="Harga" icon={iconTag} defaultOpen={true}>
          <Checkbox
            label="Pemasaran"
            name="pemasaran"
            checked={!!price.pemasaran}
            onChange={handleCheckboxChange(setPrice)}
          />
          <Checkbox
            label="Digital & Teknologi"
            name="teknologi"
            checked={!!price.teknologi}
            onChange={handleCheckboxChange(setPrice)}
          />
          <Checkbox
            label="Pengembangan Diri"
            name="pengembangan"
            checked={!!price.pengembangan}
            onChange={handleCheckboxChange(setPrice)}
          />
          <Checkbox
            label="Bisnis Manajemen"
            name="bisnis"
            checked={!!price.bisnis}
            onChange={handleCheckboxChange(setPrice)}
          />
        </FilterAccordion>

        <FilterAccordion title="Durasi" icon={iconClock} defaultOpen={true}>
          {DURATION_OPTIONS.map((option) => (
            <RadioInput
              key={option.value}
              label={option.label}
              name="duration"
              value={option.value}
              checked={duration === option.value}
              onChange={(e) => setDuration(e.target.value)}
            />
          ))}
        </FilterAccordion>
      </div>
    </aside>
  );
}

export default FilterSidebar;
