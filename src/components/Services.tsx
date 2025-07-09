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
    <section className="relative w-full h-[950px] overflow-hidden">
      {/* Background */}
      <img
        src="/services1.jpg"
        className="absolute inset-0 w-full h-full object-cover"
        alt="Services Background"
      />
      <div className="absolute inset-0 bg-[#e4e0e0] bg-opacity-95 px-4 flex flex-col items-center">
        {/* Headings */}
        <div className="text-center mt-20">
          <p className="text-[#8a8a8a] max-w-xl mx-auto mb-2 tracking-wider uppercase">
            THE WELDFOX COMPANY
          </p>
          <h2 className="text-4xl font-bold text-[#0f1f3e]">
            Services Categories & Skills
          </h2>
          <p className="text-[#8a8a8a] mt-4 max-w-xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        {/* Cards and Navigation centered in one block */}
        <div className="flex flex-col items-center w-full max-w-7xl mt-12">
          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-500 ease-in-out">
            {getVisibleCards().map((item, index) => (
              <div
                key={index}
                className="relative w-[230px] h-[360px] shadow-md overflow-hidden group mx-auto bg-white"
              >
                {/* Image */}
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[60%] object-cover"
                />
                {/* Title under image */}
                <div className="bg-white text-center py-4 mt-2">
                  <h3 className="text-lg font-semibold text-[#0f1f3e]">
                    {item.title}
                  </h3>
                </div>

                {/* Orange flash */}
                <div className="absolute inset-0 bg-[#F79D2B] z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-75" />

                {/* Blue overlay */}
                <div className="absolute inset-0 z-20 flex justify-center items-center">
                  <div className="w-0 h-0 group-hover:w-full group-hover:h-full bg-[#0f1f3e] transition-all duration-300 ease-in-out origin-center flex justify-center items-center">
                    <div className="text-white text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      <h3 className="text-xl font-semibold mb-2 animate-slide-up">
                        {item.title}
                      </h3>
                      <p className="text-sm animate-slide-up delay-200">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="w-full flex justify-center justify-items-center mt-8">
            <div className="flex gap-4">
              <button
                onClick={handlePrev}
                className="w-12 h-12 border border-gray-400 hover:bg-[#0f1f3e] hover:text-white text-gray-600 transition"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={handleNext}
                className="w-12 h-12 border border-gray-400 hover:bg-[#0f1f3e] hover:text-white text-gray-600 transition"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
        <div className="mt-[150px] text-center text-3xl font-semibold">
          <span className="text-[#0f1f3e]">Need a service – Call us at </span>
          <span className="text-[#F79D2B]">1-820-950-6379</span>
          <span className="text-[#0f1f3e]"> or Request a Quote</span>
        </div>
      </div>
    </section>
  );
};

export default Services;
