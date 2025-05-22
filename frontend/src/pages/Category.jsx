import React, { useContext } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import Item from '../components/Item';
import { ShopContext } from "../context/ShopContext.jsx";

const Category = ({ banner, category }) => {
  const { all_products, loading, error } = useContext(ShopContext);

  if (loading) return <div className="text-center py-20">Loading products...</div>;
  if (error) return <div className="text-center py-20 text-red-600">Error: {error}</div>;

  if (!Array.isArray(all_products)) {
    return <div className="text-center py-20 text-red-600">Invalid product data.</div>;
  }

  const filteredProducts = all_products.filter(item =>
    item?.category?.trim().toLowerCase() === category?.trim().toLowerCase()
  );

  return (
    <section className='max_padd_container py-12 xl:py-28'>
      <div>
        <img src={banner} alt="Category banner" className='block my-7 mx-auto w-full h-auto rounded-xl' />

        <div className='flex flex-col md:flex-row justify-between items-center my-8 mx-2'>
          <h5 className="text-lg md:text-xl font-semibold">
            <span className='font-bold'>Showing 1-{filteredProducts.length}</span> out of {filteredProducts.length}
          </h5>
          <div className='flex items-center justify-center max-sm:p-4 gap-x-4 px-8 py-4 rounded-5xl ring-1 ring-slate-900/15 mt-4 md:mt-0'>
            <span className='text-sm md:text-base'>Sort by</span>
            <MdOutlineKeyboardArrowDown />
          </div>
        </div>

        <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item) => (
              <Item key={item.id} {...item} />
            ))
          ) : (
            <div className="col-span-full text-center">
              <p className="text-lg">No products found in "{category}".</p>
              <p className="text-sm text-gray-600 mt-2">Available categories: {
                [...new Set(all_products.map(p => p.category))].join(", ")
              }</p>
            </div>
          )}
        </div>

        {filteredProducts.length > 10 && (
          <div className='mt-16 text-center'>
            <button className='btn_dark_rounded py-3 px-6 text-lg md:text-xl'>
              Load more
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Category;
