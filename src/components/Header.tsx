import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaSearch,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full text-white mt-[-60px]">
      {/* Top Info Bar */}
      <div className="flex flex-col lg:flex-row items-center justify-between px-4 lg:px-[200px] pt-2 pb-0 mt-[-40px] text-sm">
        {/* Left: Logo */}
        <div className="flex items-center justify-between w-full lg:w-auto">
          <img
            src="/logo.svg"
            alt="Logo"
            className="h-[100px] sm:h-[120px] lg:h-[170px] w-auto object-contain"
          />
          {/* Hamburger menu button (only visible on small screens) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white text-2xl"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Right: Contact Info (hidden on small screens) */}
        <div className="hidden lg:flex space-x-4 mt-4 lg:mt-0">
          {/* Phone */}
          <div className="flex items-center space-x-2">
            <FaPhoneAlt className="text-base" />
            <div>
              <div className="text-lg">Call us</div>
              <div className="font-lg">(233) 415 9872</div>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-2">
            <FaEnvelope className="text-base" />
            <div>
              <div className="text-lg">Email us</div>
              <div className="font-lg">info@example.com</div>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center space-x-2">
            <FaMapMarkerAlt className="text-base" />
            <div>
              <div className="text-lg">Location</div>
              <div className="font-lg">26 Ringer House, NY</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Nav Bar */}
      <div className="flex justify-center mt-[-30px]">
        <div className="w-[90%] max-w-6xl bg-[#1a2940] flex flex-col lg:flex-row items-start lg:items-center justify-between px-4 lg:px-5 py-7 rounded-md">
          {/* Navigation Links */}
          <div
            className={`flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-10 text-xl font-medium w-full lg:w-auto ${
              menuOpen ? "flex" : "hidden"
            } lg:flex`}
          >
            <a href="#" className="hover:text-[#F79D2B]">
              Home
            </a>
            <a href="#" className="hover:text-[#F79D2B]">
              About
            </a>
            <a href="#" className="hover:text-[#F79D2B]">
              Services
            </a>
            <a href="#" className="hover:text-[#F79D2B]">
              Projects
            </a>
            <a href="#" className="hover:text-[#F79D2B]">
              News
            </a>
            <a href="#" className="hover:text-[#F79D2B]">
              Contact
            </a>
          </div>

          {/* Search & Button */}
          <div
            className={`mt-4 lg:mt-0 flex items-center space-x-4 ${
              menuOpen ? "w-full justify-start" : ""
            }`}
          >
            <FaSearch className="text-white cursor-pointer" />
            <button className="relative overflow-hidden group text-white font-semibold px-4 py-2 rounded bg-[#F79D2B]">
              <span className="relative z-10 transition-colors duration-500 group-hover:text-[#F79D2B]">
                GET A QUOTE
              </span>
              <span className="absolute inset-0 bg-white w-0 group-hover:w-full transition-all duration-500 ease-in-out"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
