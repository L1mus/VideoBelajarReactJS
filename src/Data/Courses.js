import coverImage1 from "/assets/images/cover1.png";
import coverImage2 from "/assets/images/cover2.png";
import coverImage3 from "/assets/images/cover3.png";
import coverImage4 from "/assets/images/cover4.png";
import coverImage5 from "/assets/images/cover5.png";
import coverImage6 from "/assets/images/cover6.png";

import authorAvatar1 from "/assets/images/avatar1.png";
import authorAvatar2 from "/assets/images/avatar2.png";
import authorAvatar3 from "/assets/images/avatar3.png";
import authorAvatar4 from "/assets/images/avatar4.png";
import authorAvatar5 from "/assets/images/avatar5.png";
import authorAvatar6 from "/assets/images/avatar6.png";

export const courses = [
  {
    id: 1,
    image: coverImage1,
    title: "Big 4 Auditor Financial Analyst",
    description:
      "Mulai transformasi dengan instruktur profesional, harga terjangkau...",
    author: {
      avatar: authorAvatar1,
      name: "Jenna Ortega",
      role: "Senior Accountant",
    },
    rating: 3.5,
    reviews: 86,
    price: 300000,
    category: "Bisnis",
    duration: 5,
  },
  {
    id: 2,
    image: coverImage2,
    title: "Digital Marketing Strategy",
    description:
      "Pelajari strategi pemasaran digital terbaru dari para ahli di industri.",
    author: {
      avatar: authorAvatar2,
      name: "Mark Johnson",
      role: "Digital Marketer",
    },
    rating: 4.8,
    reviews: 150,
    price: 100000,
    originalPrice: 500000,
    category: "Pemasaran",
    duration: 10,
  },
  {
    id: 3,
    image: coverImage3,
    title: "Web Development Bootcamp",
    description:
      "Kuasai web development dari dasar hingga mahir dalam bootcamp ini.",
    author: {
      avatar: authorAvatar3,
      name: "Alex Lee",
      role: "Full-Stack Developer",
    },
    rating: 4.9,
    reviews: 230,
    price: 300000,
    category: "Digital & Teknologi",
    duration: 3,
  },
  {
    id: 4,
    image: coverImage4,
    title: "Public Speaking Mastery",
    description:
      "Tingkatkan kepercayaan diri dan kemampuan berbicaramu di depan umum.",
    author: {
      avatar: authorAvatar4,
      name: "Sarah Chen",
      role: "Communication Coach",
    },
    rating: 4.7,
    reviews: 95,
    price: 100000,
    originalPrice: 500000,
    category: "Pengembangan Diri",
    duration: 6,
  },
  {
    id: 5,
    image: coverImage5,
    title: "Advanced UI/UX Design",
    description:
      "Dalam kursus ini, Anda akan mempelajari prinsip-prinsip desain UI/UX.",
    author: {
      avatar: authorAvatar5,
      name: "David Kim",
      role: "Senior UI/UX Designer",
    },
    rating: 4.6,
    reviews: 180,
    price: 300000,
    category: "Desain",
    duration: 12,
  },
  {
    id: 6,
    image: coverImage6,
    title: "Startup Business Management",
    description:
      "Pelajari cara membangun dan mengelola bisnis startup dari awal.",
    author: {
      avatar: authorAvatar6,
      name: "Emily White",
      role: "Entrepreneur",
    },
    rating: 4.8,
    reviews: 210,
    price: 100000,
    originalPrice: 500000,
    category: "Bisnis",
    duration: 7,
  },
];
