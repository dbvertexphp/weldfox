import React from "react";
import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaPaperPlane,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "../lib/animation";

const Footer = () => {
  return (
    <footer className="bg-[#0c1636] text-white px-4 md:px-8 py-10">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={zoomInVariants}
        className="max-w-7xl mx-auto text-sm"
      >
        {/* Grid Layout: 3 Columns, Centered Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* LEFT COLUMN */}
          <div className="flex flex-col items-center text-center space-y-4">
            {/* Weldfox Heading */}
            <h2 className="text-4xl font-extrabold bg-gradient-to-r from-[#ff6f61] to-[#ffb88c] text-transparent bg-clip-text leading-tight">
              Weldfox - <br /> Imagination <br /> to Reality
            </h2>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a href="#">
                <FaLinkedin className="hover:text-[#eb975a] text-white h-6 w-6" />
              </a>
              <a href="#">
                <FaInstagram className="hover:text-[#eb975a] text-white h-6 w-6" />
              </a>
              <a href="#">
                <FaYoutube className="hover:text-[#eb975a] text-white h-6 w-6" />
              </a>
            </div>

            {/* Newsletter Title */}
            <label className="text-xl font-bold bg-gradient-to-r from-[#ff6f61] to-[#ffb88c] text-transparent bg-clip-text">
              Our Newsletter
            </label>

            {/* Newsletter Input */}
            <div className="flex w-full max-w-xs">
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full px-3 py-2 rounded-l-md text-black outline-none"
              />
              <button className="w-10 h-10 flex items-center justify-center rounded-r-md bg-gradient-to-r from-[#ff6f61] to-[#ffb88c]">
                <FaPaperPlane className="text-white text-sm" />
              </button>
            </div>
          </div>

          {/* MIDDLE COLUMN */}
          <div className="flex flex-col items-center text-center justify-center space-y-6">
            {/* Contact Us + Useful Links */}
            <div className="flex flex-col md:flex-row gap-6 w-full justify-center">
              {/* Contact Us */}
              <div className="text-left">
                <h4 className="font-bold text-xl mb-1 bg-gradient-to-r from-[#ff6f61] to-[#ffb88c] text-transparent bg-clip-text">
                  Contact Us
                </h4>
                <ul className="space-y-1">
                  {[
                    {
                      label: "info@weldfox.com",
                      href: "mailto:info@weldfox.com",
                    },
                    {
                      label: "support@weldfox.com",
                      href: "mailto:support@weldfox.com",
                    },
                    { label: "+91-0123456789", href: "tel:+910123456789" },
                    { label: "+91-0123456789", href: "tel:+910123456789" },
                  ].map(({ label, href }, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      {href.includes("mailto") ? (
                        <FaEnvelope />
                      ) : (
                        <FaPhoneAlt />
                      )}
                      <a
                        href={href}
                        className="text-base font-semibold text-white hover:bg-gradient-to-r hover:from-[#ff6f61] hover:to-[#ffb88c] hover:text-transparent hover:bg-clip-text"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Useful Links */}
              <div className="text-left">
                <h4 className="font-bold text-xl mb-1 bg-gradient-to-r from-[#ff6f61] to-[#ffb88c] text-transparent bg-clip-text">
                  Useful Links
                </h4>
                <ul className="space-y-1">
                  {[
                    { label: "Home", path: "/" },
                    { label: "About Us", path: "/about-us" },
                    { label: "Our Products", path: "/product" },
                    { label: "Services", path: "/services" },
                    { label: "Contact", path: "/contact" },
                  ].map(({ label, path }) => (
                    <li key={label}>
                      <Link
                        to={path}
                        className="text-base font-semibold text-white hover:bg-gradient-to-r hover:from-[#ff6f61] hover:to-[#ffb88c] hover:text-transparent hover:bg-clip-text"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Location */}
            <div className="text-base font-semibold text-white max-w-sm">
              <h4 className="font-bold text-xl mb-1 bg-gradient-to-r from-[#ff6f61] to-[#ffb88c] text-transparent bg-clip-text">
                Location
              </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus officiis explicabo eos, fuga porro, obcaecati
                aspernatur.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col items-center text-center space-y-3 max-w-sm mx-auto">
            <h4 className="font-bold text-xl mb-2 bg-gradient-to-r from-[#ff6f61] to-[#ffb88c] text-transparent bg-clip-text">
              Quick Contact Us
            </h4>
            <input
              type="text"
              placeholder="Name"
              className="w-full px-3 py-2 bg-transparent border border-gray-300 outline-none text-white rounded"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-3 py-2 bg-transparent border border-gray-300 outline-none text-white rounded"
            />
            <input
              type="text"
              placeholder="Mobile No"
              className="w-full px-3 py-2 bg-transparent border border-gray-300 outline-none text-white rounded"
            />
            <textarea
              rows={2}
              placeholder="Message"
              className="w-full px-3 py-2 bg-transparent border border-gray-300 outline-none text-white rounded"
            />
            <button className="w-full bg-gradient-to-r from-[#ff6f61] to-[#ff6f61] text-white px-4 py-2 rounded-full text-sm font-bold">
              Send
            </button>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t border-gray-700 pt-4 text-center text-[11px] text-white">
          © {new Date().getFullYear()} Weldfox Pvt Ltd. All Rights Reserved.
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
