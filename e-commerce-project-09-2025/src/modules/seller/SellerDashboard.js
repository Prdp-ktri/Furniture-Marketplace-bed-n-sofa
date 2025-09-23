import React from "react";
import SellerHeader from "../../components/seller/SellerHeader";

function SellerDashboard() {
  return (
    <div>
      {/* Header */}
      <SellerHeader />

      {/* Main Content (with padding so it doesn't hide behind fixed header) */}
      <main className="pt-16 px-4">
        <h2 className="text-2xl font-semibold">Welcome to Seller Dashboard</h2>
        <p className="mt-4">Your dashboard content goes here.</p>
      </main>
    </div>
  );
}

export default SellerDashboard;
