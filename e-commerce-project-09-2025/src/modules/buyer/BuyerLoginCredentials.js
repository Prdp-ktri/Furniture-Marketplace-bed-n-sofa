import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { BuyerLoginContext } from "../../App";

export default function BuyerLoginCredentials() {
  const { setBuyerLogin } = useContext(BuyerLoginContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/buyers")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error("Error fetching buyer details:", err));
  }, []);

  const handleBuyerLogin = (e) => {
    e.preventDefault();
    let buyerUser = data.find(
      (v) => v.email === email && v.password === password
    );
    if (buyerUser) {
      toast("Welcome to our Store");
      setBuyerLogin(true);
      navigate("/buyersDashboard");
    } else {
      toast("Invalid Buyer Login Credentials, Try Again!");
    }
  };

  return (
    <div>
      <div
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-400 to-orange-400 py-12 px-4"
        style={{ width: "100vw", height: "100vh" }}
      >
        <div className="max-w-md w-full bg-white/70 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-yellow-100">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 text-center mb-6">
            Buyer Login
          </h2>

          <form onSubmit={handleBuyerLogin} className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="mt-1 block w-full rounded-lg border border-yellow-200 px-3 py-2 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-300"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="mt-1 block w-full rounded-lg border border-yellow-200 px-3 py-2 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-300"
              />
            </div>

            <button
              type="submit"
              className="w-full inline-flex justify-center items-center rounded-lg bg-gradient-to-r from-yellow-300 to-orange-300 px-5 py-2 text-sm font-semibold text-gray-800 shadow-md hover:scale-[1.02] transition-transform"
            >
              Login
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Don’t have an account?{" "}
            <a
              href="/buyerCreation"
              className="font-medium text-yellow-600 hover:underline"
            >
              Create one here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
