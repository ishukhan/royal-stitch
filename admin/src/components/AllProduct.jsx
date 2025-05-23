import React, { useEffect, useState } from "react";
import { TbTrash } from "react-icons/tb";

const AllProduct = () => {
  const [allProduct, setAllProduct] = useState([]);
  const [message, setMessage] = useState("");
  const [confirmId, setConfirmId] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchInfo = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://royal-stitch.onrender.com/api/allProduct");
      const data = await res.json();
      setAllProduct(data.products || data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const removeProduct = async (id) => {
    try {
      const res = await fetch("https://royal-stitch.onrender.com/api/removeProduct", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      const result = await res.json();
      setMessage("✅ Product removed successfully.");
      setConfirmId(null);
      fetchInfo();

      setTimeout(() => setMessage(""), 3000);
    } catch (error) {
      console.error("Error removing product:", error);
      setMessage("❌ Error removing product.");
      setTimeout(() => setMessage(""), 3000);
    }
  };

  return (
    <div className="p-4 sm:p-6 bg-white rounded-xl shadow-md w-full mt-4 sm:m-7">
      <h4 className="text-2xl font-semibold text-gray-800 mb-6">🛍️ Product List</h4>

      {message && (
        <div className="text-sm font-medium text-green-700 bg-green-100 border border-green-300 px-4 py-2 mb-4 rounded-md shadow-sm">
          {message}
        </div>
      )}

      {/* Loading Spinner */}
      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : allProduct.length === 0 ? (
        <div className="text-center text-gray-500 py-12 text-lg">
          🚫 No products available.
        </div>
      ) : (
        <div className="overflow-x-auto max-h-[75vh] rounded-lg border">
          <table className="min-w-full text-sm text-left text-gray-700">
            <thead className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm uppercase">
              <tr>
                <th className="px-4 py-3">Product</th>
                <th className="px-4 py-3">Title</th>
                <th className="px-4 py-3">Old Price</th>
                <th className="px-4 py-3">New Price</th>
                <th className="px-4 py-3">Category</th>
                <th className="px-4 py-3">Remove</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {allProduct.map((product) => (
                <tr key={product.id} className="hover:bg-gray-10 transition-all">
                  <td className="px-4 py-3">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 rounded-lg object-cover border shadow"
                    />
                  </td>
                  <td className="px-4 py-3 max-w-sm truncate">{product.name}</td>
                  <td className="px-4 py-3 text-red-500 font-medium">
                    ₹{product.old_price}
                  </td>
                  <td className="px-4 py-3 text-green-600 font-semibold">
                    ₹{product.new_price}
                  </td>
                  <td className="px-4 py-3">{product.category}</td>
                  <td className="px-4 py-3">
                    {confirmId === product.id ? (
                      <div className="bg-gray-100 p-2 rounded-md shadow-sm flex flex-col gap-2 text-sm text-red-600">
                        <span>Confirm delete?</span>
                        <div className="flex gap-2">
                          <button
                            onClick={() => removeProduct(product.id)}
                            className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 text-xs"
                          >
                            Yes
                          </button>
                          <button
                            onClick={() => setConfirmId(null)}
                            className="px-3 py-1 bg-gray-300 rounded text-xs hover:bg-gray-400"
                          >
                            No
                          </button>
                        </div>
                      </div>
                    ) : (
                      <button
                        onClick={() => setConfirmId(product.id)}
                        className="text-xl text-red-500 hover:text-red-700 transition"
                        title="Remove"
                      >
                        <TbTrash />
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AllProduct;
