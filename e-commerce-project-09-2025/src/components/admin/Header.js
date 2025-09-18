import { Menu, X } from "lucide-react";
import React, { useContext, useState } from "react";
import { AdminLoginContext } from "../../App";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const [isProductsOpen, setProductsOpen] = useState(false);
  const [isProfilesOpen, setProfilesOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { setAdminLogin } = useContext(AdminLoginContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    setAdminLogin(false);
    navigate("/");
  };
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 text-white shadow-md">
      <nav className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo / Brand */}
        <img
          src="D:\Projects\04-e-commerce-project\bed-n-sofa-E-commerce-project\e-commerce-project-09-2025\public\Finesse-Logo.png"
          alt=""
        />
        <div className="text-xl font-bold tracking-wide">Furnishing Homes</div>
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 items-center">
          {/* Products Dropdown */}
          <li className="relative">
            <button
              onClick={() => setProductsOpen(!isProductsOpen)}
              className="flex items-center space-x-1 px-3 py-2 rounded-md bg-gray-700 hover:bg-gray-600 transition-colors"
            >
              Products
            </button>
            {isProductsOpen && (
              <ul className="absolute bg-white text-gray-800 mt-2 rounded-lg shadow-lg w-44 animate-fade-in">
                <li className="px-4 py-2 hover:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% cursor-pointer">
                  <Link to={"/add"}>Add Product</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% cursor-pointer">
                  <Link to={"/manage"}>Manage Products</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% cursor-pointer">
                  <Link to={'/view'}>View Products</Link>
                </li>
              </ul>
            )}
          </li>

          {/* Profiles Dropdown */}
          <li className="relative">
            <button
              onClick={() => setProfilesOpen(!isProfilesOpen)}
              className="flex items-center space-x-1 px-3 py-2 rounded-md bg-gray-700 hover:bg-gray-600 transition-colors"
            >
              Profiles
            </button>
            {isProfilesOpen && (
              <ul className="absolute bg-white text-gray-800 mt-2 rounded-lg shadow-lg w-40 animate-fade-in">
                <li className="px-4 py-2 hover:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% cursor-pointer">
                  Seller
                </li>
                <li className="px-4 py-2 hover:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% cursor-pointer">
                  Customer
                </li>
              </ul>
            )}
          </li>

          {/* Manage Profile */}
          <li>
            <button className="flex items-center space-x-1 px-3 py-2 rounded-md bg-gray-700 hover:bg-gray-600 transition-colors">
              Manage Profile
            </button>
          </li>
        </ul>

        {/* Right side login/logout (Desktop) */}
        <div className="hidden md:block">
          <button
            onClick={() => setAdminLogin(false)}
            className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-500 transition-colors"
          >
            Logout
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded hover:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-white px-4 py-3 space-y-4 animate-slide-down">
          <button className="block w-full text-left hover:text-gray-300">
            Products
          </button>
          <button className="block w-full text-left hover:text-gray-300">
            Profiles
          </button>
          <button className="block w-full text-left hover:text-gray-300">
            Manage Profile
          </button>
          <button
            onClick={() => setAdminLogin(false)}
            className="bg-blue-600 w-full px-4 py-2 rounded-lg hover:bg-blue-500 transition-colors"
          >
            Logout
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
