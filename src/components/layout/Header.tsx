import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, ChevronDown, Menu, X } from "lucide-react";
import servicesData from "../home/servicesData"; 

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpenMobile, setIsServicesOpenMobile] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);

  const isDropdownVisible = isServicesOpenMobile || isServicesOpen;

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        setIsHeaderHidden(false);
      } else if (currentScrollY < lastScrollY && currentScrollY > 50) {
        setIsHeaderHidden(true);
      } else if (currentScrollY > lastScrollY) {
        setIsHeaderHidden(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
        <div className="bg-white shadow-md rounded-xl w-[90%] max-w-7xl px-4  flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/">
            <img src="/logo.PNG" alt="Logo" className="w-[180px] h-[60px]" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {["Home", "About Us", "Products"].map((item, index) => (
              <Link
                key={index}
                to={`/${item.toLowerCase().replace(/\s+/g, "")}`}
                className="text-[#474747] hover:text-[#eb975a] font-semibold text-lg"
              >
                {item}
              </Link>
            ))}

            {/* Services Dropdown */}
            <div className="relative">
              <div
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center text-[#474747] hover:text-[#eb975a] font-semibold text-lg cursor-pointer"
              >
                <span>Services</span>
                <ChevronDown
                  className={`h-4 w-4 ml-1 transition-transform duration-300 ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </div>

              {isServicesOpen && (
                <div className="absolute top-[200%] right-[-750%] transform -translate-x-1/2 z-50">
                  <div className="bg-white shadow-lg border rounded-md px-10 py-6 w-[54vw] max-w-[1000px]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-5">
                      {servicesData.map((service, index) => (
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
              className="text-[#474747] hover:text-[#eb975a] font-semibold text-lg"
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-[#474747]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed top-[90px] left-0 right-0 bg-white shadow-md px-4 py-6 space-y-4 z-40">
          {["Home", "About Us", "Products", "Contact Us"].map(
            (item, index) => (
              <Link
                key={index}
                to={`/${item.toLowerCase().replace(/\s+/g, "")}`}
                className="block text-[#474747] font-semibold text-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </Link>
            )
          )}

          {/* Services (Mobile Dropdown) */}
          <div>
            <button
              onClick={() => setIsServicesOpenMobile(!isServicesOpenMobile)}
              className="flex justify-between w-full text-[#474747] font-semibold text-lg"
            >
              <span>Services</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform ${
                  isServicesOpenMobile ? "rotate-180" : ""
                }`}
              />
            </button>
            {isServicesOpenMobile && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 mt-3 max-h-[400px] overflow-y-auto pl-2">
                {servicesData.map((service, i) => (
                  <Link
                    key={i}
                    to={service.link}
                    className="text-sm text-[#474747] hover:text-[#eb975a] flex items-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="mr-2">→</span>
                    {service.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Spacer */}
      <div className="h-[148px]"></div>
    </>
  );
};

export default Header;
