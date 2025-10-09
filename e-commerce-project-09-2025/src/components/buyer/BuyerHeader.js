import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

function BuyerHeader() {
  const navigate = useNavigate();
  const [openDropdown, setOpenDropdown] = useState(null); // Track which dropdown is open

  const handleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const SignOut = (e) => {
    e.preventDefault();
    navigate("/buyerLogin");
  };

  const ViewAllProducts = (e) => {
    e.preventDefault();
    navigate("/viewAllProducts");
  };

  return (
    <header className="bg-gradient-to-r from-orange-500 to-yellow-400 shadow-md relative z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo / Title */}
        <div className="text-white text-2xl font-bold tracking-wide">
          Buyer Portal
        </div>

        {/* Nav Links */}
        <nav className="flex space-x-8 text-white font-medium items-center relative">
          {/* Products Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown("products")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button className="flex items-center space-x-1 hover:text-gray-200 focus:outline-none">
              <span>Products</span>
              <ChevronDown size={16} />
            </button>
            {openDropdown === "products" && (
              <div className="absolute left-0 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg transition-all duration-200">
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-yellow-100 rounded-t-md"
                >
                  Search Products
                </a>
                <button
                  onClick={ViewAllProducts}
                  className="block w-full text-left px-4 py-2 hover:bg-yellow-100 rounded-b-md"
                >
                  View All Products
                </button>
              </div>
            )}
          </div>

          {/* Delivery Status Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown("delivery")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button className="flex items-center space-x-1 hover:text-gray-200 focus:outline-none">
              <span>Delivery Status</span>
              <ChevronDown size={16} />
            </button>
            {openDropdown === "delivery" && (
              <div className="absolute left-0 mt-2 w-52 bg-white text-gray-800 rounded-md shadow-lg transition-all duration-200">
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-yellow-100 rounded-t-md"
                >
                  Track Your Order
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-yellow-100 rounded-b-md"
                >
                  Delivered Orders
                </a>
              </div>
            )}
          </div>

          {/* Manage Profile Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown("profile")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button className="flex items-center space-x-1 hover:text-gray-200 focus:outline-none">
              <span>Manage Profile</span>
              <ChevronDown size={16} />
            </button>
            {openDropdown === "profile" && (
              <div className="absolute left-0 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg transition-all duration-200">
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-yellow-100 rounded-md"
                >
                  Edit Profile
                </a>
              </div>
            )}
          </div>

          {/* Sign Out Button */}
          <button
            onClick={SignOut}
            className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition"
          >
            Sign Out
          </button>
        </nav>
      </div>
    </header>
  );
}

export default BuyerHeader;
