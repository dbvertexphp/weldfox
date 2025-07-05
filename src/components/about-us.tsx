import React from "react";
import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "../lib/animation";

const AboutUs = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-12">
      <motion.div
              initial="hidden"
              whileInView="visible"
              variants={zoomInVariants} className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Image */}
        <div className="w-full md:w-1/2 mt-4 md:mt-9">
          <img
            src="/about-us.jpg"
            alt="About Weldfox"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Right Circles Section */}
        <div className="w-full md:w-1/2 flex justify-center items-center relative mt-10 md:mt-0">
          <div className="relative w-full max-w-md h-[600px] md:h-[600px]">
            {/* Orange Circle */}
            <div className="w-80 h-80 bg-[#f89147] rounded-full absolute top-24 left-4 sm:left-8 flex items-center justify-center text-center p-4 shadow-xl z-10">
              <p className="text-white text-sm md:text-base leading-relaxed font-medium">
                We follow a systematic process that ensures quality manufacturing,
                hassle-free installation, and reliable service with durable and
                efficient entrance automation and fabrication solutions.
              </p>
            </div>

            {/* Blue Circle */}
            <div className="w-44 h-44 bg-[#14163f] rounded-full absolute top-0 left-[80%] sm:left-28 flex items-center justify-center text-white text-sm md:text-lg font-bold shadow-lg z-20">
              Why Us?
            </div>

            {/* Yellow Circle */}
            <div className="w-80 h-80 bg-[#f4d35e] rounded-full mt-[00px] absolute top-[80%] left-[80%] transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-center p-4 shadow-xl z-30">
              <p className="text-[#14163f] text-sm md:text-base font-semibold">
                We ensure quality manufacturing, hassle-free installation, and
                reliable service with durable and efficient automation solutions.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bottom Quote */}
      <div className="mt-16 text-center px-4">
        <p className="text-[#14163f] text-base sm:text-lg md:text-xl font-semibold italic">
          “Precision in every weld, trust in every solution.”
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
