import Checkbox from "../Checkbox";
import RadioGroup from "../Button/Radio";

function FilterSection({ title, children }) {
  return (
    <div className="py-4 border-b border-gray-200">
      <h3 className="font-bold text-gray-800 mb-3">{title}</h3>
      <div className="space-y-2">{children}</div>
    </div>
  );
}

function FilterSidebar() {
  const DURATION_OPTIONS = [
    { value: "1-4", label: "1 - 4 Jam" },
    { value: "4-8", label: "4 - 8 Jam" },
    { value: "8+", label: "Lebih dari 8 Jam" },
  ];

  return (
    <aside className="w-full lg:w-1/4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Filter</h2>
        <button className="text-sm text-red-500 hover:underline">Reset</button>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <FilterSection title="Bidang Studi">
          <Checkbox label="Pemasaran" checked={false} onChange={() => {}} />
          <Checkbox
            label="Digital & Teknologi"
            checked={true}
            onChange={() => {}}
          />
          <Checkbox
            label="Pengembangan Diri"
            checked={false}
            onChange={() => {}}
          />
          <Checkbox
            label="Bisnis Manajemen"
            checked={false}
            onChange={() => {}}
          />
        </FilterSection>

        <FilterSection title="Harga">
          <p className="text-sm text-gray-500">Filter harga akan datang.</p>
        </FilterSection>

        <FilterSection title="Durasi">
          <RadioGroup
            name="duration"
            options={DURATION_OPTIONS}
            selectedValue={"4-8"}
            onChange={() => {}}
          />
        </FilterSection>
      </div>
    </aside>
  );
}

export default FilterSidebar;
