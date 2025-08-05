import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import HeaderPages from "@/components/Header-Pages";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import StickyHeader from "@/components/StickyHeader";
import allServicesData from "@/components/AllServicesData";

const Services = () => {
  const [showAll, setShowAll] = useState(false);
  const servicesRef = useRef(null);
  const [activeCard, setActiveCard] = useState(1);

  const handleToggle = () => {
    if (showAll && servicesRef.current) {
      servicesRef.current.scrollIntoView({ behavior: "smooth" });
    }
    setShowAll(!showAll);
  };

  const visibleServices = showAll
    ? allServicesData
    : allServicesData.slice(0, 8);

  return (
    <div className="font-montserrat">
      <HeaderPages />

      <div className="relative w-full">
        <img
          src="/about-banner.jpg"
          alt="About Us Banner"
          className="w-full h-[300px] object-cover"
        />
        <div className="absolute inset-0 bg-[#1a2940] opacity-80"></div>
            <div className="absolute top-[200px] md:top-[150px] left-1/2 transform -translate-x-1/2 z-10 px-4 w-full flex justify-center">
        <div className="bg-white w-full max-w-[700px] shadow-lg p-6 md:p-10 text-center">
          <h2 className="text-4xl md:text-6xl font-md text-gray-900 mb-2">
            Our Services
          </h2>
          <p className="text-gray-500 leading-relaxed text-base">
            <Link to="/" className="hover:text-[#F79D2B] transition-colors duration-200">
              Home
            </Link>{" "}/
            <Link to="/pages/Services/Services" className="hover:text-[#F79D2B] transition-colors duration-200">
              Services
            </Link>
          </p>
        </div>
      </div>
      </div>
      <StickyHeader />

  

      <section className="w-full py-20 px-4 bg-white flex justify-center items-center text-center  mt-[60px] md:mt-[50px]">
        <div className="max-w-4xl">
          <p className="text-sm uppercase tracking-widest text-gray-400 mb-3">
            THE METAL & CRAFT  AUTOMATION COMPANY
          </p>
          <h2 className="text-2xl md:text-4xl font-bold text-[#1a2940] mb-4 leading-snug">
            Our projects are fully tested, background <br /> checked, license validated and insured with a <br />
            100% satisfaction guarantee.
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Veniam quis nostrud exercitation ullamco laboris nisi ut aliquip exa aute irure dolor reprehenderit.
          </p>
        </div>
      </section>

      <section ref={servicesRef} className="w-full bg-[#f9f9f9] py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {visibleServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: "easeInOut" }}
              viewport={{ once: true }}
            >
              <Link
                to={service.link}
                className="relative group h-[250px] overflow-hidden shadow hover:shadow-lg transition duration-300 block"
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-[#c4beac] p-6 flex flex-col justify-center items-center text-center transition-all duration-300 group-hover:opacity-0">
                  <h3 className="text-lg font-semibold text-[#1a2940] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-[#1a2940] text-sm font-semibold">
                    {service.description.length > 100 ? service.description.slice(0, 100) + "..." : service.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {allServicesData.length > 8 && (
          <div className="text-center mt-10">
            <button
              onClick={handleToggle}
              className="bg-[#1a2940] hover:bg-[#F79D2B] text-white px-6 py-3 rounded-full transition duration-300"
            >
              {showAll ? "Show Less" : "See All Services"}
            </button>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
};

export default Services;
