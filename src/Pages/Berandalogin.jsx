import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CourseCard from "../components/Card/CourseCard";
import Newsletter from "../components/Newslatter";
import Footer from "../components/Footer";
import Avatar from "../components/Avatar";
import { courses } from "../data/courses";
import userAvatar from "/assets/images/avatar.png";
import CourseFilters from "../components/Coursefilter";

function Berandalogin() {
  const displayCourses = [...courses, ...courses];
  const NavLinks = () => (
    <a href="#koleksi" className="text-gray-600 hover:text-primary py-2">
      Kategori
    </a>
  );

  return (
    <div className="bg-white">
      {/* Navbar untuk kondisi "Setelah Login" */}
      <Navbar
        desktopContent={
          <>
            <NavLinks />
            <Avatar src={userAvatar} alt="User Avatar" size="md" />
          </>
        }
        mobileMenu={<NavLinks />}
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

export default Berandalogin;
