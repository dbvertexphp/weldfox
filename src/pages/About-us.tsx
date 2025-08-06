import React from "react";
import { motion } from "framer-motion";
import HeaderPages from "@/components/Header-Pages";
import Footer from "@/components/Footer";
import Video from "@/components/Video";
import Experience from "@/components/Experience";
import Testimonials from "@/components/Testimonials";
import { Link } from "react-router-dom";
import Counting from "@/components/Counting";
import FeatureCards from "@/components/FeatureCards";
import { FaCheck } from "react-icons/fa";
import StickyHeader from "@/components/StickyHeader";

const AboutUs = () => {
  return (
    <div className="font-montserrat">
      {/* 🔹 Header */}
      <HeaderPages />

      {/* 🔹 Banner */}
      <div className="relative w-full">
        <img
          src="/about-banner.jpg"
          alt="About Us Banner"
          className="w-full h-[300px] object-cover"
        />
        <div className="absolute inset-0 bg-[#1a2940] opacity-80"></div>
      </div>

      <StickyHeader />

      {/* 🔹 Title Box */}
      <div className="relative z-10 mt-[-270px] flex justify-center items-center px-4 min-h-[calc(100vh-300px)]">
        <div className="bg-white w-full max-w-[700px] shadow-lg p-6 md:p-10 text-center">
          <h2 className="text-4xl md:text-6xl font-md text-gray-900 mb-2">
            About Us
          </h2>
          <p className="text-gray-500 leading-relaxed text-base">
            <Link
              to="/"
              className="hover:text-[#F79D2B] transition-colors duration-200"
            >
              Home
            </Link>{" "}
            /{" "}
            <Link
              to="/pages/About-us"
              className="hover:text-[#F79D2B] transition-colors duration-200"
            >
              About
            </Link>
          </p>
        </div>
      </div>

      {/* 🔹 Feature Cards */}
      <div className="mt-[-90px]">
        <FeatureCards />
      </div>

      {/* 🔹 About Section with Animation */}
      <section className="w-full bg-white py-16 px-4 flex justify-center">
        <div className="max-w-7xl w-full grid md:grid-cols-2 gap-0 items-center m-0 p-0">
          {/* 🔸 Animated Image (From Left) */}
          <motion.div
            className="w-full"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <img
              src="/about-us.jpg"
              alt="Tools"
              className="w-[80%] h-auto object-cover m-0 p-0"
            />
          </motion.div>

          {/* Content */}
          <div>
            <p className="text-sm text-gray-400 tracking-wider uppercase mb-2">
              The METAL & CRAFT  AUTOMATION Company
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-[#1a2940] mb-4 leading-tight">
              <span className="border-l-4 border-[#F79D2B] pl-4 block">
                With decades of experience <br />
                and true commitment to <br />
                Handyman Solutions
              </span>
            </h2>

            <p className="text-gray-600 mb-4">
              <br />
              Veniam quis nostrud exercitation ullamco laboris nisi ut aliquip
              exa aute <br />
              dolor in reprehenderit in voluptate velit esse cillum dolore nulla
              par excep <br />
              sint occaecat. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit
              <br /> eiusmod tempor incididunt ut labore et dolore.
            </p>
            <p className="text-gray-600 mb-6">
              <br />
              Magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullam <br /> laboris nisi ut aliquip ex ea commodo consequat. Duis
              aute irure dolor
              <br /> enderit in voluptate velit esse cillum.
            </p>

            <ul className="space-y-3">
              {[
                "Dedicated and knowledgeable professionals",
                "Offering all jobs guaranteed & neatly done",
                "We provide 24/7 on time services",
              ].map((point, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-[#1a2940] font-medium"
                >
                  <FaCheck className="text-[#F79D2B]" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 🔹 Video Section with Right Image Slide-in */}

      <Video />

      <Counting />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default AboutUs;
