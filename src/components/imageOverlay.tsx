import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTools, faPalette, faCogs } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "../lib/animation";

const ImageOverlaySection = () => {
  const [selectedStep, setSelectedStep] = useState(1);

  const steps = [
    {
      title: "Consultation",
      description: `We start by understanding your requirements. The needs for space, security, and automation are analyzed to recommend the best rolling shutters, gates, garage doors, and fabrication solutions.`,
      imageUrl: "https://metafabtech.com/wp-content/uploads/2024/05/1-5.webp",
      icon: faTools,
    },
    {
      title: "Design",
      description: `Then we create precision custom designs with the use of quality materials and high technology that can ensure durability, security, and smooth operation.`,
      imageUrl: "https://metafabtech.com/wp-content/uploads/2024/05/2-7.webp",
      icon: faPalette,
    },
    {
      title: "Manufacturing",
      description: `After the design is approved, manufacturing starts with strict quality checks to ensure there are no flaws in rolling shutters, gates, garage doors, or automation systems.`,
      imageUrl: "https://metafabtech.com/wp-content/uploads/2024/05/3-2.webp",
      icon: faCogs,
    },
    {
      title: "Installation",
      description: `Expert technicians take care of the installation process to provide smooth working. Long-term reliability through after-sales support, maintenance, and servicing is provided.`,
      imageUrl: "https://metafabtech.com/wp-content/uploads/2024/05/elitegates-304408-automaticsecuritygate-blogbanner1-654x801.webp",
      icon: faTools,
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#14163f] opacity-90 z-0"></div>

      {/* Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-[-1]"
        style={{
          backgroundImage: `url('https://static01.nyt.com/images/2019/01/16/business/16biophilia-02/merlin_148399362_44159a55-8716-4e43-83bf-c99682850e4d-articleLarge.jpg?quality=75&auto=webp&disable=upscale')`,
        }}
      />

      {/* Main Container */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={zoomInVariants} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-6 lg:gap-12">
          {/* Left Heading */}
          <div className="flex-1">
            <div className="inline-block bg-white text-[#3036b1] text-sm sm:text-lg font-bold rounded-full px-4 py-2 mb-4">
              OUR WORK PROCESS
            </div>
            <h2 className="text-white text-2xl md:text-3xl font-bold leading-tight">
              Expert Handling from <br className="hidden sm:block" /> Start to Finish
            </h2>
          </div>

          {/* Right Paragraph */}
          <div className="flex-1">
            <p className="text-sm sm:text-base md:text-lg text-white leading-relaxed">
              We follow a systematic process that ensures quality manufacturing, hassle-free
              installation, and reliable service with durable and efficient entrance automation and
              fabrication solutions.
            </p>
          </div>
        </div>

        {/* Steps and Content */}
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          {/* Step Buttons */}
          <div className="w-full lg:w-1/3 space-y-4">
            {steps.map((step, index) => (
              <div
                key={index}
                onClick={() => setSelectedStep(index + 1)}
                className={`flex flex-col items-start text-white font-semibold text-base sm:text-lg bg-[#ff9549] rounded-xl px-4 py-3 cursor-pointer transition-all duration-200 hover:scale-105 hover:z-20 hover:shadow-lg ${
                  selectedStep === index + 1
                    ? "bg-opacity-100 scale-105 z-10"
                    : "bg-opacity-80"
                }`}
              >
                <div className="flex items-center">
                  <FontAwesomeIcon
                    icon={step.icon}
                    className="text-white text-xl sm:text-2xl mr-3"
                  />
                  <span>STEP {index + 1}</span>
                </div>
                <span className="mt-1">{step.title}</span>
              </div>
            ))}
          </div>

          {/* Step Details */}
          <div className="w-full lg:w-[60%]">
            <div className="bg-white p-6 rounded-2xl shadow-lg w-full">
              <div className="flex flex-col sm:flex-row items-start justify-between gap-6">
                {/* Text Section */}
                <div className="w-full sm:w-2/3">
                  <div className="mb-4">
                    <span className="text-[#3036b1] text-base sm:text-lg font-semibold">
                      STEP {selectedStep}
                    </span>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#14163f] mt-1">
                      {steps[selectedStep - 1].title}
                    </h3>
                  </div>
                  <div className="flex items-start">
                    <FontAwesomeIcon
                      icon={steps[selectedStep - 1].icon}
                      className="text-[#3036b1] text-2xl sm:text-3xl mr-4 mt-1"
                    />
                    <p className="text-[#585C78] text-sm sm:text-base leading-relaxed">
                      {steps[selectedStep - 1].description}
                    </p>
                  </div>
                </div>

                {/* Image */}
                <div className="w-full sm:w-[45%]">
                  <img
                    src={steps[selectedStep - 1].imageUrl}
                    alt={steps[selectedStep - 1].title}
                    className="w-full h-60 sm:h-72 md:h-80 object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ImageOverlaySection;
