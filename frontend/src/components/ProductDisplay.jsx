import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa6";
import WhatsAppButton from "./WhatsAppButton";
import { MdCall } from "react-icons/md";

const ProductDisplay = ({ product }) => {
  const randomRating = (Math.random() * 4 + 1).toFixed(1); // Random number between 1 and 5
  const [mainImage, setMainImage] = useState(product.image);

  useEffect(() => {
    setMainImage(product.image);
  }, [product.image]);

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-10 bg-white rounded-xl shadow-sm">
      <div className="flex flex-col xl:flex-row gap-10">
        {/* Left Side */}
        <div className="flex flex-col sm:flex-row gap-4 xl:gap-8 flex-1">
          {/* Thumbnails */}
          <div className="flex sm:flex-col gap-3 sm:min-w-[100px] justify-center items-center xl:items-start">
            {[product.image, ...(product.images || [])]
              .slice(0, 4)
              .map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Product thumbnail ${idx + 1}`}
                  className={`h-[70px] w-[70px] sm:h-[80px] sm:w-[80px] md:h-[99px] md:w-[99px] object-cover rounded-md border ${
                    mainImage === img ? "border-gray-800" : "border-gray-200"
                  } hover:scale-105 transition-transform duration-300 cursor-pointer`}
                  onClick={() => setMainImage(img)}
                />
              ))}
          </div>

          {/* Main Image */}
          <div className="flex-1 flex justify-center items-center">
            <div className="w-full max-w-[500px] aspect-[4/3] bg-gray-50 rounded-md overflow-hidden">
              <img
                src={mainImage}
                alt="Main product"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col flex-1 gap-4">
          <h3 className="text-2xl font-semibold capitalize text-gray-800">
            {product.name}
          </h3>

          {/* Ratings */}
          <div className="flex items-center gap-2 text-yellow-500 text-lg">
            {[...Array(Math.floor(randomRating))].map((_, i) => (
              <FaStar key={i} />
            ))}
            {[...Array(5 - Math.floor(randomRating))].map((_, i) => (
              <FaStar
                key={i + Math.floor(randomRating)}
                className="text-gray-300"
              />
            ))}
            <p className="text-gray-500 text-sm ml-1">({randomRating})</p>
          </div>

          {/* Prices */}
          <div className="flex gap-4 items-center text-lg my-2">
            <span className="line-through text-gray-400">
              ₹{product.old_price}.00
            </span>
            <span className="text-green-600 font-semibold">
              ₹{product.new_price}.00
            </span>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-2">
              Description
            </h4>
            <p className="text-gray-600 leading-relaxed text-sm">
              {product.description}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3 max-w-md mt-4">
            <WhatsAppButton
              product={product}
              className="bg-gray-800 text-white hover:bg-gray-700 rounded-md uppercase text-sm tracking-wider py-3 transition text-center flex justify-center items-center"
            />
            <a
              href="tel:+9197667049362"
              className="bg-gray-800 text-white hover:bg-gray-700 rounded-md uppercase text-sm tracking-wider py-3 transition text-center flex justify-center items-center gap-2"
            >
              <MdCall className="text-2xl" />
              <span className="text-sm">Call to Order</span>
            </a>
          </div>

          {/* Category & Tags */}
          <div className="pt-2 text-sm text-gray-600">
            <p>
              <span className="font-semibold text-gray-700">Category:</span>{" "}
              {product.category}
            </p>
            <p>
              <span className="font-semibold text-gray-700">Tags:</span> Modern
              | Latest
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDisplay;
