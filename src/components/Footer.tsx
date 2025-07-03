import React from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaPhoneAlt, FaPaperPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#2a2a2a] text-white text-sm pt-10 pb-4 px-6 md:px-12">
      {/* Newsletter */}
      <div className="max-w-7xl mx-auto mb-10">
        <h3 className="text-xl font-semibold mb-4">Our Newsletter</h3>
        <div className="flex max-w-lg w-full">
          <input
            type="email"
            placeholder="Your Email Address"
            className="w-full px-4 py-2 rounded-l-md text-black outline-none"
          />
          <button className="bg-[#1086df] px-4 py-2 rounded-r-md">
            <FaPaperPlane className="text-white" />
          </button>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-gray-300">
        {/* Location */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-3 border-l-4 border-[#1086df] pl-2">
            Location
          </h4>
          <p>
            46/2, Muthanallur Cross, behind Eye Hospital, MR Property,
            Dommasandra, Bangalore – 562125.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-3 border-l-4 border-[#1086df] pl-2">
            Useful Links
          </h4>
          <ul className="space-y-1 text-white">
            {[
              { label: "Home", path: "/" },
              { label: "About Us", path: "/about-us" },
              { label: "Products", path: "/products" },
              { label: "Services", path: "/services" },
              { label: "Contact", path: "/contact" },
            ].map(({ label, path }) => (
              <li key={label}>
                <Link
                  to={path}
                  className="group relative inline-block transition-colors duration-300 text-white hover:text-[#1086df]"
                >
                  {label}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#1086df] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-3 border-l-4 border-[#1086df] pl-2">
            Contact Us
          </h4>
          <ul className="space-y-2 text-white">
            <li className="flex items-center gap-2">
              <FaEnvelope />
              <a
                href="mailto:info@weldfox.com"
                className="group relative inline-block transition-colors duration-300 text-white hover:text-[#1086df]"
              >
                info@weldfox.com
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#1086df] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope />
              <a
                href="mailto:support@weldfox.com"
                className="group relative inline-block transition-colors duration-300 text-white hover:text-[#1086df]"
              >
                support@weldfox.com
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#1086df] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope />
              <a
                href="mailto:customercare@weldfox.com"
                className="group relative inline-block transition-colors duration-300 text-white hover:text-[#1086df]"
              >
                customercare@weldfox.com
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#1086df] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt />
              <a
                href="tel:+919611646033"
                className="group relative inline-block transition-colors duration-300 text-white hover:text-[#1086df]"
              >
                +91-9611646033
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#1086df] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt />
              <a
                href="tel:+919964314999"
                className="group relative inline-block transition-colors duration-300 text-white hover:text-[#1086df]"
              >
                +91-9964314999
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#1086df] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt />
              <a
                href="tel:+918073937590"
                className="group relative inline-block transition-colors duration-300 text-white hover:text-[#1086df]"
              >
                +91-8073937590
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#1086df] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Contact */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-3 border-l-4 border-[#1086df] pl-2">
            Quick Contact Us
          </h4>
          <form className="space-y-2 rounded-lg">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 bg-transparent border border-gray-600 outline-none text-white rounded-lg"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-2 bg-transparent border border-gray-600 outline-none text-white rounded-lg"
            />
            <input
              type="text"
              placeholder="Mobile No"
              className="w-full p-2 bg-transparent border border-gray-600 outline-none text-white rounded-lg"
            />
            <textarea
              placeholder="Message"
              rows={3}
              className="w-full p-2 bg-transparent border border-gray-600 outline-none text-white rounded-lg"
            />
            <button
              type="submit"
              className="bg-[#1086df] text-white px-4 py-2 mt-2 rounded-lg"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
        <div className="space-x-4 mb-2 md:mb-0">
          {[
            { label: "Home", path: "/" },
            { label: "About Us", path: "/about-us" },
            { label: "Contact Us", path: "/contact" },
          ].map(({ label, path }) => (
            <Link
              to={path}
              key={label}
              className="group relative inline-block transition-colors duration-300 text-white hover:text-[#1086df]"
            >
              {label}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#1086df] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        <div>
          Copyright © 2019. C4G Automation Pvt Ltd. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
