import React from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingCart, Package, User } from "lucide-react"; // Icons

function BuyerDashboard() {
  const navigate = useNavigate();

  const cards = [
    {
      title: "View Products",
      description: "Browse all available products.",
      icon: <ShoppingCart size={32} className="text-white" />,
      link: "/viewAllProducts",
      bgColor: "bg-orange-500",
    },
    {
      title: "Track Orders",
      description: "Check the status of your orders.",
      icon: <Package size={32} className="text-white" />,
      link: "/track-your-order",
      bgColor: "bg-teal-500",
    },
    {
      title: "Edit Profile",
      description: "Update your profile details.",
      icon: <User size={32} className="text-white" />,
      link: "/edit-profile",
      bgColor: "bg-yellow-500",
    },
  ];

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-teal-700 mb-8 text-center">
        Buyer Dashboard
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cards.map((card, idx) => (
          <div
            key={idx}
            onClick={() => navigate(card.link)}
            className={`cursor-pointer rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center hover:shadow-2xl transition duration-300 ${card.bgColor}`}
          >
            <div className="mb-4">{card.icon}</div>
            <h2 className="text-xl font-semibold text-white mb-2">
              {card.title}
            </h2>
            <p className="text-white text-center">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BuyerDashboard;
