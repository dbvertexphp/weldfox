import React, { useRef, useState } from "react";
import HeaderPages from "@/components/Header-Pages";
import Footer from "@/components/Footer";
import { Link, useLocation } from "react-router-dom";
import StickyHeader from "@/components/StickyHeader";
import AllServicesData from "@/components/AllServicesData";

const GlassPergolas = () => {
  const [showAll, setShowAll] = useState(false);
  const servicesRef = useRef(null);
  const [activeCard, setActiveCard] = useState(1);
  const location = useLocation();

  const handleToggle = () => {
    if (showAll && servicesRef.current) {
      servicesRef.current.scrollIntoView({ behavior: "smooth" });
    }
    setShowAll(!showAll);
  };

  const services = [
    {
      id: 1,
      title: "Simplify the process of Improvement & Repair",
      description:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.",
    },
    {
      id: 2,
      title: "Get your 'To Do' list completed in style",
      description:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.",
    },
    {
      id: 3,
      title: "Licensed and insured tradesmen at service",
      description:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.",
    },
    {
      id: 4,
      title: "100% labor guaranteed work for two years",
      description:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.",
    },
  ];

  const handleCardClick = (id) => {
    setActiveCard(id);
  };

  return (
    <div className="font-montserrat relative">
      <HeaderPages />
      <div className="relative w-full z-10 mx-auto">
        <img
          src="/about-banner.jpg"
          alt="About Us Banner"
          className="w-full h-[300px] object-cover"
        />
        <div className="absolute inset-0 h-[300px] bg-[#1a2940] opacity-80 z-10"></div>
      </div>

      <StickyHeader />

      <div
        className="flex flex-col lg:flex-row w-full relative"
        style={{ minHeight: "calc(100vh - 300px)" }}
      >
        {/* Left Side */}
        <div className="w-full lg:w-1/3 relative order-1 lg:order-none">
          <img
            src="/services1.jpg"
            alt="Left Side"
            className="w-full h-[2000px] lg:h-[2700px] object-cover opacity-20"
          />

          <div
            className="absolute top-0 left-0 w-full h-full z-10 flex items-center justify-center"
            style={{ backgroundColor: "#e4e0e0e6", opacity: 0.9 }}
          >
            <div className="w-full max-w-[300px] px-6 py-8 overflow-y-auto max-h-full mt-[44px] lg:mt-[-440px] lg:ml-[150px]">
              <h3 className="text-2xl font-bold text-[#0a0a0a] mb-6 flex items-center">
                <span className="w-2 h-6 bg-[#F79D2B] inline-block mr-2" /> We
                Offers
              </h3>
              <ul className="space-y-3 mb-10">
                {AllServicesData.map((service, index) => {
                  const isActive = location.pathname === service.link;
                  return (
                    <li key={index}>
                      <Link
                        to={service.link}
                        className={`block w-full text-left px-4 py-3 rounded shadow-sm text-lg font-medium flex items-center gap-2 ${
                          isActive
                            ? "bg-[#F79D2B] text-white border-l-4 border-[#1a2940]"
                            : "bg-white text-[#1a2940] hover:bg-[#f3f3f3]"
                        }`}
                      >
                        <span className="text-base">▶</span> {service.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <div className="bg-white shadow-md rounded p-5 text-[#1a2940] mb-8">
                <h4 className="text-xl font-bold flex items-center mb-3">
                  <span className="w-2 h-6 bg-[#F79D2B] inline-block mr-2" />{" "}
                  Get in Touch
                </h4>
                <p className="mb-2">
                  <span className="inline-block mr-2">📞</span>
                  <strong>(233) 415 9872</strong>
                </p>
                <p className="mb-2 text-base">
                  26 Ringer House, Newyork, 58920 United States
                </p>
                <p className="mb-2 text-sm">info@example.com</p>
                <p className="mb-2 text-sm">Mon to Sat: 9am to 6pm</p>
                <p className="mb-4 text-sm">Sunday: Closed</p>
                <button className="bg-[#F79D2B] text-white font-semibold px-4 py-2 rounded hover:bg-[#e88d1c] transition duration-200">
                  Request a Quote
                </button>
              </div>

              <div className="bg-white shadow-md rounded overflow-hidden text-center text-[#1a2940]">
                <div className="bg-[#1a2940] text-white py-4 px-2">
                  <h4 className="text-lg font-bold">Need our help?</h4>
                </div>
                <img
                  src="/left.jpg"
                  alt="Handyman"
                  className="w-full object-cover"
                />
                <div className="bg-[#F79D2B] py-4 text-white text-lg font-semibold">
                  We offer 24x7
                  <br /> Handyman Services
                </div>
                <div className="py-4 px-4">
                  <button className="bg-[#1a2940] text-white font-bold text-sm px-4 py-2 rounded hover:bg-[#111d31] mb-4">
                    GET A FREE QUOTE
                  </button>
                  <div className="text-base">
                    <span className="text-[#F79D2B] mr-2">📞</span>
                    <strong>(233) 415 9872</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-2/3 bg-white p-6 sm:p-10 flex flex-col justify-start relative z-10 order-2 mt-[120px]">
          <p className="text-gray-400 text-base mb-1">THE WELDFOX COMPANY</p>
          <div className="flex items-center gap-2">
            <span className="w-1 h-10 bg-[#F79D2B] inline-block" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2940]">
              Glass Pregolas
            </h2>
          </div>

          <div className="w-full lg:w-[74%] mt-[50px]">
            <img
              src="/pergo4.jpg"
              alt="Glass Pregolas"
              className="w-full h-[440px] shadow-md mb-4"
            />
            <p className="text-base text-[#555555] leading-relaxed mt-[40px]">
              Exercitation ullamco laboris nisi ut aliquip exa aute irure dolor
              velit esse reprehenderit in voluptate cillum dolore nulla except
              sint ocaecat lorem ipsum dolor sit amet minim veniam quis nostrud
              ex duis aute irure dolor in reprehenderit in voluptate velit esse.
              <br />
              <br />
              In voluptate velit esse cillum dolore nulla par excep sint
              occaecat. Lorem ipsum dolor sit amet, consectetur adipisicing elit
              eiusmod tempor incididunt ut labore et dolore.
            </p>
          </div>

          <div className="w-full lg:w-[74%] mt-8 flex flex-col md:flex-row gap-x-6">
            <img
              src="/pergo3.jpg"
              alt="Sub Image 1"
              className="w-full md:w-1/2 h-[350px] object-cover shadow-md"
            />
            <img
              src="/pergo2.jpg"
              alt="Sub Image 2"
              className="w-full md:w-1/2 h-[350px] object-cover shadow-md"
            />
          </div>

          <h2 className="w-full lg:w-[74%] mt-10 text-2xl font-bold text-[#1a2940]">
            True Budget Handyman Services
          </h2>

          <p className="w-full lg:w-[74%] mt-6 text-base leading-relaxed text-[#555555]">
            Eniam quis nostrud exercitation ullamco laboris nisi ut aliquip exa
            aute dolor in reprehenderit in voluptate velit esse cillum dolore
            nulla par excep sint occaecat. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit eiusmod tempor incididunt ut labore et
            dolore. Magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullam.
          </p>

          <ul className="w-full lg:w-[74%] mt-4 space-y-2 text-base text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-[#F79D2B] font-semibold">✔</span>
              <span className="font-semibold text-[#1a2940] text-lg">
                Dedicated and knowledgeable professionals
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#F79D2B] font-semibold">✔</span>
              <span className="font-semibold text-[#1a2940] text-lg">
                Offering all jobs guaranteed & neatly done
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#F79D2B] font-semibold">✔</span>
              <span className="font-semibold text-[#1a2940] text-lg">
                We provide 24/7 on time services
              </span>
            </li>
          </ul>

          <h2 className="text-xl sm:text-2xl md:text-2xl font-bold text-gray-800 mt-[40px]">
            Why Choose Weldfox
          </h2>

          <div className="space-y-4 w-full lg:w-[74%] mt-[50px]">
            {services.map((service) => (
              <div key={service.id}>
                <div
                  onClick={() => handleCardClick(service.id)}
                  className="flex items-center justify-between p-4 shadow cursor-pointer transition-all duration-300 w-full bg-gray-100 text-black"
                >
                  <div className="text-left w-full">
                    <h3 className="text-sm sm:text-base font-medium">
                      {service.title}
                    </h3>
                  </div>
                  <span
                    className={`px-2 py-1 text-xs sm:text-sm font-semibold transition-all duration-300 ${
                      activeCard === service.id
                        ? "bg-[#F79D2B] text-white"
                        : "bg-[#1a2940] text-white"
                    }`}
                  >
                    0{service.id}
                  </span>
                </div>
                <div
                  className={`transition-all duration-500 overflow-hidden ${
                    activeCard === service.id ? "max-h-[500px] mt-2" : "max-h-0"
                  }`}
                >
                  <div className="p-4 bg-white">
                    <p className="text-sm sm:text-sm text-gray-700 mx-auto text-left">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="w-full lg:w-[74%] mt-20 text-2xl font-bold text-[#1a2940]">
            Pergolas installation and repair solutions
          </h2>

          <div className="w-full lg:w-[74%] mt-[50px] flex flex-col md:flex-row gap-6 items-start">
            <img
              src="/pergo1.jpg"
              alt="Shutter Installation"
              className="w-full md:w-1/2 h-[300px] object-cover shadow-md"
            />
            <p className="text-base text-[#555555] leading-relaxed md:w-1/2">
              Veniam quis nostrud exercitation ullamco laboris nisi ut aliquip
              exa aute dolor in reprehenderit in voluptate velit esse cillum
              dolore nulla par excep sint occaecat. Lorem ipsum dolor sit amet,
              cons ectetur adipisicing elit tempor.
              <br />
              <br />
              Incididunt ut labore et dolore. Magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullam laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor.
            </p>
          </div>
        </div>

        <div className="absolute top-[-120px] left-1/2 transform -translate-x-1/2 z-30 bg-white w-full max-w-[700px] shadow-lg p-6 md:p-10 text-center">
          <h2 className="text-4xl md:text-6xl font-md text-gray-900 mb-2">
            Our Services
          </h2>
          <p className="text-gray-500 leading-relaxed text-base">
            <Link
              to="/"
              className="hover:text-[#F79D2B] transition-colors duration-200"
            >
              Home
            </Link>{" "}
            /
            <Link
              to="/pages/Services/Services"
              className="hover:text-[#F79D2B] transition-colors duration-200"
            >
              Services
            </Link>{" "}
            /
            <Link
              to="/pages/Services/glass-pergolas"
              className="hover:text-[#F79D2B] transition-colors duration-200"
            >
              Glass Pergolas
            </Link>
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default GlassPergolas;
