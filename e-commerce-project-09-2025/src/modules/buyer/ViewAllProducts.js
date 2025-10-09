import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ViewAllProducts() {
  const [allLatchedProducts, setAllLatchedProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const allKeys = Object.keys(localStorage);
    const allProducts = [];

    allKeys.forEach((key) => {
      if (key.startsWith("latchedProducts_")) {
        const stored = localStorage.getItem(key);
        if (stored) {
          try {
            const parsed = JSON.parse(stored);

            const sellerEmail = key.replace("latchedProducts_", "");
            parsed.forEach((p) => {
              allProducts.push({ ...p, sellerEmail });
            });
          } catch (error) {
            console.error("Error parsing latched products for key:", key);
          }
        }
      }
    });
    setAllLatchedProducts(allProducts);
  }, []);

  const handleViewDetails = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold text-teal-700 mb-4">
        All Latched Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {allLatchedProducts.map((product, index) => (
          <div
            key={index}
            onClick={() => handleViewDetails(product.id)}
            className="cursor-pointer bg-white rounded-2xl shadow-lg p-4 hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center"
          >
            <img
              src={product.productImages}
              alt={product.productName}
              className="w-40 h-40 object-cover rounded-md mb-3"
            />
            <h3 className="text-lg font-semibold">{product.productName}</h3>
            <p className="text-sm text-gray-500">₹{product.price}</p>
            <p className="text-xs text-gray-500">
              Seller: {product.sellerEmail}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewAllProducts;
