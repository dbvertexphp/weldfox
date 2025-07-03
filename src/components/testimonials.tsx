import React, { useEffect, useState } from "react";
// import "./Testimonials.css";

const Testimonials = () => {
  const [scrollIndex, setScrollIndex] = useState(0);

  const testimonials = [
    { id: 1, text: "I’m thrilled with the fabrication work on my residential building. The quality is outstanding, and technician Chetan’s exceptional professionalism, dedication, and keen attention to detail made a significant positive difference. I highly recommend this company and especially commend Chetan!", author: "ANIL R/FOUNDER" },
    { id: 2, text: "I recently purchased an automatic shutter from Arko Fabrication and was thoroughly impressed. The team was professional, responsive, and adhered to the timeline. The skilled installation crew left everything clean and ready. Excellent customer support followed up to ensure satisfaction. Highly recommend!", author: "RAJESH K." },
    { id: 3, text: "The team installing our automatic sliding gate was punctual, professional, and thorough. They provided helpful advice, completed the installation smoothly and ahead of schedule, and ensured everything was perfectly aligned. We’re thrilled with the exceptional product and outstanding service!", author: "PRIYA M." },
    { id: 4, text: "The team efficiently installed our boom barrier, integrating it seamlessly with our access control system. Their proactive testing and attention to detail ensured smooth operation, adding unmatched convenience and enhanced security to our property. Highly recommended for their professionalism!", author: "SANJAY D" },
    { id: 5, text: "We’re thrilled with the team’s exceptional quality and professionalism on our structural project. They combined expert planning, meticulous attention to detail, top-notch management, and impeccable craftsmanship, delivering a beautifully constructed and highly durable building. Highly recommended!", author: "NISHA S" },
  ];

  // Extend testimonials for seamless infinite scroll (2x for smooth looping)
  const extendedTestimonials = [...testimonials, ...testimonials];

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 2000); // Scroll one card every 2 seconds
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Calculate transform for smooth scrolling
  const cardWidth = 320; // 300px card width + 20px gap
  const transformValue = `translateX(-${scrollIndex * cardWidth}px)`;

  return (
    <>
      <div className="bg-[#1e3a8a] mt-[10px] h-[180px] flex items-center justify-center">
        <h2 className="text-white text-4xl md:text-5xl font-bold uppercase">
          Testimonials
        </h2>
      </div>

      {/* Section with overlaid heading */}
      <div className="w-full flex justify-center mt-10 relative ">
        {/* Overlaid Heading */}
        <h3 className="absolute top-6 text-black text-3xl md:text-4xl font-extrabold z-10">
          WHAT THEY SAY
        </h3>

        {/* Background Image */}
        <img
          src="https://arkofabrications.com/assets/images/resource/map.png"
          alt="map"
          className="w-[1200px] h-[600px] object-cover"
        />

        {/* Carousel Container */}
        <div className="absolute top-[80px] left-0 right-0 flex justify-center mt-20 z-20">
          <div className="overflow-hidden w-[960px]">
            <div
              className="flex gap-5 transition-transform duration-500"
              style={{ transform: transformValue }}
            >
              {extendedTestimonials.map((item, index) => (
                <div
                  key={`${item.id}-${index}`}
                  className="min-w-[300px] w-[300px] h-[300px] bg-white rounded-lg shadow-md p-4 transition-transform duration-300 hover:scale-105 flex flex-col justify-between"
                >
                  <div className="text-left text-black font-semibold leading-relaxed text-sm">
                    {item.text}
                  </div>
                  <p className="text-left font-bold text-black mt-2">
                    {item.author}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;