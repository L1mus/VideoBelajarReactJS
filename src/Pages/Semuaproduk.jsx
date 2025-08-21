import FilterSidebar from "../components/Layout/Filtersidebar";
import CourseCard from "../components/Card/CourseCard";
import Select from "../components/Dropdown/Select";
import { courses } from "../data/courses";

function SemuaProduk() {
  const displayCourses = [...courses, ...courses, ...courses, ...courses]; // Data contoh
  const SORT_OPTIONS = [
    { value: "terbaru", label: "Terbaru" },
    { value: "terpopuler", label: "Terpopuler" },
    { value: "harga-terendah", label: "Harga Terendah" },
    { value: "harga-tertinggi", label: "Harga Tertinggi" },
  ];

  return (
    <div className="container mx-auto px-6 py-10">
      {/* Header Halaman */}
      <div>
        <h1 className="text-3xl font-bold font-poppins text-gray-800">
          Koleksi Video Pembelajaran Unggulan
        </h1>
        <p className="text-gray-500 mt-1">
          Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 mt-8">
        {/* Sidebar Filter */}
        <FilterSidebar />

        {/* Konten Utama (Grid Produk) */}
        <main className="w-full lg:w-3/4">
          {/* Baris untuk Urutkan dan Cari */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
            <Select
              options={SORT_OPTIONS}
              initialValue="terpopuler"
              label="Urutkan"
            />
            <div className="relative w-full sm:w-auto">
              <input
                type="text"
                placeholder="Cari Kelas..."
                className="w-full sm:w-64 px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary"
              />
              <span className="absolute right-3 top-2.5 text-gray-400">🔍</span>
            </div>
          </div>

          {/* Grid Kartu Produk */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {displayCourses.map((course, index) => (
              <CourseCard key={`${course.id}-${index}`} data={course} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-10">
            {/* Komponen pagination bisa dibuat terpisah */}
            <div className="flex items-center space-x-2">
              <button className="px-3 py-1 border rounded-md hover:bg-gray-100">
                {"<"}
              </button>
              <button className="px-3 py-1 border rounded-md bg-primary text-white">
                1
              </button>
              <button className="px-3 py-1 border rounded-md hover:bg-gray-100">
                2
              </button>
              <button className="px-3 py-1 border rounded-md hover:bg-gray-100">
                3
              </button>
              <button className="px-3 py-1 border rounded-md hover:bg-gray-100">
                {">"}
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default SemuaProduk;
