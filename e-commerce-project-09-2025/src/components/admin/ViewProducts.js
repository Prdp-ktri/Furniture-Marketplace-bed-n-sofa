import { Link } from "react-router-dom"; // <-- use react-router-dom Link, not lucide-react
import React, { useEffect, useState } from "react";

function ViewProducts() {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9000/products")
      .then((res) => res.json())
      .then((data) => {
        setDetails(data);
      });
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-green-300 to-teal-300 flex items-start justify-center p-6">
      <div className="w-full max-w-7xl bg-white shadow-lg rounded-2xl p-4 overflow-x-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Product List
        </h1>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-teal-500 text-white text-left">
              <th className="p-3 text-sm md:text-base">ID</th>
              <th className="p-3 text-sm md:text-base">Product Name</th>
              <th className="p-3 text-sm md:text-base">Brand</th>
              <th className="p-3 text-sm md:text-base">Category</th>
              <th className="p-3 text-sm md:text-base">Description</th>
              <th className="p-3 text-sm md:text-base">Image</th>
              <th className="p-3 text-sm md:text-base">Size</th>
              <th className="p-3 text-sm md:text-base">MRP</th>
              <th className="p-3 text-sm md:text-base">Actions</th>
            </tr>
          </thead>
          <tbody>
            {details && details.length > 0 ? (
              details.map((v) => (
                <tr
                  key={v.id}
                  className="odd:bg-gray-50 even:bg-gray-100 hover:bg-teal-100 transition-colors"
                >
                  <td className="p-3 text-gray-700 text-sm md:text-base">
                    {v.id}
                  </td>
                  <td className="p-3 font-medium text-gray-800 text-sm md:text-base">
                    {v.productName}
                  </td>
                  <td className="p-3 text-gray-700 text-sm md:text-base">
                    {v.brandName}
                  </td>
                  <td className="p-3 text-gray-700 text-sm md:text-base">
                    {v.productCat}
                  </td>
                  <td className="p-3 text-gray-600 text-sm md:text-base whitespace-pre-wrap">
                    {v.productDesc}
                  </td>
                  <td className="p-3">
                    {v.productImgs.map((img, index) => (
                      <img
                      key={index}
                        src={img}
                        alt={`${v.productName}-{i}`}
                        className="w-16 h-16 object-cover rounded-lg shadow-sm border"
                      />
                    ))}
                  </td>
                  <td className="p-3 text-gray-700 text-sm md:text-base">
                    {v.productSize}
                  </td>
                  <td className="p-3 text-gray-700 font-semibold text-sm md:text-base">
                    ₹{v.mrp}
                  </td>
                  <td className="p-3">
                    <Link
                      to={"/editProducts/" + v.id}
                      className="text-teal-600 hover:text-teal-800 font-medium text-xs md:text-base bg-green-950 rounded-full"
                    > 
                      Edit Details
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="9"
                  className="text-center text-gray-600 py-6 text-sm md:text-base"
                >
                  No products available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewProducts;
