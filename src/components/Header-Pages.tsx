import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaSearch,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const HeaderPages = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="w-full">
      {/* 🔷 Top Bar */}
      <div className="w-full text-sm flex flex-col md:flex-row">
        {/* Contact Info */}
        <div className="bg-[#1a2940] text-white w-full md:w-1/2 h-[60px] flex justify-center md:justify-end items-center gap-4 px-4 md:px-10">
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-[#f79d2b]" />
            <span>(233) 415 9872</span>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <FaEnvelope className="text-[#f79d2b]" />
            <span>info@example.com</span>
          </div>
        </div>

        {/* Social Icons */}
        <div className="bg-[#f8f8f8] w-full md:w-1/2 h-[60px] flex justify-center items-center gap-4 text-[#d1d1d1]">
          <FaTwitter className="cursor-pointer hover:text-gray-600" />
          <FaFacebookF className="cursor-pointer hover:text-gray-600" />
          <FaLinkedinIn className="cursor-pointer hover:text-gray-600" />
          <FaYoutube className="cursor-pointer hover:text-gray-600" />
        </div>
      </div>

      {/* ⚪ Navigation Bar */}
      <div className="w-full h-[80px] flex items-center justify-between px-4 md:px-10 bg-white shadow relative">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/logo-1.jpeg" alt="Logo" className="h-12 w-auto" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex space-x-8 text-[16px] text-black font-medium">
          <a href="/" className="hover:text-[#f79d2b] text-xl">Home</a>
          <a href="/pages/About-us" className="hover:text-[#f79d2b] text-xl">About</a>
          <a href="/pages/Services/Services" className="hover:text-[#f79d2b] text-xl">Services</a>
          <a href="/pages/Projects" className="hover:text-[#f79d2b] text-xl">Projects</a>
          <a href="/pages/news" className="hover:text-[#f79d2b] text-xl">News</a>
          <a href="/pages/Contact" className="hover:text-[#f79d2b] text-xl">Contact</a>
        </nav>

        {/* Right Icons - Desktop */}
        <div className="hidden lg:flex items-center space-x-6">
          <FaSearch className="text-[#1a2940] cursor-pointer" />
          <Link to='/pages/Contact'>
          <button className="bg-[#f79d2b] text-white font-semibold px-5 py-2 rounded">
            GET A QUOTE
          </button>
          </Link>
        </div>

        {/* Hamburger Icon */}
        <div className="lg:hidden text-2xl text-[#1a2940] cursor-pointer" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-[80px] left-0 w-full bg-white shadow-md px-6 py-4 z-50 flex flex-col space-y-4 lg:hidden">
            <a href="/" className="text-black hover:text-[#f79d2b]">Home</a>
            <a href="/pages/About-us" className="text-black hover:text-[#f79d2b]">About</a>
            <a href="/pages/Services/Services" className="text-black hover:text-[#f79d2b]">Services</a>
            <a href="#" className="text-black hover:text-[#f79d2b]">Projects</a>
            <a href="/pages/news" className="text-black hover:text-[#f79d2b]">News</a>
            <a href="/pages/Contact" className="text-black hover:text-[#f79d2b]">Contact</a>

            <div className="flex items-center justify-between pt-4 border-t">
              <FaSearch className="text-[#1a2940] cursor-pointer" />
              <button className="bg-[#f79d2b] text-white px-4 py-2 rounded font-medium">
                GET A QUOTE
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderPages;
