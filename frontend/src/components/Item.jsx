import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Item = ({ id, name, image, old_price, new_price, description, images }) => {
  // Ensure images is always an array (fallback to an empty array if undefined)
  const imageArray = Array.isArray(images) ? images : [];

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Link
      to={`/product/${id}`}
      onClick={handleClick}
      className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white block"
    >
      <div className="relative flexCenter group overflow-hidden transition-all duration-150">
        <div className="h-12 w-12 bg-white rounded-full flexCenter absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 scale-0 group-hover:scale-100 transition-transform duration-500 shadow-md">
          <FaSearch className="text-gray-700 scale-125 hover:rotate-90 transition-transform duration-300" />
        </div>
        {/* Use the first image in the array or fallback to 'image' prop */}
        <img
          src={imageArray[0] || image} // Ensure imageArray has at least one item or fallback to 'image' prop
          alt="ProductImg"
          className="w-full block object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>
      <div className="p-4 overflow-hidden">
        <h4 className="my-1 text-base font-medium text-gray-800 line-clamp-2 capitalize">{name}</h4>
        {/* Description */}
        <p className="text-sm text-gray-600 max-h-10 overflow-hidden">{description}</p>
        <div className="flex gap-4 items-center mt-2">
          <div className="text-sm text-gray-400 line-through">₹{old_price}.00</div>
          <div className="text-lg font-semibold text-green-600">₹{new_price}.00</div>
        </div>
        {/* Render additional images (optional)
        {imageArray.length > 1 && (
          <div className="mt-4 flex gap-2">
            {imageArray.slice(1).map((img, index) => (
              <img key={index} src={img} alt={`ProductImg-${index}`} className="w-12 h-12 object-cover rounded-md" />
            ))}
          </div>
        )} */}
      </div>
    </Link>
  );
};

export default Item;
