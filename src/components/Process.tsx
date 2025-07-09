import React from "react";

const steps = [
  {
    img: "/process1.jpg",
    number: "1",
    title: "Choose a Service",
    description: "Aute irure dolor reprehenderit velit esse cillum dolore fugiat",
  },
  {
    img: "/process2.jpg",
    number: "2",
    title: "Get a Free Quote",
    description: "Aute irure dolor reprehenderit velit esse cillum dolore fugiat",
  },
  {
    img: "/process3.jpg",
    number: "3",
    title: "Weldfox at Work",
    description: "Aute irure dolor reprehenderit velit esse cillum dolore fugiat",
  },
  {
    img: "/process4.jpg",
    number: "4",
    title: "Your Job Done!",
    description: "Aute irure dolor reprehenderit velit esse cillum dolore fugiat",
  },
];

const Process = () => {
  return (
    <section className="relative w-full h-[700px] overflow-hidden">
      {/* Background */}
      <img
        src="/services1.jpg"
        className="absolute inset-0 w-full h-full object-cover"
        alt="Services Background"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#1a2940] bg-opacity-95 px-4 flex flex-col items-center">
        {/* Headings */}
        <div className="text-center mt-20">
          <p className="text-[#8a8a8a] max-w-xl mx-auto mb-2 tracking-wider uppercase">
            THE WELDFOX COMPANY
          </p>
          <h2 className="text-4xl font-bold text-[#ffffff]">
            How Weldfox Works
          </h2>
        </div>

        {/* Steps */}
        <div className="flex flex-wrap justify-center items-center gap-[70px] max-w-7xl mx-auto mt-16 relative">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center text-center max-w-[180px] relative">
                {/* Step Circle with image and outline */}
                <div className="relative">
                  <div className="w-[250px] h-[250px] rounded-full overflow-hidden relative z-10 outline outline-[3px] outline-white outline-offset-4">
                    <img
                      src={step.img}
                      alt={step.title}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>

                  {/* Floating Step Number */}
                  <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 z-20 w-[60px] h-[60px] bg-[#F79D2B] text-white text-xl flex items-center justify-center rounded-full font-sm shadow-md border-4 border-[#1a2940]">
                    {step.number}
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-md text-white mt-10">{step.title}</h3>
                <p className="text-sm text-[#c0c0c0] mt-2">{step.description}</p>
              </div>

              {/* Arrow between steps */}
              {index !== steps.length - 1 && (
                <div className="text-4xl text-white hidden sm:block">→</div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
