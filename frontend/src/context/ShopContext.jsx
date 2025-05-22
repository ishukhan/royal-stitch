// src/context/ShopContext.jsx
import { createContext, useState, useEffect } from 'react';

export const ShopContext = createContext(null);

export const ShopContextProvider = ({ children }) => {
  const [all_products, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/allProduct');
        const data = await response.json();

        // Use data.products if the API wraps data
        const products = Array.isArray(data) ? data : data.products;
        setAllProducts(Array.isArray(products) ? products : []);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError(err.message || "Something went wrong");
        setAllProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <ShopContext.Provider value={{ all_products, loading, error }}>
      {children}
    </ShopContext.Provider>
  );
};
