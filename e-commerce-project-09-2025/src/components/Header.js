import React, { useState } from "react";

function Header() {
  const [isProductsOpen, setProductsOpen] = useState(false);
  const [isProfilesOpen, setProfilesOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <header className="bg-gray-800 text-white shadow-md">
      <nav className="container mx-auto flex justify-between items-center p-4">
        {/* Left side menu */}
        <ul className="flex space-x-6">
          {/* Products Dropdown */}
          <li className="relative">
            <button
              onClick={() => setProductsOpen(!isProductsOpen)}
              className="hover:text-gray-300"
            >
              Products
            </button>
            {isProductsOpen && (
              <ul className="absolute bg-white text-black mt-2 rounded shadow-lg w-40">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Add Product
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Manage Products
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  View Products
                </li>
              </ul>
            )}
          </li>

          {/* Profiles Dropdown */}
          <li className="relative">
            <button
              onClick={() => setProfilesOpen(!isProfilesOpen)}
              className="hover:text-gray-300"
            >
              Profiles
            </button>
            {isProfilesOpen && (
              <ul className="absolute bg-white text-black mt-2 rounded shadow-lg w-40">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Seller
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Customer
                </li>
              </ul>
            )}
          </li>

          {/* Manage Profile */}
          <li>
            <button className="hover:text-gray-300">Manage Profile</button>
          </li>
        </ul>

        {/* Right side login/logout */}
        <div>
          <button
            onClick={() => setIsLoggedIn(!isLoggedIn)}
            className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-500"
          >
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
