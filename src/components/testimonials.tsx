import React from "react";
import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "../lib/animation";

const testimonials = [
  {
    text: "CodeScience has completely transformed our operations. Their team is incredibly skilled and professional.CodeScience has completely transformed our operations. Their team is incredibly skilled and professional.",
    author: "Amit Sharma",
  },
  {
    text: "We've seen a 200% increase in efficiency since partnering with CodeScience. Highly recommended! CodeScience has completely transformed our operations. Their team is incredibly skilled and professional.",
    author: "Priya Singh",
  },
  {
    text: "Their attention to detail and commitment to quality is outstanding. A truly reliable tech partner.CodeScience has completely transformed our operations. Their team is incredibly skilled and professional.",
    author: "Rohit Mehra",
  },
  {
    text: "Excellent support and services. They helped us scale our infrastructure seamlessly.CodeScience has completely transformed our operations. Their team is incredibly skilled and professional.",
    author: "Neha Kapoor",
  },
  {
    text: "Creative, professional, and always on time. Great experience working with the team.CodeScience has completely transformed our operations. Their team is incredibly skilled and professional.",
    author: "Vikram Patel",
  },
  {
    text: "They deliver what they promise. Our product launch was a huge success thanks to them!CodeScience has completely transformed our operations. Their team is incredibly skilled and professional.",
    author: "Anjali Verma",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-[#F9F9F9] py-16 px-4">
      <motion.div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
          className="text-5xl font-bold text-[#422eb1] mb-2 inline-block relative"
        >
          Testimonials
          <span className="absolute left-0 -bottom-2 w-full h-1 bg-[#e09366] rounded-full"></span>
        </motion.h2>

        <p className="text-center text-base font-semibold mb-7 text-[#0e183a]">
          See what people say about us
        </p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideUpVariants}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-1 gap-y-3"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-none p-6 w-[400px] h-[200px] flex flex-col justify-between text-center text-base transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              <p className="text-gray-800 text-base">“{testimonial.text}”</p>
              <p className="text-[#ff6448] font-semibold text-base">
                — {testimonial.author}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TestimonialsSection;
