import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

// Replace with actual image paths
const galleryImages = [
  // "/banner1.jpg",
  // "/banner2.jpg",
  // "/banner3.jpg",
  // "/banner4.jpg",
  // "/banner5.jpg",
  "/banner1.webp",
  "/banner2.webp",
  "/banner-3.jpg",
  "/banner4.webp",
  "/banner5.webp"
];

const Gallery = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  const visibleCount = 3;
  const totalImages = galleryImages.length;

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + totalImages) % totalImages);
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % totalImages);
  };

  const getVisibleImages = () => {
    const visible = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (startIndex + i) % totalImages;
      visible.push(galleryImages[index]);
    }
    return visible;
  };

  return (
    <section className="relative w-full">
      {/* Heading Section */}
      <div className="text-center mt-20">
        <p className="text-[#8a8a8a] max-w-xl mx-auto mb-2 tracking-wider uppercase">
          THE METAL & CRAFT AUTOMATION COMPANY
        </p>
        <h2 className="text-4xl font-bold text-[#0f1f3e]">
          Our Projects Gallery
        </h2>
        <p className="text-[#8a8a8a] mt-4 max-w-xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      {/* Image Slider */}
      <div className="mt-12 flex md:flex-row flex-col justify-center items-center gap-6 overflow-hidden relative w-full px-2 md:px-8">
        {getVisibleImages().map((img, idx) => (
          <div
            key={idx}
            className="w-[80%] h-[500px] overflow-hidden shadow-lg rounded-md cursor-pointer group transition-all duration-500 ease-in-out"
            onClick={() => setSelectedImage(img)}
          >
            <img
              src={img}
              alt={`Gallery ${idx}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {/* Nav Buttons */}
      <div className="flex justify-center gap-2 mt-8">
        <button
          onClick={handlePrev}
          className="w-12 h-12 flex items-center justify-center border border-gray-400 hover:bg-[#0f1f3e] hover:text-white text-gray-600 transition"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={handleNext}
          className="w-12 h-12 flex items-center justify-center border border-gray-400 hover:bg-[#0f1f3e] hover:text-white text-gray-600 transition"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-[#0f1f3e]/80 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="relative max-w-[90%] max-h-[90%]">
            <button
              className="absolute -top-5 -right-5 bg-white text-[#0f1f3e] rounded-full p-2 hover:bg-[#F79D2B] hover:text-white transition"
              onClick={() => setSelectedImage(null)}
            >
              <FaTimes />
            </button>
            <img
              src={selectedImage}
              alt="Modal"
              className="w-full h-full object-contain rounded-md shadow-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
