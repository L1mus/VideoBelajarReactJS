import Chip from "../Button/Chip";

import iconUjian from "/assets/icon/icon-checktask.png";
import iconVideo from "/assets/icon/icon-video.png";
import iconDokumen from "/assets/icon/icon-notebook.png";
import iconSertifikat from "/assets/icon/icon-certificate.png";
import iconPretest from "/assets/icon/icon-edittask.png";
import iconWorld from "/assets/icon/icon-world.png";
import courseImage from "/assets/images/cover1.png";

const OrderSummaryCard = () => {
  const formatPriceK = (value) => `Rp ${value / 1000}K`;

  const course = {
    title:
      "Gapai Karier Impianmu sebagai Seorang UI/UX Designer & Product Manager.",
    price: 250000,
    originalPrice: 500000,
    includes: [
      { icon: iconUjian, text: "Ujian Akhir" },
      { icon: iconVideo, text: "49 Video" },
      { icon: iconDokumen, text: "7 Dokumen" },
      { icon: iconSertifikat, text: "Sertifikat" },
      { icon: iconPretest, text: "Pretest" },
    ],
    language: { icon: iconWorld, text: "Bahasa Indonesia" },
  };

  const discount = Math.round(
    ((course.originalPrice - course.price) / course.originalPrice) * 100
  );

  return (
    <div className="bg-other-primary-background rounded-lg shadow-md p-5">
      <img
        src={courseImage}
        alt="Course"
        className="hidden sm:block w-full h-40 object-cover rounded-md mb-4"
      />
      <h3 className="font-bold text-text-dark-primary leading-tight mb-2">
        {course.title}
      </h3>
      <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1 mb-4">
        <div className="flex flex-wrap items-center gap-x-3">
          <span className="text-xl font-bold text-main-primary">
            {formatPriceK(course.price)}
          </span>
          <span className="text-text-light-disabled line-through">
            {formatPriceK(course.originalPrice)}
          </span>
        </div>
        <Chip variant="secondary" style="solid">
          Diskon {discount}%
        </Chip>
      </div>
      <hr className="my-4" />
      <h4 className="font-bold mb-3">Kelas Ini Sudah Termasuk</h4>
      <div className="grid grid-cols-2 gap-y-2 text-sm text-text-dark-secondary">
        {course.includes.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <img src={item.icon} alt="" className="w-4 h-4" /> {item.text}
          </div>
        ))}
      </div>
      <hr className="my-4" />
      <h4 className="font-bold mb-2">Bahasa Pengantar</h4>
      <div className="flex items-center gap-2 text-sm text-text-dark-secondary">
        <img src={course.language.icon} alt="" className="w-4 h-4" />
        {course.language.text}
      </div>
    </div>
  );
};

export default OrderSummaryCard;
