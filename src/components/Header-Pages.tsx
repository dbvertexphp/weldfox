import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaGooglePlusG,
  FaYoutube,
  FaSearch,
} from "react-icons/fa";

const HeaderPages = () => {
  return (
    <div className="w-full">
      {/* 🔷 Top Bar */}
      <div className="w-full flex text-sm">
        {/* Left: Contact Info aligned right */}
        <div className="bg-[#1a2940] text-white w-1/2 h-[60px] flex items-center justify-end gap-6 px-10 py-2">
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-[#f79d2b]" />
            <span>Call for Service! (233) 415 9872</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-[#f79d2b]" />
            <span>Email info@example.com</span>
          </div>
        </div>

        {/* Right: Social Icons centered */}
        <div className="bg-[#f8f8f8] w-1/2 flex justify-center items-center gap-4 text-[#d1d1d1] h-[60px]">
          <FaTwitter className="cursor-pointer hover:text-gray-600" />
          <FaFacebookF className="cursor-pointer hover:text-gray-600" />
          <FaLinkedinIn className="cursor-pointer hover:text-gray-600" />
          <FaYoutube className="cursor-pointer hover:text-gray-600" />
        </div>
      </div>

      {/* ⚪ Navigation Bar */}
      <div className="w-full h-[90px] flex justify-between items-center px-10 py-4 bg-white shadow">
        {/* Logo */}
        <div className="flex items-center space-x-2 ml-4">
          <img src="/logo1.PNG" alt="Logo" className="h-12 w-auto" />
        </div>

        {/* Nav Links */}
        <nav className="hidden lg:flex space-x-8 text-[16px] text-black font-medium ">
          <a href="/" className="hover:text-[#f79d2b] text-xl">Home</a>
          <a href="/pages/About-us" className="hover:text-[#f79d2b] text-xl">About</a>
          <a href="#" className="hover:text-[#f79d2b] text-xl">Services</a>
          <a href="#" className="hover:text-[#f79d2b] text-xl">Projects</a>
          <a href="#" className="hover:text-[#f79d2b] text-xl">News</a>
          <a href="#" className="hover:text-[#f79d2b] text-xl">Contact</a>
        </nav>

        {/* Right: Search + Quote */}
        <div className="hidden lg:flex items-center space-x-6 mr-4">
          <FaSearch className="text-[#1a2940] cursor-pointer" />
          <button className="bg-[#f79d2b] text-white font-semibold px-5 py-2 rounded">
            GET A QUOTE
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderPages;
