import React from "react";
import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "../lib/animation";

const AboutUs = () => {
  return (
    <motion.section className="bg-white py-16 px-4 sm:px-6 lg:px-12">
      <motion.div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideUpVariants}
          className="w-full md:w-1/2 mt-4 md:mt-9"
        >
          <img
            src="/about-us.jpg"
            alt="About Weldfox"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Right Circles Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
          className="w-full md:w-1/2 flex justify-center items-center relative mt-10 md:mt-0"
        >
          {/* Make circles responsive with relative container */}
          <div className="w-full overflow-x-auto md:overflow-visible">
            <div className="relative w-full max-w-md h-[600px] sm:h-[600px] md:min-w-0 mx-auto">
              {/* Orange Circle */}
              <div className="w-[30vw] sm:w-[70vw] md:w-80 h-[30vw] sm:h-[70vw] md:h-80 bg-[#f89147] rounded-full absolute top-[15%] sm:top-[18%] md:top-24 left-[2%] sm:left-[3%] md:left-8 flex items-center justify-center text-center p-4 shadow-xl z-10">
                <p className="text-white text-[2.5vw] sm:text-[3vw] md:text-base leading-relaxed font-medium">
                  We follow a systematic process that ensures quality manufacturing,
                  hassle-free installation, and reliable service with durable and
                  efficient entrance automation and fabrication solutions.
                </p>
              </div>

              {/* Blue Circle */}
              <div className="w-[20vw] sm:w-[35vw] md:w-44 h-[20vw] sm:h-[35vw] md:h-44 bg-[#14163f] rounded-full absolute top-0 left-[60%] sm:left-[70%] md:left-28 flex items-center justify-center text-white text-[3vw] sm:text-[3.5vw] md:text-lg font-bold shadow-lg z-20 text-center px-2">
                Why Us?
              </div>

              {/* Yellow Circle */}
              <div className="w-[30vw] sm:w-[70vw] md:w-80 h-[30vw] sm:h-[70vw] md:h-80 bg-[#f4d35e] rounded-full absolute top-[80%] left-[80%] transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-center p-4 shadow-xl z-30">
                <p className="text-[#14163f] text-[2.5vw] sm:text-[3vw] md:text-base font-semibold">
                  We ensure quality manufacturing, hassle-free installation, and
                  reliable service with durable and efficient automation solutions.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Quote */}
      <div className="mt-16 text-center px-4">
        <p className="text-[#14163f] text-base sm:text-lg md:text-xl font-semibold italic">
          “Precision in every weld, trust in every solution.”
        </p>
      </div>
    </motion.section>
  );
};

export default AboutUs;