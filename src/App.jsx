import Button from "./components/Button/Button";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import CourseCard from "./components/Card/CourseCard";
import { courses } from "./data/courses";

function App() {
  const handleSimpan = () => {
    alert("Data berhasil disimpan!");
  };

  const handleHapus = () => {
    confirm("Apakah Anda yakin ingin menghapus data ini?");
  };
  const displayCourses = [...courses, ...courses, ...courses];

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
        {displayCourses.map((course, index) => (
          <CourseCard key={`${course.id}-${index}`} data={course} />
        ))}
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 space-y-4">
        <h1 className="font-bold mb-4">Contoh Penggunaan Komponen Button</h1>

        <Button onClick={handleSimpan} variant="primary">
          Simpan Perubahan
        </Button>

        <Button onClick={handleHapus} variant="secondary">
          Hapus Akun
        </Button>

        <Button onClick={() => alert("Membatalkan aksi...")} variant="tertiary">
          Batal
        </Button>
      </div>

      <Footer />
    </>
  );
}

export default App;
