import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import SellerHeader from "../../components/seller/SellerHeader";

function SellerDashboard() {
  const [seller, setSeller] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedSeller = JSON.parse(localStorage.getItem("loggedInSeller"));
    if (storedSeller) {
      setSeller(storedSeller);
    }
  }, []);

  if (!seller) {
    return <p>Loading seller details...</p>;
  }

  const AllLatchableProducts = (e) => {
    e.preventDefault();
    navigate("/allLatchableProducts");
  };

  const LatchedProducts = (e) => {
    e.preventDefault();
    navigate("/latchedProducts");
  };

  return (
    <div>
      {/* Header */}
      {/* <SellerHeader /> */}

      {/* Main Content (with padding so it doesn't hide behind fixed header) */}
      <div className="pt-16 px-4">
        <h1>
          Welcome, {seller.name} ({seller.storeName})
        </h1>
        <p>Email: {seller.email}</p>
        <p>GST No.: {seller.gst}</p>
        <p>Trademark: {seller.trademark}</p>
        <p>Address: {seller.address}</p>

        <div className="mt-6 space-x-4">
          <button
            onClick={AllLatchableProducts}
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
          >
            View All Latchable Products
          </button>
          <button
            onClick={LatchedProducts}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            View My Latched Products
          </button>
        </div>
      </div>
    </div>
  );
}

export default SellerDashboard;
