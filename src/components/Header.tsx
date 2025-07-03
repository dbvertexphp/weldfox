import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Mail, Phone, Menu, X } from "lucide-react";
import ServicesData from "@/components/servicesData";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpenMobile, setIsServicesOpenMobile] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const isDropdownVisible = isServicesOpenMobile || isHovered;

  return (
    <>
      {/* Top black bar */}
      <div className="bg-black text-[#FACC15] text-sm px-4 py-2 h-10">
        <div className="max-w-7xl mx-auto flex justify-end items-center space-x-6">
          <div className="flex items-center space-x-1">
            <Mail size={16} className="text-yellow-400" />
            <Link to="mailto:abc.company@gmail.com">abc.company@gmail.com</Link>
          </div>
          <div className="flex items-center space-x-1">
            <Phone size={16} className="text-yellow-400" />
            <Link to="tel:+910123456789">+91 0123456789</Link>
          </div>
          <div className="flex items-center space-x-1">
            <Phone size={16} className="text-yellow-400" />
            <Link to="tel:+910123456789">+91 0123456789</Link>
          </div>
        </div>
      </div>

      {/* Header Section */}
      <header className="bg-white shadow-sm relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-[100px]">
            <img
              src="logo.PNG"
              alt="company logo"
              className="w-[200px] h-[70px]"
            />

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8 mr-10 h-full">
              <Link
                to="/"
                className="text-gray-900 hover:text-yellow-400 font-semibold text-xl"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-900 hover:text-yellow-400 font-semibold text-xl"
              >
                About Us
              </Link>
              <Link
                to="/products"
                className="text-gray-900 hover:text-yellow-400 font-semibold text-xl"
              >
                Products
              </Link>

              {/* WRAPPER that handles both Services + Dropdown hover */}
<div
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
>
  {/* Services Trigger */}
  <div className="relative group">
    <div className="flex items-center space-x-1 text-gray-900 hover:text-yellow-400 font-semibold cursor-pointer text-xl">
      <span>Services</span>
      <ChevronDown className="h-4 w-4" />
    </div>

    {/* Bridge to catch hover while moving down */}
    <div className="absolute left-0 right-0 top-full h-[80px] bg-transparent pointer-events-none"></div>
  </div>

  {/* Fixed Dropdown stays open if mouse on it */}
  {isHovered && (
    <div className="fixed top-[120px] left-1/2 transform -translate-x-1/2 z-50 bg-white shadow-xl border rounded-lg w-[95vw] max-w-[1600px] px-8 py-6">
      {/* Arrow Pointer */}
      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-white"></div>

      <div className="flex flex-wrap gap-x-10 gap-y-6 justify-start">
        {ServicesData.map((category, index) => (
          <div key={index} className="min-w-[200px]">
            <h4 className="text-lg font-bold text-gray-800 mb-2">
              {category.title}
            </h4>
            <ul className="space-y-1">
              {category.links.map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.path}
                    className="text-base text-gray-700 hover:text-yellow-500 flex items-center"
                  >
                    <span className="mr-2">→</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )}
</div>

              <Link
                to="/contact"
                className="text-gray-900 hover:text-yellow-400 font-semibold text-xl"
              >
                Contact Us
              </Link>
            </nav>

            {/* Mobile Hamburger */}
            <div className="md:hidden">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-md px-4 py-6 space-y-4">
            <Link to="/" className="block text-gray-900 font-semibold text-lg">
              Home
            </Link>
            <Link
              to="/about"
              className="block text-gray-900 font-semibold text-lg"
            >
              About Us
            </Link>
            <Link
              to="/products"
              className="block text-gray-900 font-semibold text-lg"
            >
              Products
            </Link>

            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {/* Button for Mobile Services */}
              <button
                className="flex items-center justify-between w-full text-gray-900 font-semibold text-lg"
                onClick={() => setIsServicesOpenMobile(!isServicesOpenMobile)}
              >
                <span>Services</span>
                <ChevronDown
                  className={`h-5 w-5 transform transition-transform duration-600 ${
                    isDropdownVisible ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown Content for Mobile */}
              {isDropdownVisible && (
                <div className="absolute left-0 z-50 mt-2 w-64 bg-white shadow-lg rounded-md p-4 space-y-4 max-h-[400px] overflow-y-auto">
                  {ServicesData.map((category, index) => (
                    <div key={index}>
                      <h4 className="text-md font-bold text-gray-700">
                        {category.title}
                      </h4>
                      <ul className="pl-2 space-y-1">
                        {category.links.map((link, i) => (
                          <li key={i}>
                            <Link
                              to={link.path}
                              className="text-sm text-gray-600 hover:text-yellow-500 flex items-center"
                            >
                              <span className="mr-2">→</span>
                              {link.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <Link
              to="/contact"
              className="block text-gray-900 font-semibold text-lg"
            >
              Contact Us
            </Link>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
