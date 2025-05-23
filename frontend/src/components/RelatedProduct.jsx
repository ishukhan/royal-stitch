import { useEffect, useState } from "react";
import POPULAR from "../assets/popular";
import Item from "./Item";

const RelatedProduct = () => {
  const [relatedCategory, setRelatedCategory] = useState([]);

  useEffect(() => {
    const fetchCollection = async () => {
      try {
        const response = await fetch(
          "https://royal-stitch.onrender.com/api/relatedproduct"
        );
        const data = await response.json();
        if (Array.isArray(data.relatedProducts)) {
          setRelatedCategory(data.relatedProducts);
        } else {
          setRelatedCategory([]);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        setRelatedCategory([]);
      }
    };
    fetchCollection();
  }, []);

  return (
    <section className="bg-primary">
      <div className="max-w-screen-xl mx-auto px-4 py-12 xl:py-28">
        <h4 className="text-2xl md:text-3xl font-bold text-center">
          Related Designs
        </h4>
        <hr className="h-[2px] w-3/4 md:w-1/2 mx-auto bg-gradient-to-l from-transparent via-black to-transparent my-6 md:my-8" />

        {/* Responsive Grid Container */}
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {relatedCategory.length > 0 ? (
            relatedCategory.map((item) => (
              <Item
                key={item.id}
                id={item.id}
                image={item.image}
                name={item.name}
                description={item.description}
                old_price={item.old_price}
                new_price={item.new_price}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-8">
              <p className="text-gray-600">No products found.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default RelatedProduct;
