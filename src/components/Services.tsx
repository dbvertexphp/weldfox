import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import servicesData from "@/components/ServicesData";

const Services = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCards = 4;
  const totalCards = servicesData.length;

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % totalCards);
  };

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + totalCards) % totalCards);
  };

  const getVisibleCards = () => {
    const cards = [];
    for (let i = 0; i < visibleCards; i++) {
      const index = (startIndex + i) % totalCards;
      cards.push(servicesData[index]);
    }
    return cards;
  };

  return (
    <section className="relative w-full min-h-screen">
  {/* Background Image */}
  <img
    src="/services1.jpg"
    alt="Background"
    className="absolute inset-0 w-full h-full object-cover z-0"
  />

  {/* Overlay Content */}
  <div className="relative z-10 bg-[#e4e0e0]/90 px-4 py-20 flex flex-col items-center">
    {/* Headings */}
    <div className="text-center">
      <p className="text-[#8a8a8a] max-w-xl mx-auto mb-2 tracking-wider uppercase">
        THE WELDFOX COMPANY
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-[#0f1f3e]">
        Services Categories & Skills
      </h2>
      <p className="text-[#8a8a8a] mt-4 max-w-xl mx-auto text-sm md:text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 w-full max-w-7xl px-4">
      {getVisibleCards().map((item, index) => (
        <div
          key={index}
          className="relative w-full sm:w-[230px] h-[360px] shadow-md overflow-hidden group bg-white mx-auto"
        >
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-[60%] object-cover"
          />
          <div className="bg-white text-center py-4 mt-2 px-2">
            <h3 className="text-lg font-semibold text-[#0f1f3e]">{item.title}</h3>
          </div>

          {/* Hover overlays (optional on mobile) */}
          <div className="absolute inset-0 bg-[#F79D2B] z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-75" />
          <div className="absolute inset-0 z-20 flex justify-center items-center">
            <div className="w-0 h-0 group-hover:w-full group-hover:h-full bg-[#0f1f3e] transition-all duration-300 ease-in-out origin-center flex justify-center items-center">
              <div className="text-white text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm">{item.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Navigation */}
    <div className="flex justify-center gap-2 mt-8">
      <button
        onClick={handlePrev}
        className="w-10 h-10 flex items-center justify-center border border-gray-400 hover:bg-[#0f1f3e] hover:text-white text-gray-600 transition"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={handleNext}
        className="w-10 h-10 flex items-center justify-center border border-gray-400 hover:bg-[#0f1f3e] hover:text-white text-gray-600 transition"
      >
        <FaChevronRight />
      </button>
    </div>
  </div>
</section>

  );
};

export default Services;
