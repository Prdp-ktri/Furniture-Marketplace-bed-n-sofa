import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPortal() {
  const navigate = useNavigate();
  const [role, setRole] = useState("admin");

  const handleLogin = (e) => {
    e.preventDefault();
    if (role === "admin") navigate("/adminLogin");
    if (role === "seller") navigate("/sellerLogin");
    if (role === "buyer") navigate("/buyerLogin");
  };

  return (
    <div>
      <div
        className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500"
        style={{ width: "100vw", height: "100vh" }}
      >
        <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-md">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Choose Your Login Portal
          </h2>
          <form onSubmit={handleLogin} className="space-y-6">
            {/* Dropdown */}
            <div>
              <label
                htmlFor="role"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Select Role
              </label>
              <select
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 outline-none transition"
              >
                <option value="admin">Admin Login</option>
                <option value="seller">Seller Login</option>
                <option value="buyer">Buyer Login</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-xl shadow-md transition-transform transform hover:scale-105"
            >
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPortal;
