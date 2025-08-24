import Avatar from "../Avatar";
import useMediaQuery from "../../hooks/useMediaQuery";
import iconRating from "/assets/icon/icon-rating.png";

function CourseCard({ data, onClick }) {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const variant = isMobile ? "compact" : "normal";
  const isDiscount = data.originalPrice && data.price;

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

  // Tampilan Desktop
  if (variant === "normal") {
    return (
      <div onClick={onClick} className="cursor-pointer">
        <div className="bg-other-primary-background rounded-lg shadow-md overflow-hidden max-w-sm w-full transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          <img className="w-full h-48 object-cover" src={image} alt={title} />
          <div className="p-4">
            <h3 className="font-poppins text-lg font-bold text-text-dark-primary mb-2 truncate">
              {title}
            </h3>
            <p className="text-sm text-text-dark-secondary mb-4 h-10 overflow-hidden">
              {description}
            </p>
            <div className="flex items-center mb-4">
              <Avatar src={author.avatar} name={author.name} size="sm" />
              <div className="ml-3">
                <p className=" text-sm font-semibold">{author.name}</p>
                <p className=" text-xs text-text-dark-secondary">
                  {author.role}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  src={iconRating}
                  alt="rating"
                  className="w-auto h-4 mr-2"
                />
                <span className="text-sm text-text-dark-primary">
                  {rating} ({reviews})
                </span>
              </div>
              <div className="text-right">
                {isDiscount && (
                  <span className="text-sm text-gray-500 line-through mr-2">
                    Rp {originalPrice}
                  </span>
                )}
                <span className="font-poppins text-lg font-bold text-main-primary">
                  Rp {price}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Tampilan Mobile
  if (variant === "compact") {
    return (
      <div onClick={onClick} className="cursor-pointer">
        <div className="bg-other-primary-background rounded-lg shadow-md overflow-hidden flex items-center p-3 w-full max-w-sm">
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
                Rp {price}
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
