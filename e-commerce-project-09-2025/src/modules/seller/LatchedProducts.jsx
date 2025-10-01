import React from "react";

function LatchedProducts({ latchedProducts = [] }) {
  if (!latchedProducts || latchedProducts.length === 0) {
    return (
      <div className="p-6">
        <h2 className="text-xl font-bold text-teal-700 mb-4">
          My Latched Products
        </h2>
        <p className="text-gray-600">No Products latched yet.</p>
      </div>
    );
  }
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold text-teal-700 mb-4">
        My Latched Products
      </h2>
      <table className="w-full border-collapse shadow-md">
        <thead>
          <tr className="bg-teal-500 text-white">
            <th className="p-2">Product</th>
            <th className="p-2">Quantity</th>
            <th className="p-2">Price</th>
          </tr>
        </thead>
        <tbody>
          {latchedProducts.map((p, index) => (
            <tr key={index} className="odd:bg-gray-100 even:bg-white">
              <td className="p-2">{p.productName}</td>
              <td className="p-2">{p.quantity}</td>
              <td className="p-2">{p.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LatchedProducts;
