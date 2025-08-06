import React from "react";
import { motion } from "framer-motion";
import HeaderPages from "@/components/Header-Pages";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import StickyHeader from "@/components/StickyHeader";

const Contact = () => {
  return (
    <div className="font-montserrat">
      <HeaderPages />

      {/* Banner */}
      <div className="relative w-full">
        <img
          src="/about-banner.jpg"
          alt="About Us Banner"
          className="w-full h-[300px] object-cover"
        />
        <div className="absolute inset-0 bg-[#1a2940] opacity-80"></div>
      </div>

      <StickyHeader />

      {/* Title */}
      <div className="relative z-10 mt-[-270px] flex justify-center items-center px-4 min-h-[calc(100vh-300px)]">
        <div className="bg-white w-full max-w-[700px] shadow-lg p-6 md:p-10 text-center">
          <h2 className="text-4xl md:text-6xl font-md text-gray-900 mb-2">
            Contact Us
          </h2>
          <p className="text-gray-500 leading-relaxed text-base">
            <Link
              to="/"
              className="hover:text-[#F79D2B] transition-colors duration-200"
            >
              HOME
            </Link>{" "}
            /
            <Link
              to="/pages/Contact"
              className="hover:text-[#F79D2B] transition-colors duration-200"
            >
              CONTACT US
            </Link>
          </p>
        </div>
      </div>

      {/* Form + Info Section with Animation */}
      <div className="w-full px-4 py-16 flex justify-center items-start bg-white mt-[-1700px] md:mt-[-100px] ml-0 md:ml-[100px]">
        <div className="w-full max-w-6xl flex flex-col md:flex-row gap-[70px] px-4 md:px-0 mx-auto">
          
          {/* ✅ Animated Left Section (Form) */}
          <motion.div
            className="w-full md:w-1/2"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <p className="text-sm uppercase tracking-wide text-gray-400 mb-2">
              THE SMARTMAN COMPANY
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a2940] mb-4">
              <span className="border-l-4 border-[#f79d2b] pl-3">
                Send a Message
              </span>
            </h2>
            <p className="text-gray-500 mb-8">
              Exercitation ullamco laboris nisi ut aliquip exa aute irure dolor
              reprehenderit in sed ipsum voluptate velit esse cillum.
            </p>

            <form className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <input
                type="text"
                placeholder="Your Name *"
                className="border-b border-[#c9c4c4] py-2 px-1 outline-none col-span-1"
              />
              <input
                type="email"
                placeholder="Email *"
                className="border-b border-[#c9c4c4] py-2 px-1 outline-none col-span-1"
              />
              <input
                type="text"
                placeholder="Phone No."
                className="border-b border-[#c9c4c4] py-2 px-1 outline-none col-span-1"
              />
              <input
                type="text"
                placeholder="Location"
                className="border-b border-[#c9c4c4] py-2 px-1 outline-none col-span-1"
              />
              <input
                type="text"
                placeholder="Subject"
                className="border-b border-[#c9c4c4] py-2 px-1 outline-none sm:col-span-2"
              />
              <textarea
                placeholder="Message"
                className="border-b border-[#c9c4c4] py-2 px-1 outline-none resize-none sm:col-span-2"
                rows={4}
              ></textarea>

              <div className="sm:col-span-2 mt-4">
                <button
                  type="submit"
                  className="relative overflow-hidden group text-white font-semibold px-6 py-3 rounded shadow-md bg-[#f79d2b] transition-all duration-500"
                >
                  <span className="relative z-10 transition-colors duration-500 group-hover:text-[#f79d2b]">
                    Send Message
                  </span>
                  <span className="absolute inset-0 bg-white w-0 group-hover:w-full transition-all duration-500 ease-in-out"></span>
                </button>
              </div>
            </form>
          </motion.div>

          {/* ✅ Animated Right Section (Info Box) */}
          <motion.div
            className="w-full md:w-1/3 bg-[#1a2940] text-white p-8 space-y-[50px]"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div>
              <h4 className="text-3xl font-semibold mb-1 border-l-4 border-[#f79d2b] pl-2">
                Address
              </h4>
              <p className="text-base text-gray-300">
                26 Main Ringer House, NewYork,
                <br />
                58920 NY, United States
              </p>
            </div>

            <div>
              <h4 className="text-3xl font-semibold mb-1 border-l-4 border-[#f79d2b] pl-2">
                Phone
              </h4>
              <p className="text-base text-gray-300">
                +1 (233) 415 9872
                <br />
                Helpline: 0800 12345
              </p>
            </div>

            <div>
              <h4 className="text-3xl font-semibold mb-1 border-l-4 border-[#f79d2b] pl-2">
                Email
              </h4>
              <p className="text-base text-gray-300">abc@example.com</p>
            </div>

            <div>
              <h4 className="text-3xl font-semibold mb-1 border-l-4 border-[#f79d2b] pl-2">
                Working Hours
              </h4>
              <p className="text-base text-gray-300">Mon to Sat: 9am to 6pm</p>
            </div>

            <div className="flex gap-4 text-gray-300 text-xl pt-2">
              <i className="fab fa-twitter hover:text-[#f79d2b] cursor-pointer"></i>
              <i className="fab fa-facebook-f hover:text-[#f79d2b] cursor-pointer"></i>
              <i className="fab fa-linkedin-in hover:text-[#f79d2b] cursor-pointer"></i>
              <i className="fab fa-youtube hover:text-[#f79d2b] cursor-pointer"></i>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
