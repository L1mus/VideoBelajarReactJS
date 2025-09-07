import Avatar from "../Avatar";
import Button from "../Button/Button";
import Chip from "../Button/Chip";
import iconBook from "/assets/icon/icon-book.png";
import iconClock from "/assets/icon/icon-clock.png";

const statusStyles = {
  Selesai: { variant: "success", style: "light" },
  "Sedang Berjalan": { variant: "secondary", style: "light" },
};

function MyCourseCard({ data }) {
  const {
    status,
    progressModules,
    totalModules,
    image,
    title,
    description,
    author,
    moduleCount,
    duration,
    progressPercent,
  } = data;

  const chipProps = statusStyles[status] || {};
  const isCompleted = status === "Selesai";

  return (
    <div className="bg-other-primary-background border border-other-border rounded-lg shadow-sm">
      <div className="p-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <p className="text-sm text-text-dark-secondary">
            {progressModules} / {totalModules} Modul Terselesaikan
          </p>
          <Chip variant={chipProps.variant} style={chipProps.style}>
            {status}
          </Chip>
        </div>

        {/* Body */}
        <div className="flex flex-col md:flex-row gap-5">
          <img
            src={image}
            alt={title}
            className="w-full md:w-40 h-40 object-cover rounded-md"
          />
          <div className="flex-grow">
            <h3 className="text-lg font-bold font-poppins text-text-dark-primary leading-tight">
              {title}
            </h3>
            <p className="text-sm text-text-dark-secondary my-2">
              {description}
            </p>
            <div className="flex items-center my-3">
              <Avatar src={author.avatar} name={author.name} size="sm" />
              <div className="ml-2">
                <p className="text-sm font-semibold text-text-dark-primary">
                  {author.name}
                </p>
                <p className="text-xs text-text-dark-secondary">
                  {author.role}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm text-text-dark-secondary">
              <div className="flex items-center gap-2">
                <img src={iconBook} alt="Modul" className="w-4 h-4" />
                <span>{moduleCount} Modul</span>
              </div>
              <div className="flex items-center gap-2">
                <img src={iconClock} alt="Durasi" className="w-4 h-4" />
                <span>{duration} Menit</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-other-border p-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div
          className={`w-full ${
            isCompleted ? "md:w-1/2" : "md:w-2/3"
          } flex items-center gap-3`}
        >
          <p className="text-sm text-text-dark-secondary whitespace-nowrap">
            Progres Kelas:{" "}
            <span className="text-sm font-semibold text-text-dark-primary">
              {progressPercent}%
            </span>
          </p>
          <p></p>
          <div className="w-full bg-red-200 rounded-full h-2">
            <div
              className="bg-red-500 h-2 rounded-full"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
        </div>

        <div className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
          {status === "Selesai" ? (
            <>
              <Button variant="primary1">Unduh Sertifikat</Button>
              <Button variant="primary">Lihat Detail Kelas</Button>
            </>
          ) : (
            <Button variant="primary">Lanjutkan Pembelajaran</Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default MyCourseCard;
