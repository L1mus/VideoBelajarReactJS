import Avatar from "../Avatar";
import useMediaQuery from "../../hooks/useMediaQuery";
import iconRating from "/assets/icon/icon-rating.png";

function CourseCard({ data, onClick }) {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const variant = isMobile ? "compact" : "normal";

  const {
    image,
    title,
    description,
    author,
    rating,
    reviews,
    price,
    originalPrice,
  } = data;

  const isDiscount = originalPrice && price;

  const formatPrice = (value) => {
    if (value === 0) return "Gratis";
    return `Rp ${value / 1000}K`;
  };

  if (variant === "normal") {
    return (
      <div
        onClick={onClick}
        className="cursor-pointer bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col"
      >
        <img className="w-full h-48 object-cover" src={image} alt={title} />
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="font-poppins text-lg font-bold text-text-dark-primary mb-2 truncate">
            {title}
          </h3>
          <p className="text-sm text-text-dark-secondary mb-4 h-10 overflow-hidden">
            {description}
          </p>
          <div className="flex items-center mb-4 mt-auto">
            <Avatar src={author.avatar} name={author.name} size="sm" />
            <div className="ml-3">
              <p className="text-sm font-semibold">{author.name}</p>
              <p className="text-xs text-text-dark-secondary">{author.role}</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img src={iconRating} alt="rating" className="w-auto h-4 mr-2" />
              <span className="text-sm text-text-dark-primary">
                {rating} ({reviews})
              </span>
            </div>
            <div className="text-right">
              {isDiscount && (
                <span className="text-sm text-gray-500 line-through mr-2">
                  {formatPrice(originalPrice)}
                </span>
              )}
              <span className="font-poppins text-lg font-bold text-main-primary">
                {formatPrice(price)}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <div onClick={onClick} className="cursor-pointer">
        <div className="bg-white rounded-lg shadow-md overflow-hidden flex items-center p-3 w-full">
          <img
            className="w-20 h-20 object-cover rounded-md"
            src={image}
            alt={title}
          />
          <div className="ml-4 flex-grow min-w-0">
            <h3 className="font-poppins text-base font-bold text-text-dark-primary truncate">
              {title}
            </h3>
            <div className="flex items-center my-1">
              <Avatar
                src={author.avatar}
                name={author.name}
                size="sm"
                className="w-6 h-6"
              />
              <div className="ml-2">
                <p className="text-xs font-semibold">{author.name}</p>
                <p className="text-xs text-text-dark-secondary">
                  {author.role}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center">
                <img
                  src={iconRating}
                  alt="rating"
                  className="w-auto h-3 mr-1"
                />
                <span className="text-xs text-text-dark-primary">
                  {rating} ({reviews})
                </span>
              </div>
              <span className="font-poppins text-base font-bold text-main-primary">
                {formatPrice(price)}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

export default CourseCard;
