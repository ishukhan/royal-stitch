import { useState, useEffect } from "react";
import POPULAR from "../assets/popular";
import Item from "../components/Item";

const Popular = () => {
  const [popularProducts, setPopularProducts] = useState([]);
  useEffect(() => {
    const popularCollection = async () => {
      try {
        const response = await fetch(
          "https://royal-stitch.onrender.com/api/popularproduct"
        );
        const data = await response.json();
        if (Array.isArray(data.newProduct)) {
          setPopularProducts(data.newProduct);
        } else {
          setPopularProducts([]);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        setPopularProducts([]);
      }
    };
    popularCollection()
  },[]);
  return (
    <section className="bg-primary">
      <div className="max_padd_container py-12 xl:py-28 xl:w-[88%]">
        <h4 className="h3 text-center">Popular Designe</h4>
        <hr className="h-[3px] md:w-1/2 mx-auto bg-gradient-to-l from-transparent via-black to-transparent mb-16" />
        {/* container  */}
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
         {popularProducts.length > 0 ? (
            popularProducts.map((item) => (
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
            <div className="col-span-full text-center">
              <p>No products found.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Popular;
