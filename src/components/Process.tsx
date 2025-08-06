import React from "react";
import { motion } from "framer-motion";

// Animation variants
const containerVariants = {
      hidden: {},
      visible: {
            transition: {
                  staggerChildren: 0.3,
            },
      },
};

const imageVariants = {
      hidden: { opacity: 0, y: 40 },
      visible: {
            opacity: 1,
            y: 0,
            transition: {
                  duration: 0.8,
                  ease: "easeOut",
            },
      },
};

const steps = [
      {
            img: "/process1.jpg",
            number: "1",
            title: "Choose a Service",
            description:
                  "Aute irure dolor reprehenderit velit esse cillum dolore fugiat",
      },
      {
            img: "/process2.jpg",
            number: "2",
            title: "Get a Free Quote",
            description:
                  "Aute irure dolor reprehenderit velit esse cillum dolore fugiat",
      },
      {
            img: "/process3.jpg",
            number: "3",
            title: "METAL & CRAFT at Work",
            description:
                  "Aute irure dolor reprehenderit velit esse cillum dolore fugiat",
      },
      {
            img: "/process4.jpg",
            number: "4",
            title: "Your Job Done!",
            description:
                  "Aute irure dolor reprehenderit velit esse cillum dolore fugiat",
      },
];

const Process = () => {
      return (
            <section className="relative w-full overflow-hidden mt-20">
                  <div className="absolute inset-0">
                        <img
                              src="/services1.jpg"
                              alt="Services Background"
                              className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-[#1a2940]/95" />
                  </div>

                  {/* 🔹 Content */}
                  <div className="relative z-10 px-4 py-20 max-w-8xl mx-auto">
                        {/* 🔸 Heading */}
                        <div className="text-center">
                              <p className="text-[#8a8a8a] mb-2 tracking-wider uppercase">
                                    THE METAL & CRAFT AUTOMATION COMPANY
                              </p>
                              <h2 className="text-4xl font-bold text-white">
                                    How METAL & CRAFT AUTOMATION Works
                              </h2>
                        </div>

                        {/* 🔸 Steps */}
                        <motion.div
                              variants={containerVariants}
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ once: true }}
                              className="mt-20 flex flex-col gap-20 sm:gap-10 sm:flex-row sm:flex-wrap sm:justify-center items-center"
                        >
                              {steps.map((step, index) => (
                                    <React.Fragment key={index}>
                                          {/* Step Card */}
                                          <div className="flex flex-col items-center text-center w-full sm:w-[220px] relative">
                                                <motion.div
                                                      variants={imageVariants}
                                                      className="relative"
                                                >
                                                      {/* Animated Image Circle */}
                                                      <div className="w-[170px] h-[170px] rounded-full overflow-hidden outline outline-[3px] outline-white outline-offset-4">
                                                            <img
                                                                  src={step.img}
                                                                  alt={
                                                                        step.title
                                                                  }
                                                                  className="w-full h-full object-cover"
                                                            />
                                                      </div>

                                                      {/* Step Number */}
                                                      <div className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 w-[60px] h-[60px] bg-[#F79D2B] text-white text-xl flex items-center justify-center rounded-full font-semibold shadow-md border-4 border-[#1a2940]">
                                                            {step.number}
                                                      </div>
                                                </motion.div>

                                                {/* Text */}
                                                <h3 className="text-xl font-md text-white mt-10">
                                                      {step.title}
                                                </h3>
                                                <p className="text-sm text-[#c0c0c0] mt-2 px-4">
                                                      {step.description}
                                                </p>
                                          </div>

                                          {/* Arrow Between Steps */}
                                          {index !== steps.length - 1 && (
                                                <div className="hidden sm:flex items-center justify-center">
                                                      <img
                                                            src="/arrow.svg"
                                                            alt="Arrow"
                                                            className="w-14 h-8 mt-16"
                                                      />
                                                </div>
                                          )}
                                    </React.Fragment>
                              ))}
                        </motion.div>
                  </div>
            </section>
      );
};

export default Process;
