import React, { useState, useRef } from "react";
import servicesData from "../components/servicesData"; // Adjust the path if needed
import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "../lib/animation";

const ServicesSection = () => {
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef(null);

  const handleToggle = () => {
    setShowAll((prev) => {
      if (prev && sectionRef.current) {
        sectionRef.current.scrollIntoView({ behavior: "smooth" });
      }
      return !prev;
    });
  };

  const displayedServices = showAll ? servicesData : servicesData.slice(0, 3);

  return (
    <section
      ref={sectionRef}
      className="bg-white pt-10 pb-16 px-2 sm:px-4 md:px-6 transition-all duration-500 ease-in-out flex flex-col items-center"
    >
      {/* Heading with Orange Border */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={zoomInVariants}
        className="max-w-7xl mx-auto text-center relative mb-16"
      >
        <hr className="border-t-4 border-[#ff893a] w-1/2 mx-auto" />
        <h2 className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white px-4 text-4xl md:text-5xl font-bold text-[#35165e] uppercase">
          Our Services
        </h2>
      </motion.div>

      {/* Grid Layout */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={zoomInVariants} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-7 mt-[100px] transition-all duration-700 ease-in-out w-full max-w-7xl">
        {displayedServices.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-visible transform transition duration-500 hover:scale-105 relative w-full max-w-[320px] min-h-[400px] mx-auto"
          >
            {/* Orange Header with Icon and Title */}
            <div className="bg-[#ff893a] h-[100px] flex flex-col items-center justify-center relative">
              <div className="w-14 h-14 bg-white rounded-full border-4 border-[#ff893a] flex items-center justify-center absolute -top-7 left-1/2 -translate-x-1/2">
                <span className="text-[#ff893a] text-xl font-bold">🛠️</span>
              </div>
              <h3 className="text-md font-bold text-white mt-6 px-2 text-center">
                {service.title}
              </h3>
            </div>

            {/* Card Content */}
            <div className="flex flex-col justify-between pt-10 pb-6 px-4 text-center min-h-[220px]">
              <p className="text-sm text-[#141414]">{service.description}</p>
              <div>
                <button className="mt-4 text-sm font-bold text-[#35165e] underline hover:text-[#ff893a] transition duration-300">
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Toggle Button */}
      <div className="mt-10 text-center">
        <button
          onClick={handleToggle}
          className="bg-[#ff893a] hover:bg-[#e67c2f] text-white font-semibold px-6 py-2 rounded-full transition-all duration-300"
        >
          {showAll ? "Show Less" : "See All Services"}
        </button>
      </div>

      {/* Ending Divider and Message */}
      {showAll && (
        <div className="mt-14 text-center">
          <hr className="border-t-2 border-[#35165e] w-1/2 mx-auto mb-6" />
          <p className="text-lg font-semibold text-[#35165e]">
            We craft every service with dedication and excellence.
          </p>
        </div>
      )}
    </section>
  );
};

export default ServicesSection;
