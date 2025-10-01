import React, { useEffect, useState } from "react";
// import SellerHeader from "../../components/seller/SellerHeader";

function SellerDashboard() {
  const [seller, setSeller] = useState(null);

  useEffect(() => {
    const storedSeller = JSON.parse(localStorage.getItem("loggedInSeller"));
    if (storedSeller) {
      setSeller(storedSeller);
    }
  }, []);

  if (!seller) {
    return <p>Loading seller details...</p>;
  }

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
      </div>
    </div>
  );
}

export default SellerDashboard;
