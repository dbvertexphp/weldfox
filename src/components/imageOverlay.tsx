import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTools, faPalette, faCogs } from "@fortawesome/free-solid-svg-icons";

const ImageOverlaySection = () => {
  const [selectedStep, setSelectedStep] = useState(1);

  const steps = [
    {
      title: "Consultation",
      description:
        "We start by understanding your <br/> requirements. The needs for <br/> space, security, and <br/> automation are analyzed to<br/>recommend the best rolling<br/> shutters, gates, garage doors,<br/> and fabrication solutions.",
      imageUrl: "https://metafabtech.com/wp-content/uploads/2024/05/1-5.webp",
      icon: faTools,
    },
    {
      title: "Design",
      description:
        "Then we create precision<br/> custom designs with the use of<br/> quality materials and high<br/> technology that can ensure<br/> durability, security, and smooth <br/> operation.",
      imageUrl: "https://metafabtech.com/wp-content/uploads/2024/05/2-7.webp",
      icon: faPalette,
    },
    {
      title: "Manufacturing",
      description:
        "After the design is approved,<br/> manufacturing starts with strict <br/>quality checks to ensure there <br/>are no flaws in rolling shutters,<br/> gates, garage doors, or<br/> automation systems.",
      imageUrl: "https://metafabtech.com/wp-content/uploads/2024/05/3-2.webp",
      icon: faCogs,
    },
    {
      title: "Installation",
      description:
        "Expert technicians take care of<br/> the installation process to<br/> provide smooth working. Long-<br/>term reliability through after-<br/>sales support, maintenance, and servicing is provided.",
      imageUrl:
        "https://metafabtech.com/wp-content/uploads/2024/05/elitegates-304408-automaticsecuritygate-blogbanner1-654x801.webp",
      icon: faTools,
    },
  ];

  return (
    <section className="relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 space-y-12">
        <div className="flex items-start justify-between">
          <div className="flex flex-col items-start ml-10">
            <div className="inline-block bg-white text-[#43b5e4] text-lg font-bold rounded-full px-4 py-2 mb-4">
              OUR WORK PROCESS
            </div>
            <h2 className="text-white text-2xl md:text-3xl font-bold leading-tight">
              Expert Handling from <br /> Start to Finish
            </h2>
          </div>
          <div className="max-w-lg">
            <p className="text-lg sm:text-xl text-white">
              We follow a systematic process that will <br />
              ensure quality manufacturing, hassle-free <br />
              installation, and reliable service with durable
              <br /> and efficient entrance automation and
              <br /> fabrication solutions.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between ">
          {/* Left Steps */}
          <div className="w-1/3 p-4 space-y-4 ml-10 rounded-xl ">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col items-start text-white font-semibold text-lg bg-[#1e3a8a] rounded-xl px-4 py-3 h-[100px] cursor-pointer transition-all duration-200 ${
                  selectedStep === index + 1
                    ? "bg-opacity-100 scale-105"
                    : "bg-opacity-70"
                }`}
                onClick={() => setSelectedStep(index + 1)}
              >
                <div className="flex items-center">
                  <FontAwesomeIcon
                    icon={step.icon}
                    className="text-white text-2xl mr-3"
                  />
                  <span>STEP {index + 1}</span>
                </div>
                <span className="mt-1">{step.title}</span>
              </div>
            ))}
          </div>

          {/* Right Content */}
          <div className="w-[55%] bg-white p-6 ml-4 rounded-2xl shadow-lg min-h-[450px]">
            <div className="flex items-start justify-between">
              <div className="w-2/3 pr-4">
                <div className="flex flex-col mb-4">
                  <span className="text-[#1e3a8a] text-lg font-semibold">
                    STEP {selectedStep}
                  </span>
                  <h3 className="text-3xl font-bold text-[#131022] mt-1">
                    {steps[selectedStep - 1].title}
                  </h3>
                </div>
                <div className="flex items-start">
                  <FontAwesomeIcon
                    icon={steps[selectedStep - 1].icon}
                    className="text-[#1e3a8a] text-4xl mr-4"
                  />
                  <p
                    className="text-[#585C78] text-[17px] ml-[40px]"
                    dangerouslySetInnerHTML={{
                      __html: steps[selectedStep - 1].description,
                    }}
                  />
                </div>
              </div>
              <div className="w-[50%] pl-4">
                <img
                  src={steps[selectedStep - 1].imageUrl}
                  alt={steps[selectedStep - 1].title}
                  className="w-full h-80 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://static01.nyt.com/images/2019/01/16/business/16biophilia-02/merlin_148399362_44159a55-8716-4e43-83bf-c99682850e4d-articleLarge.jpg?quality=75&auto=webp&disable=upscale')",
        }}
      ></div>

      {/* Blue Overlay */}
      <div
        className="absolute top-0 left-0 w-full"
        style={{
          height: "calc(100vh + 20px)",
          backgroundColor: "#43b5e4",
          opacity: 0.9,
        }}
      ></div>
    </section>
  );
};

export default ImageOverlaySection;
