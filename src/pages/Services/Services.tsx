import React, { useState, useRef, useEffect } from "react";
import HeaderPages from "@/components/Header-Pages";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import StickyHeader from "@/components/StickyHeader";
import allServicesData from "@/components/AllServicesData";

const Services = () => {
  const [showAll, setShowAll] = useState(false);
  const servicesRef = useRef(null);
  const [activeCard, setActiveCard] = useState(1); // default 1st triggered

  const handleToggle = () => {
    if (showAll && servicesRef.current) {
      servicesRef.current.scrollIntoView({ behavior: "smooth" });
    }
    setShowAll(!showAll);
  };

  const visibleServices = showAll
    ? allServicesData
    : allServicesData.slice(0, 8);

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
    <div className="font-montserrat">
      <HeaderPages />

      <div className="relative w-full">
        <img
          src="/about-banner.jpg"
          alt="About Us Banner"
          className="w-full h-[300px] object-cover"
        />
        <div className="absolute inset-0 bg-[#1a2940] opacity-80"></div>
      </div>
      <StickyHeader />

      <div className="relative z-10 mt-[-270px] flex justify-center items-center px-4 min-h-[calc(100vh-300px)]">
        <div className="bg-white w-full max-w-[700px] shadow-lg p-6 md:p-10 text-center">
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
              OUR SERVICES
            </Link>
          </p>
        </div>
      </div>

      <section className="w-full py-20 px-4 bg-white flex justify-center items-center text-center mt-[-70px]">
        <div className="max-w-4xl">
          <p className="text-sm uppercase tracking-widest text-gray-400 mb-3">
            THE WELDFOX COMPANY
          </p>
          <h2 className="text-2xl md:text-4xl font-bold text-[#1a2940] mb-4 leading-snug">
            Our projects are fully tested, background <br /> checked, license
            validated and insured with a <br />
            100% satisfaction guarantee.
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Veniam quis nostrud exercitation ullamco laboris nisi ut aliquip exa
            aute irure dolor reprehenderit.
          </p>
        </div>
      </section>

      <section ref={servicesRef} className="w-full bg-[#f9f9f9] py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {visibleServices.map((service, index) => (
            <Link
              key={index}
              to={service.link}
              className="relative group h-[250px] overflow-hidden shadow hover:shadow-lg transition duration-300"
            >
              <img
                src={service.img}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-[#dbdada] p-6 flex flex-col justify-center items-center text-center transition-all duration-300 group-hover:opacity-0">
                <h3 className="text-lg font-semibold text-[#1a2940] mb-2">
                  {service.title}
                </h3>
                <p className="text-[#1a2940] text-sm font-semibold">
                  {service.description.length > 100
                    ? service.description.slice(0, 100) + "..."
                    : service.description}
                </p>
              </div>
            </Link>
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

      {/* 🔹 Blue Section */}
      {/* 🔹 Responsive Services Section */}
<div className="relative z-30 w-full">
  {/* 🔸 Mobile View Image (only on small screens) */}
  <div className="md:hidden w-full">
    <img
      src="/services.jpg"
      alt="Overlapping"
      className="w-full h-auto object-cover"
    />
  </div>

  {/* 🔸 Main Container (flex layout only on md+) */}
  <div className="flex flex-col md:flex-row justify-end items-center w-full md:h-[750px] relative">
    
    {/* 🔸 Desktop Left Image */}
    <div className="hidden md:block absolute left-[-120px] top-1/2 transform -translate-y-1/2 z-30">
      <img
        src="/services.jpg"
        alt="Overlapping"
        className="w-[850px] h-[670px]"
      />
    </div>

    {/* 🔸 Background + Overlay */}
    <div className="absolute right-0 top-0 w-full md:w-[75%] h-full z-10">
      <img
        src="/services1.jpg"
        alt="Background"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-[#101b2c] bg-opacity-95"></div>
    </div>

    {/* 🔸 Text Content */}
    <div className="relative z-30 w-full md:w-[75%] h-full py-16 px-6 md:px-10 text-white flex items-center">
      <div className="w-full max-w-[600px] mx-auto text-center md:text-left md:mr-20">
        <p className="text-sm uppercase tracking-widest text-gray-300 mb-3">
          THE WELDFOX COMPANY
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
          <span className="hidden md:block absolute -left-1 top-2 w-1 h-10 bg-[#F79D2B] -mt-2"></span>
          <span className="pl-0 md:pl-4 leading-relaxed">Reasons To Choose Us</span>
        </h2>
        <p className="text-gray-300 mb-8 leading-relaxed max-w-md mx-auto md:mx-0">
          Veniam quis nostrud exercitation ullamco laboris nisi ut aliquip exa aute irure dolor in reprehenderit.
        </p>

        {/* Feature List */}
        <div className="space-y-4">
          {[
            "Expert team with years of experience",
            "100% satisfaction guaranteed",
            "Affordable and reliable services",
          ].map((item, idx) => (
            <div key={idx} className="flex items-center justify-center md:justify-start">
              <i className="fas fa-check text-[#F79D2B] mr-3"></i>
              <p className="text-gray-300">{item}</p>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-8">
          <a
            href="/pages/About-us"
            className="text-white font-semibold text-lg inline-flex items-center hover:text-[#F79D2B]"
          >
            <span className="underline">ABOUT COMPANY</span>
            <span className="ml-1 no-underline text-[#f79d28]">&gt;</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

      <section className="relative z-20 mt-[-120px] w-full bg-[#F79D2B] pt-10 pb-10 md:h-[400px] px-4 flex items-center">
  <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-center text-white gap-6">
    
    {/* Left: Text Content */}
    <div className="text-center md:text-left md:ml-[200px] px-2">
      <h2 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold mb-2">
        Trusted by more than <span className="text-white">650,000 people</span>
      </h2>
      <p className="text-xs sm:text-sm md:text-base text-white">
        Call us today or ask a quote to discuss your any kind of repairing needs
      </p>
    </div>

    {/* Right: CTA Button and Phone */}
    <div className="flex flex-col items-center md:items-end gap-4 text-center md:mr-[200px] px-2">
      <button className="relative overflow-hidden group text-white font-semibold px-6 py-3 text-xs sm:text-sm md:text-base transition-colors duration-500 bg-[#1a2940]">
        <span className="relative z-10 transition-colors duration-500 group-hover:text-[#1a2940]">
          SCHEDULE AN APPOINTMENT TODAY
        </span>
        <span className="absolute inset-0 bg-white w-0 group-hover:w-full transition-all duration-500 ease-in-out"></span>
      </button>

      <div className="flex items-center gap-2 text-xs sm:text-sm md:text-base text-white">
        <i className="fas fa-phone-alt text-base"></i>
        <span>Call us <strong>(233) 415 9872</strong></span>
      </div>
    </div>
  </div>
</section>




      <section className="w-full py-12 px-4 bg-white flex flex-col lg:flex-row justify-center items-center lg:items-start gap-10 lg:gap-[100px]">
  {/* 🔹 Left Content */}
  <div className="max-w-[600px] w-full">
    <p className="text-xs sm:text-sm uppercase tracking-widest text-gray-400 mb-3 text-center lg:text-left">
      THE WELDFOX COMPANY
    </p>

    <div className="flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left">
      <div className="w-2 h-10 bg-[#F79D2B] mr-4 hidden lg:block"></div>

      <div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2">
          Commercial Maintenance
        </h2>
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6 max-w-[550px]">
          Exercitation ullamco laboris nisi ut aliquip exa aute irure
          dolor velit esse reprehenderit in voluptate cillum dolore nulla
          except sint ocaecat lorem ipsum dolor sit amet minim veniam quis
          nostrud.
        </p>
      </div>
    </div>

    {/* 🔹 Cards */}
    <div className="space-y-4">
      {services.map((service) => (
        <div key={service.id}>
          <div
            onClick={() => handleCardClick(service.id)}
            className="flex items-center justify-between p-4 shadow cursor-pointer transition-all duration-300 w-full bg-gray-100 text-black"
          >
            <div className="text-left w-full">
              <h3 className="text-sm sm:text-base font-medium">{service.title}</h3>
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
              <p className="text-sm sm:text-base text-gray-700 max-w-[500px] mx-auto text-left">
                {service.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* 🔹 Right Image */}
  <div className="relative w-full max-w-[450px] px-2">
    <img
      src="/services3.jpg"
      alt="Service Visual"
      className="w-full h-auto max-h-[500px] object-cover"
    />

    <img
      src="/services2.jpg"
      alt="Overlapping"
      className="absolute bottom-[-20px] left-[-20px] w-[180px] h-[250px] object-cover border-4 border-white shadow-lg hidden sm:block"
    />
  </div>
</section>


      <Footer />
    </div>
  );
};

export default Services;
