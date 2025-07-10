import React from "react";
import { FaHome, FaUserCog, FaTools } from "react-icons/fa";
import { Link } from "react-router-dom";

const cards = [
  {
    icon: <FaHome size={40} className="text-[#1a2940]" />,
    title: "Super Quality With Superior Results",
    description: "Veniam quis nostrud exercit nisi ut aliquip exa aute.",
    link: "ABOUT US",
    to: "/pages/About-us",
  },
  {
    icon: <FaUserCog size={40} className="text-[#1a2940]" />,
    title: "Get Your ‘To Do’ List Completed With Style",
    description: "Veniam quis nostrud exercit nisi ut aliquip exa aute.",
    link: "GET A QUOTE",
    to: "/quote",
  },
  {
    icon: <FaTools size={40} className="text-[#1a2940]" />,
    title: "Using Modern Tools And Trusted Staff",
    description: "Veniam quis nostrud exercit nisi ut aliquip exa aute.",
    link: "OUR SERVICES",
    to: "/services",
  },
];

const FeatureCards = () => {
  return (
    <div className="w-full bg-white py-20 px-4 flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl w-full">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 flex flex-col justify-between h-[300px] text-center"
          >
            {/* Icon */}
            <div className="flex justify-center mb-4">
              <div className="bg-gray-100 rounded-full h-[70px] w-[70px] flex items-center justify-center">
                {card.icon}
              </div>
            </div>

            {/* Content */}
            <div className="flex-grow">
              <h3 className="text-xl font-md text-[#1a2940] hover:text-[#F79D2B] mb-2">
                {card.title}
              </h3>
              <p className="text-sm text-gray-500">{card.description}</p>
            </div>

            {/* Link */}
            <div className="mt-6">
              <Link
                to={card.to}
                className="text-[#F79D2B] font-bold text-sm hover:underline flex items-center justify-center gap-1"
              >
                {card.link} <span className="text-lg">&rsaquo;</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;
