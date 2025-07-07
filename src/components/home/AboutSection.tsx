import React from "react";
import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "../animation";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <motion.section
      id="about-us"
      className="bg-white py-16 px-4 sm:px-6 lg:px-12"
    >
      <motion.div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
		  viewport={{ once: true }}
          variants={slideUpVariants}
          className="space-y-6"
        >
          <motion.h1
            variants={slideUpVariants}
			viewport={{ once: true }}
            className="text-xl font-medium uppercase tracking-wider text-[#14163f]"
          >
            About WELDFOX
          </motion.h1>

          <motion.h3
            variants={slideUpVariants}
			viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#14163f]"
          >
            WELDFOX – Your Trusted Partner in Precision Fabrication & Architectural Metalworks
          </motion.h3>

          <motion.p
            variants={slideUpVariants}
			viewport={{ once: true }}
            className="text-lg text-gray-700 leading-relaxed"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus harum quasi perferendis sit quas exercitationem tenetur, necessitatibus commodi voluptas, nostrum rerum, doloremque vero fugiat. Labore ut laboriosam error sunt nesciunt corporis et totam praesentium voluptatem.
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dolores in saepe? Maxime, suscipit perspiciatis quod cupiditate ab assumenda voluptatibus.
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ad quisquam, architecto voluptatibus porro sequi!
            <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium tempora laboriosam aperiam soluta reprehenderit autem, commodi sint distinctio culpa nam voluptatem! Aperiam placeat iste ducimus quaerat veniam, minima dolorem rem totam laboriosam, fugit eligendi, explicabo commodi omnis ad maxime ab?
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
			viewport={{ once: true }}
            variants={zoomInVariants}
            className="pt-4"
          >
            <Link
              to="/about-us"
              className="inline-flex items-center text-[#14163f] font-medium hover:text-[#eb975a] transition-colors"
            >
              Learn more about our company
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
		  viewport={{ once: true }}
          variants={zoomInVariants}
          className="relative w-full"
        >
          <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
            <img
              src="/about-us.jpg"
              alt="About Weldfox"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Optional Quote */}
          <motion.div
            initial="hidden"
            whileInView="visible"
			viewport={{ once: true }}
            variants={zoomInVariants}
            className="absolute -bottom-6 -left-6 bg-[#14163f] p-6 rounded-lg shadow-lg max-w-sm"
          >
            <p className="text-lg text-white font-medium italic">
              “Precision in every weld, trust in every solution.”
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default AboutSection;
