import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CourseFilters from "../components/Coursefilter";
import CourseCard from "../components/Card/CourseCard";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Button from "../components/Button/Button";
import Avatar from "../components/Avatar";
import { courses } from "../data/courses";
import userAvatar from "/assets/images/avatar.png";

function Beranda({ isLoggedIn, onNavigate }) {
  const displayCourses = [...courses, ...courses];

  // 2. Ubah <a> menjadi <button> dan panggil onNavigate saat diklik
  const NavLinks = () => (
    <button
      onClick={() => onNavigate("semuaproduk")}
      className="text-gray-600 hover:text-primary py-2"
    >
      Kategori
    </button>
  );

  return (
    <div className="bg-white">
      <Navbar
        desktopContent={
          isLoggedIn ? (
            <>
              <NavLinks />
              <Avatar src={userAvatar} alt="User Avatar" size="md" />
            </>
          ) : (
            <>
              <NavLinks />
              <div className="flex items-center space-x-2">
                {/* Tombol Login dan Register juga perlu fungsi navigasi */}
                <Button variant="primary" onClick={() => onNavigate("login")}>
                  Login
                </Button>
                <Button
                  variant="primary-outline"
                  onClick={() => onNavigate("register")}
                >
                  Register
                </Button>
              </div>
            </>
          )
        }
        mobileMenu={
          isLoggedIn ? (
            <NavLinks />
          ) : (
            <>
              <NavLinks />
              <div className="pt-2 space-y-2">
                <Button
                  variant="primary"
                  className="w-full"
                  onClick={() => onNavigate("login")}
                >
                  Login
                </Button>
                <Button
                  variant="primary-outline"
                  className="w-full"
                  onClick={() => onNavigate("register")}
                >
                  Register
                </Button>
              </div>
            </>
          )
        }
      />

      <main className="container mx-auto px-6 py-10 space-y-16">
        <Hero />
        <CourseFilters />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 -mt-8">
          {displayCourses.map((course, index) => (
            <CourseCard key={`${course.id}-${index}`} data={course} />
          ))}
        </div>
        <Newsletter />
      </main>

      <Footer />
    </div>
  );
}

export default Beranda;
