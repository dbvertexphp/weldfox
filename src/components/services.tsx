import React from "react";
import { Link } from "react-router-dom";

const Services = [
  {
    title: "Entrance Automation",
    image: "/sliding-gate-automation.jpg", // Ensure this is in /public
    description:
      "Experience convenience and enhanced security with our cutting-edge entrance automation systems, offering seamless access control, remote operation, and customized designs.",
    link: "/services/entrance-automation",
  },
  {
    title: "Rolling Shutters",
    image: "/rolling-shutter.jpg",
    description:
      "Our durable rolling shutters provide superior protection against break-ins and weather, with smooth operation, energy efficiency, and versatile designs to suit any architectural style.",
    link: "/services/rolling-shutters",
  },
  {
    title: "General Fabrication",
    image: "/general-fabrication.jpeg",
    description:
      "We offer high-quality general fabrication services, delivering custom metalwork and structural components with precision engineering, tailored to meet the specific needs of your projects.",
    link: "/services/fabrication",
  },
];

const OurServices = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12">
      {/* Main Heading */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-[#1e3a8a] uppercase">
          Our Services
        </h2>
        <p className="text-2xl text-black mt-4 font-bold">What We Offer</p>
      </div>

      {/* Service Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {Services.map((service, index) => (
          <div
            key={index}
            className="bg-[#f9f9f9] rounded-xl shadow-md hover:shadow-lg transition duration-300 flex flex-col h-full"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-56 object-cover rounded-t-xl"
            />
            <div className="p-5 flex flex-col justify-between flex-grow">
              <h3 className="text-xl font-bold text-[#1e3a8a] mb-2 text-center">
                {service.title}
              </h3>
              <p className="text-black mb-6 text-center font-medium">
                {service.description}
              </p>

              {/* Read More link */}
              <div className="mt-auto">
                <Link
                  to={service.link}
                  className="text-[#1086df] font-semibold relative inline-block group"
                >
                  Read More →
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#1086df] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
