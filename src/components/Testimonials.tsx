import React, { useState } from "react";
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Aaron Finch",
    location: "New York",
    image: "/testimonials1.avif",
    review:
      "Excepteur sint occaecat cupidatat proident, sunt in culpa qui officia mollit anim laborum. Sed ut perspici unde omnis iste nats sit adipisicing elit sed eiusmod tempor.",
    stars: 5,
  },
  {
    name: "Shane Smith",
    location: "Washington",
    image: "/testimonials2.jpg",
    review:
      "Excepteur sint occaecat cupidatat proident, sunt in culpa qui officia mollit anim laborum. Sed ut perspici unde omnis iste nats sit adipisicing elit sed eiusmod tempor.",
    stars: 5,
  },
  {
    name: "Lisa Brown",
    location: "California",
    image: "/testimonials3.jpg",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.",
    stars: 4,
  },
  {
    name: "John Doe",
    location: "Texas",
    image: "/testimonials4.jpg",
    review:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.",
    stars: 5,
  },
];

const Testimonials = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 2;

  const handlePrev = () => {
    setStartIndex((prev) =>
      prev - visibleCount < 0 ? testimonials.length - visibleCount : prev - visibleCount
    );
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + visibleCount) % testimonials.length);
  };

  const visibleTestimonials = [];
  for (let i = 0; i < visibleCount; i++) {
    visibleTestimonials.push(testimonials[(startIndex + i) % testimonials.length]);
  }

  return (
    <section className="w-full bg-white py-20 px-4">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-12">
    {/* Left: Heading */}
    <div className="max-w-lg text-center lg:text-left">
      <FaQuoteLeft className="text-4xl text-[#F79D2B] mb-4" />
      <p className="uppercase text-sm text-gray-500 tracking-widest">
        THE METAL & CRAFT  AUTOMATION COMPANY
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-[#0f1f3e] mt-2">
        Our Satisfied & <br /> Happy Customers
      </h2>
      <p className="text-gray-600 mt-4">
        Veniam quis nostrud exercitation ullamco laboris nisi ut aliquip exa aute irure
        dolor in voluptate velit esse cillum dolore.
      </p>
    </div>

    {/* Right: Cards */}
    <div className="flex flex-col items-center w-full">
      {/* Testimonials Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 w-full">
        {visibleTestimonials.map((item, index) => (
          <div
            key={index}
            className="bg-[#f7f7f7] p-6 rounded-md w-full shadow-md transition-all duration-300"
          >
            <p className="text-gray-700 mb-6 text-sm md:text-base">{item.review}</p>
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-[#0f1f3e]">{item.name}</h4>
                <p className="text-sm text-gray-500">{item.location}</p>
              </div>
            </div>
            <div className="flex mt-3 text-[#F79D2B]">
              {[...Array(item.stars)].map((_, idx) => (
                <FaStar key={idx} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={handlePrev}
          className="p-3 border border-gray-300 rounded-full hover:bg-[#0f1f3e] hover:text-white transition"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={handleNext}
          className="p-3 border border-gray-300 rounded-full hover:bg-[#0f1f3e] hover:text-white transition"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  </div>
</section>

  );
};

export default Testimonials;
