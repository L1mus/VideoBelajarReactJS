// src/data/courses.js

// Kita impor semua aset di sini agar terpusat
import coverImage1 from "/assets/images/cover1.png";
import coverImage2 from "/assets/images/cover2.png";
import coverImage3 from "/assets/images/cover3.png";

import authorAvatar1 from "/assets/images/avatar1.png";
import authorAvatar2 from "/assets/images/avatar2.png";
import authorAvatar3 from "/assets/images/avatar3.png";

export const courses = [
  {
    id: 1,
    image: coverImage1,
    title: "Digital Marketing Mastery",
    description:
      "Pelajari strategi pemasaran digital dari dasar hingga mahir bersama praktisi terbaik.",
    author: {
      // Data ini akan diteruskan ke komponen Avatar
      avatar: authorAvatar1,
      name: "Budi Siregar",
      role: "Digital Marketer @ Gojek",
    },
    rating: 4.8,
    reviews: 102,
    price: "250K",
  },
  {
    id: 2,
    image: coverImage2,
    title: "UI/UX Design for Beginners",
    description:
      "Mulai karir sebagai UI/UX Designer dengan kurikulum yang fokus pada portofolio.",
    author: {
      avatar: authorAvatar2,
      name: "Siti Aminah",
      role: "Product Designer @ Tokopedia",
    },
    rating: 4.9,
    reviews: 230,
    price: "280K",
  },
  {
    id: 3,
    image: coverImage3,
    title: "Financial Planning 101",
    description:
      "Kelola keuangan pribadimu dengan cerdas untuk masa depan yang lebih baik.",
    author: {
      avatar: authorAvatar3,
      name: "Charlie",
      role: "Financial Planner",
    },
    rating: 4.7,
    reviews: 95,
    price: "180K",
    originalPrice: "300K", // Data untuk diskon
  },
  // Anda bisa tambahkan data kursus lainnya di sini
];
