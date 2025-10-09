import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  const [sellers, setSellers] = useState([]);
  const [productInfo, setProductInfo] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const allKeys = Object.keys(localStorage);
    const matchingSellers = [];

    allKeys.forEach((key) => {
      if (key.startsWith("latchedProducts_")) {
        const stored = localStorage.getItem(key);
        if (stored) {
          const parsed = JSON.parse(stored);
          const sellerEmail = key.replace("latchedProducts_", "");

          parsed.forEach((p) => {
            if (String(p.id) && p.id === String(id)) {
              matchingSellers.push({ ...p, sellerEmail });
            }
          });
        }
      }
    });

    setSellers(matchingSellers);
    if (matchingSellers.length > 0) {
      setProductInfo(matchingSellers[0]); // Use first match for general info
    }
  }, [id]);

  if (!productInfo) {
    return (
      <div className="p-6 text-center">
        <p className="text-gray-600">No details found for this product.</p>
        <button
          onClick={() => navigate(-1)}
          className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="p-6">
      {/* Product Details */}
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <img
          src={productInfo.productImages}
          alt={productInfo.productName}
          className="w-80 h-80 object-cover rounded-xl shadow-lg"
        />
        <div>
          <h2 className="text-2xl font-bold text-teal-700 mb-2">
            {productInfo.productName}
          </h2>
          <p className="text-gray-700">{productInfo.brandName}</p>
          <p className="text-gray-500">{productInfo.productCategory}</p>
          <p className="mt-2 text-gray-600">
            <b>Product ID:</b> {productInfo.id}
          </p>
        </div>
      </div>

      {/* Sellers Section */}
      <div>
        <h3 className="text-xl font-semibold text-teal-700 mb-4">
          Sellers Offering This Product
        </h3>
        {sellers.length === 0 ? (
          <p>No sellers found for this product.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {sellers.map((seller, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center text-center hover:shadow-lg transition"
              >
                <p className="font-bold text-gray-800">
                  Store: {seller.storeName}
                </p>
                <p className="font-semibold text-gray-600">
                  Email: {seller.email}
                </p>
                <p className="text-gray-600 mt-1">
                  Quantity: {seller.quantity}
                </p>
                <p className="text-teal-700 font-bold text-lg mt-1">
                  ₹{seller.price}
                </p>
                <button className="mt-3 bg-orange-500 text-white py-1 px-3 rounded-md hover:bg-orange-600">
                  Buy from this Seller
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductDetails;
