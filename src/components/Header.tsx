import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaSearch,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/pages/About-us" },
    { name: "Services", path: "/pages/Services/Services" },
    { name: "Projects", path: "/pages/projects" },
    { name: "News", path: "/pages/news" },
    { name: "Contact", path: "/pages/Contact" },
  ];

  return (
    <div className="w-full text-white">
      {/* 🔵 Desktop Top Header */}
      <div className="hidden lg:flex items-center justify-between px-[200px] py-0 text-white h-[100px] max:w-6xl">
        <img
          src="/logo1.PNG"
          alt="Logo"
          className="h-[150px] w-[200px] object-contain ml-5"
        />
        <div className="flex space-x-6 text-sm mr-5">
          <div className="flex items-center space-x-2">
            <FaPhoneAlt />
            <div>
              <div className="font-semibold">Call us</div>
              <div>(233) 415 9872</div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <FaEnvelope />
            <div>
              <div className="font-semibold">Email us</div>
              <div>info@example.com</div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <FaMapMarkerAlt />
            <div>
              <div className="font-semibold">Location</div>
              <div>26 Ringer House, NY</div>
            </div>
          </div>
        </div>
      </div>

      {/* 🔵 Mobile Header */}
      <div className="lg:hidden bg-[#1a2940] px-4 py-3 flex items-center justify-between">
        <img
          src="/logo1.PNG"
          alt="Logo"
          className="h-[70px] w-[100px] object-contain"
        />
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white text-2xl"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* 🔵 Desktop Nav Bar */}
      <div className="hidden lg:flex justify-center -mt-1">
        <div className="w-[90%] max-w-6xl bg-[#1a2940] flex flex-col lg:flex-row items-start lg:items-center justify-between px-4 lg:px-5 py-6">
          <div
            className={`flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-10 text-xl font-medium w-full lg:w-auto ${
              menuOpen ? "flex" : "hidden"
            } lg:flex`}
          >
            {navLinks.map((item, idx) => (
              <a href={item.path} key={idx} className="hover:text-[#F79D2B]">
                {item.name}
              </a>
            ))}
          </div>

          {/* Search + Quote */}
          <div className="hidden lg:flex items-center space-x-4">
            <FaSearch className="cursor-pointer" />
            <Link to="/pages/Contact">
              <button className="relative overflow-hidden group text-white font-semibold px-4 py-2 rounded bg-[#F79D2B]">
                <span className="relative z-10 transition-colors duration-500 group-hover:text-[#F79D2B]">
                  GET A QUOTE
                </span>
                <span className="absolute inset-0 bg-white w-0 group-hover:w-full transition-all duration-500 ease-in-out"></span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* 🔵 Mobile Fullscreen Menu ✅ (Fixed with <Link>) */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-white overflow-y-auto lg:hidden">
          <div className="px-5 py-4 flex items-center justify-between border-b">
            <img src="/logo.svg" alt="Logo" className="h-[90px]" />
            <button
              className="text-2xl text-black"
              onClick={() => setMenuOpen(false)}
            >
              <FaTimes />
            </button>
          </div>
          <ul className="flex flex-col divide-y">
            {navLinks.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center px-5 py-4 text-base hover:bg-gray-50 text-black"
              >
                <Link
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className="w-full"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
