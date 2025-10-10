import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// LocalStorage Keys
const BUYER_PROFILE_KEY = "loggedInBuyer";
const CART_STORAGE_KEY = "buyerCartItems";

function PlaceOrder() {
  const navigate = useNavigate();
  const [buyerAddress, setBuyerAddress] = useState(null);
  const [totalCost, setTotalCost] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    // 1. Fetch Buyer Address
    const buyerData = JSON.parse(
      localStorage.getItem("http://localhost:5000/buyers")
    );
    if (buyerData && buyerData.address) {
      setBuyerAddress(buyerData.address);
    } else {
      // Fallback if address is missing
      setBuyerAddress("Address not found. Please update your profile.");
    }

    // 2. Calculate Total Cost from Cart
    const storedCart = JSON.parse(localStorage.getItem(CART_STORAGE_KEY)) || [];
    const cost = storedCart.reduce(
      (sum, item) => sum + parseFloat(item.price) * parseInt(item.quantity),
      0
    );

    setTotalCost(cost);

    // If cart is empty, redirect back
    if (storedCart.length === 0) {
      alert("Your cart is empty. Redirecting to home.");
      navigate("/");
    }
  }, [navigate]);

  const handlePlaceOrder = () => {
    if (!paymentMethod) {
      alert("Please select a payment method.");
      return;
    }

    setIsProcessing(true);

    // --- Simulated Payment / Order Placement ---
    console.log(`Placing order with total cost: ₹${totalCost.toFixed(2)}`);
    console.log(`Payment Method: ${paymentMethod}`);
    console.log(`Shipping Address: ${buyerAddress}`);

    // In a real application, you would make API calls here to:
    // 1. Process payment (if not COD)
    // 2. Create the order record in the database

    setTimeout(() => {
      // 3. Clear the Cart after successful order
      localStorage.removeItem(CART_STORAGE_KEY);
      setIsProcessing(false);

      alert(
        `Order placed successfully! Total: ₹${totalCost.toFixed(
          2
        )}. You will receive a confirmation email.`
      );

      // 4. Redirect to a thank you or order history page
      navigate("/order-success");
    }, 2000); // Simulate API call delay
  };

  return (
    <div className="p-8 min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold text-teal-700 mb-8 text-center">
        Final Checkout
      </h1>

      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* 1. Shipping Address */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-lg border-t-4 border-teal-500">
          <h2 className="text-xl font-semibold text-teal-700 mb-4 flex justify-between items-center">
            Shipping Address
            <button className="text-sm text-blue-500 hover:underline">
              Change/Edit
            </button>
          </h2>
          <div className="p-4 bg-teal-50/50 border border-teal-200 rounded-lg">
            <p className="font-medium text-gray-800">Default Address:</p>
            <p className="text-gray-600 whitespace-pre-line">{buyerAddress}</p>
          </div>
        </div>

        {/* 3. Order Summary (Small View) */}
        <div className="lg:col-span-1 bg-white p-6 rounded-xl shadow-lg border-t-4 border-orange-500 h-fit order-first lg:order-none">
          <h2 className="text-xl font-semibold text-orange-600 mb-4">
            Order Summary
          </h2>
          <div className="flex justify-between text-lg font-bold">
            <span>Grand Total:</span>
            <span className="text-orange-600">₹{totalCost.toFixed(2)}</span>
          </div>
        </div>

        {/* 2. Payment Method Selection */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-lg border-t-4 border-green-500">
          <h2 className="text-xl font-semibold text-green-700 mb-4">
            Select Payment Method
          </h2>

          <div className="space-y-4">
            {/* UPI Option */}
            <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition">
              <input
                type="radio"
                name="payment"
                value="UPI"
                checked={paymentMethod === "UPI"}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="h-4 w-4 text-green-600 border-gray-300 focus:ring-green-500"
              />
              <span className="ml-3 font-medium text-gray-700">
                UPI / Google Pay / PhonePe
              </span>
            </label>

            {/* Net Banking Option */}
            <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition">
              <input
                type="radio"
                name="payment"
                value="Net Banking"
                checked={paymentMethod === "Net Banking"}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="h-4 w-4 text-green-600 border-gray-300 focus:ring-green-500"
              />
              <span className="ml-3 font-medium text-gray-700">
                Net Banking
              </span>
            </label>

            {/* COD Option */}
            <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition">
              <input
                type="radio"
                name="payment"
                value="COD"
                checked={paymentMethod === "COD"}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="h-4 w-4 text-green-600 border-gray-300 focus:ring-green-500"
              />
              <span className="ml-3 font-medium text-gray-700">
                Cash on Delivery (COD)
              </span>
            </label>
          </div>

          <button
            onClick={handlePlaceOrder}
            disabled={!paymentMethod || isProcessing}
            className={`mt-6 w-full text-white py-3 rounded-lg font-bold transition ${
              !paymentMethod || isProcessing
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-teal-600 hover:bg-teal-700"
            }`}
          >
            {isProcessing
              ? "Processing Order..."
              : `Pay & Place Order - ₹${totalCost.toFixed(2)}`}
          </button>
          {isProcessing && (
            <p className="mt-2 text-sm text-center text-teal-600">
              Please do not refresh the page.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default PlaceOrder;
