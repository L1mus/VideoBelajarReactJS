import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CourseCard from "../components//Card/CourseCard";
import Newsletter from "../components/Newslatter";
import Footer from "../components/Footer";
import Button from "../components/Button/Button";
import { courses } from "../data/courses";
import CourseFilters from "../components/Coursefilter";

function Berandalogout() {
  const displayCourses = [...courses, ...courses];
  const NavLinks = () => (
    <a href="#koleksi" className="text-gray-600 hover:text-primary py-2">
      Kategori
    </a>
  );

  return (
    <div className="bg-white">
      <Navbar
        desktopContent={
          <>
            <NavLinks />
            <div className="flex items-center space-x-2">
              <Button variant="primary">Login</Button>
              <Button variant="primary-outline">Register</Button>
            </div>
          </>
        }
        mobileMenu={
          <>
            <NavLinks />
            <div className="pt-2 space-y-2">
              <Button variant="primary" className="w-full">
                Login
              </Button>
              <Button variant="primary-outline" className="w-full">
                Register
              </Button>
            </div>
          </>
        }
      />
      <main className="container mx-auto px-6 py-10 space-y-16">
        <Hero />
        <CourseFilters />
        <section id="koleksi">
          <h2 className="text-2xl font-bold font-poppins text-gray-800 mb-6">
            Koleksi Video Pembelajaran Unggulan
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayCourses.map((course, index) => (
              <CourseCard key={`${course.id}-${index}`} data={course} />
            ))}
          </div>
        </section>
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default Berandalogout;
