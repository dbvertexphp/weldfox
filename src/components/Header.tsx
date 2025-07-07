import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Mail, Phone, Menu, X } from "lucide-react";
import ServicesData from "@/components/servicesData";
import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "@/lib/animation";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpenMobile, setIsServicesOpenMobile] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const isDropdownVisible = isServicesOpenMobile || isServicesOpen;

  return (
    <>
      {/* Top black bar */}
      <div className="bg-black text-[#eb975a] text-sm px-4 py-2 h-10">
        <div className="max-w-7xl mx-auto flex justify-end items-center space-x-6">
          <div className="flex items-center space-x-1">
            <Mail size={16} />
            <Link to="mailto:abc.company@gmail.com">abc.company@gmail.com</Link>
          </div>
          <div className="flex items-center space-x-1">
            <Phone size={16} />
            <Link to="tel:+910123456789">+91 0123456789</Link>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="flex justify-between items-center h-[100px]">
            <motion.img
              initial="hidden"
              whileInView="visible"
              variants={zoomInVariants}
              src="/logo.PNG"
              alt="company logo"
              className="w-[200px] h-[70px]"
            />

            {/* Desktop Navigation */}
            <motion.nav
              initial="hidden"
              whileInView="visible"
              variants={slideUpVariants}
              className="hidden md:flex items-center space-x-8 mr-10 h-full"
            >
              <Link
                to="/"
                className="text-gray-700 hover:text-[#eb975a] font-semibold text-xl"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-[#eb975a] font-semibold text-xl"
              >
                About Us
              </Link>
              <Link
                to="/products"
                className="text-gray-700 hover:text-[#eb975a] font-semibold text-xl"
              >
                Products
              </Link>

              {/* Services Dropdown */}
              <div className="relative">
                <div
                  className="flex items-center space-x-1 text-gray-700 hover:text-[#eb975a] font-semibold mt-1 cursor-pointer text-xl"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`h-4 w-4 transform transition-transform duration-300 ${
                      isServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {/* Dropdown Panel with Triangle */}
                {isServicesOpen && (
                  <div className="absolute top-[200%] ml-[10px] transform -translate-x-1/2 z-50">
                    {/* Dropdown Container */}
                    <div className="bg-white shadow-lg border rounded-md px-10 py-6 w-[54vw] max-w-[1000px]">
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-5">
                        {ServicesData.map((service, index) => (
                          <Link
                            key={index}
                            to={service.link}
                            className="text-sm text-[#474747] font-bold relative group hover:text-[#eb975a] transition-colors"
                          >
                            {service.title}
                            <span className="absolute left-0 bottom-0 h-0.5 bg-[#eb975a] w-0 group-hover:w-full transition-all duration-300 ease-in-out"></span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/contact"
                className="text-gray-700 hover:text-[#eb975a] font-semibold text-xl"
              >
                Contact Us
              </Link>
            </motion.nav>
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </motion.div>
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

            {/* Mobile Services Dropdown */}
            <div className="relative">
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

              {isDropdownVisible && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 mt-3 max-h-[400px] overflow-y-auto">
                  {ServicesData.map((service, index) => (
                    <Link
                      key={index}
                      to={service.link}
                      className="text-sm text-gray-600 hover:text-[#eb975a] flex items-center"
                    >
                      <span className="mr-2">→</span>
                      {service.title}
                    </Link>
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
