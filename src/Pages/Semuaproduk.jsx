import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FilterSidebar from "../components/Layout/FilterSidebar";
import CourseCard from "../components/Card/CourseCard";
import Select from "../components/Dropdown/Select";
import Button from "../components/Button/Button";
import Avatar from "../components/Avatar";
import { courses } from "../data/courses";
// import userAvatar from "/assets/images/avatar.png";

function SemuaProduk({ isLoggedIn, onNavigate }) {
  const displayCourses = [...courses, ...courses, ...courses];
  const SORT_OPTIONS = [
    { value: "harga-rendah", label: "Harga Rendah" },
    { value: "harga-tinggi", label: "Harga Tinggi" },
    { value: "a-to-z", label: "A to Z" },
    { value: "z-to-a", label: "Z to A" },
    { value: "rating-tertinggi", label: "Rating Tertinggi" },
    { value: "rating-terendah", label: "Rating Terendah" },
  ];

  const NavLinks = () => (
    <>
      <button
        onClick={() => onNavigate("beranda")}
        className="text-gray-600 hover:text-primary py-2"
      >
        Beranda
      </button>
      <span className="text-primary font-semibold py-2">Kategori</span>
    </>
  );

  return (
    <div className="bg-main-secondary4">
      <Navbar isLoggedIn={isLoggedIn} onNavigate={onNavigate} />

      <main className="container mx-auto px-6 py-10">
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold font-poppins text-gray-800">
            Koleksi Video Pembelajaran Unggulan
          </h1>
          <p className="text-gray-500 mt-1">
            Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 mt-8">
          <FilterSidebar />
          <div className="w-full lg:w-3/4">
            <div className="flex flex-col sm:flex-row justify-end items-center mb-6 gap-4 p-4">
              <Select options={SORT_OPTIONS} placeholder="Urutkan" />
              <div className="relative w-full sm:w-auto">
                <input
                  type="text"
                  placeholder="Cari Kelas..."
                  className="w-full sm:w-64 px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary bg-white"
                />
                <span className="absolute right-3 top-2.5 text-gray-400">
                  🔍
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {displayCourses.map((course, index) => (
                <CourseCard key={`${course.id}-${index}`} data={course} />
              ))}
            </div>

            <div className="flex justify-center mt-10">
              <div className="flex items-center space-x-1">
                <button className="px-3 py-1 border rounded-md hover:bg-gray-100">
                  {"<"}
                </button>
                <button className="px-3 py-1 border rounded-md bg-yellow-400 text-gray-800 font-bold">
                  1
                </button>
                <button className="px-3 py-1 border rounded-md hover:bg-gray-100">
                  2
                </button>
                <button className="px-3 py-1 border rounded-md hover:bg-gray-100">
                  3
                </button>
                <button className="px-3 py-1 border rounded-md hover:bg-gray-100">
                  4
                </button>
                <button className="px-3 py-1 border rounded-md hover:bg-gray-100">
                  5
                </button>
                <button className="px-3 py-1 border rounded-md hover:bg-gray-100">
                  6
                </button>
                <button className="px-3 py-1 border rounded-md hover:bg-gray-100">
                  {">"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default SemuaProduk;
