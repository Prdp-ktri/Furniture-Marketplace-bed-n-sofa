import React from "react";
import { ChevronDown } from "lucide-react"; // Optional dropdown arrow
import { useNavigate } from "react-router-dom";

function BuyerHeader({}) {
  const navigate = useNavigate();

  const SignOut = (e) => {
    e.preventDefault();
    navigate("/buyerLogin");
  };

  return (
    <header className="bg-gradient-to-r from-orange-500 to-yellow-400 shadow-md">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo / Title */}
        <div className="text-white text-2xl font-bold tracking-wide">
          Buyer Portal
        </div>

        {/* Nav Links */}
        <nav className="flex space-x-8 text-white font-medium items-center">
          {/* Products Dropdown */}
          <div className="relative group">
            <button className="flex items-center space-x-1 hover:text-gray-200">
              <span>Products</span>
              <ChevronDown size={16} />
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity duration-200">
              <a
                href="#"
                className="block px-4 py-2 hover:bg-yellow-100 rounded-t-md"
              >
                Search Products
              </a>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-yellow-100 rounded-b-md"
              >
                View All Products
              </a>
            </div>
          </div>

          {/* Delivery Status Dropdown */}
          <div className="relative group">
            <button className="flex items-center space-x-1 hover:text-gray-200">
              <span>Delivery Status</span>
              <ChevronDown size={16} />
            </button>
            <div className="absolute left-0 mt-2 w-52 bg-white text-gray-800 rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity duration-200">
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
          </div>

          {/* Manage Profile Dropdown */}
          <div className="relative group">
            <button className="flex items-center space-x-1 hover:text-gray-200">
              <span>Manage Profile</span>
              <ChevronDown size={16} />
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity duration-200">
              <a
                href="#"
                className="block px-4 py-2 hover:bg-yellow-100 rounded-md"
              >
                Edit Profile
              </a>
            </div>
          </div>

          {/* Auth Buttons */}
          {
            <button
              onClick={SignOut}
              className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition"
            >
              Sign Out
            </button>
          }
        </nav>
      </div>
    </header>
  );
}

export default BuyerHeader;
