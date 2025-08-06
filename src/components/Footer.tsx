import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGooglePlusG,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom"; // For internal routing
// Make sure react-router-dom is installed

const Footer = () => {
  return (
    <footer className="bg-[#0e1621] text-white px-10 md:px-20 py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
        {/* Company Info (Left) */}
        <div className="md:col-span-4">
          <div className="flex items-center gap-2 mb-4">
            <img src="/logo-1.jpeg" alt="Logo" className="w-[120px] h-[120px]" />
          </div>
          <p className="text-[#A0A0A0] text-base leading-relaxed mb-6">
            Veniam quis nostrud exercitation ullamco laboris nisi ut aliquip exa
            aute irure dolor in reprehenderit in voluptate velit dolore dolor
            sit amt consectetur adipisicing elit sed eiusmod tempor.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3">
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center border border-gray-500 rounded-full hover:text-[#f79d2b] transition"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center border border-gray-500 rounded-full hover:text-[#f79d2b] transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center border border-gray-500 rounded-full hover:text-[#f79d2b] transition"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center border border-gray-500 rounded-full hover:text-[#f79d2b] transition"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Our Services (Center - Two Column Layout) */}
        <div className="md:col-span-4 flex justify-left">
          <div className="w-full">
            <h3 className="text-lg font-semibold mb-4 border-b border-[#f79d2b] inline-block pb-1 text-left w-[40%]">
              Our Services
            </h3>
            <div className="grid grid-cols-2 gap-x-6 text-[#A0A0A0] text-base">
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/pages/Services/rolling-shutter"
                    className="hover:text-[#f79d2b] transition"
                  >
                    Rolling Shutter
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pages/Services/gates"
                    className="hover:text-[#f79d2b] transition"
                  >
                    Gates
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pages/Services/railings"
                    className="hover:text-[#f79d2b] transition"
                  >
                    Railings
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pages/Services/fencing"
                    className="hover:text-[#f79d2b] transition"
                  >
                    Fencing
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pages/Services/staircases"
                    className="hover:text-[#f79d2b] transition"
                  >
                    Staircases
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pages/Services/ladders"
                    className="hover:text-[#f79d2b] transition"
                  >
                    Ladders
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pages/Services/clay-tiles"
                    className="hover:text-[#f79d2b] transition"
                  >
                    Clay Tiles
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pages/Services/glass-skylights"
                    className="hover:text-[#f79d2b] transition"
                  >
                    Glass Skylights
                  </Link>
                </li>
              </ul>

              <ul className="space-y-2">
                <li>
                  <Link
                    to="/pages/Services/glass-pergolas"
                    className="hover:text-[#f79d2b] transition"
                  >
                    Glass Pergolas
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pages/Services/shed-work"
                    className="hover:text-[#f79d2b] transition"
                  >
                    Shed Work
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pages/Services/peb-works"
                    className="hover:text-[#f79d2b] transition"
                  >
                    PEB Work
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pages/Services/window-grills"
                    className="hover:text-[#f79d2b] transition"
                  >
                    Window Grills
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pages/Services/safety-grills"
                    className="hover:text-[#f79d2b] transition"
                  >
                    Safety Grills
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pages/Services/covering-grills"
                    className="hover:text-[#f79d2b] transition"
                  >
                    Covering Grills
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pages/Services/invisible-grills"
                    className="hover:text-[#f79d2b] transition"
                  >
                    Invisible Grills
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pages/Services/glass-glazing"
                    className="hover:text-[#f79d2b] transition"
                  >
                    Glass Glazing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Info (Right) */}
        <div className="md:col-span-4 flex justify-end">
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-[#f79d2b] inline-block pb-1">
              Contact
            </h3>
            <p className="text-[#ffffff] font-semibold text-lg mb-2 hover:text-[#e38816] transition cursor-pointer">
              (233) 415 9872
            </p>
            <p className="text-[#A0A0A0] text-base hover:text-[#f79d2b] transition cursor-pointer">
              26 Ringer House, Newyork,
              <br />
              58920 United States
            </p>
            <p className="mt-2 text-[#A0A0A0] text-base hover:text-[#f79d2b] transition cursor-pointer">
              info@example.com
            </p>
            <p className="mt-2 text-[#A0A0A0] text-base hover:text-[#f79d2b] transition cursor-pointer">
              Mon to Sat: 9am to 6pm
              <br />
              Sunday: Closed
            </p>

            <Link to="/pages/Contact">
              <button className="mt-4 bg-[#f79d2b] hover:bg-[#e38816] text-white font-semibold px-5 py-3 rounded shadow-md transition">
                Request A Quote
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-16 border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between text-sm text-[#a0a0a0]">
        <p>© 2025 METAL & CRAFT AUTOMATION. All rights reserved.</p>
        <div className="flex gap-4 mt-3 md:mt-0">
          <Link to="/terms" className="hover:text-[#f79d2b] transition">
            Terms of Service
          </Link>
          <span>|</span>
          <Link to="/privacy" className="hover:text-[#f79d2b] transition">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
