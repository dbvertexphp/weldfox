import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const slides = [
  { id: 1, image: "/banner1.jpg" },
  { id: 2, image: "/banner2.jpg" },
];

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollOffset, setScrollOffset] = useState(0);
  const startX = useRef(null);
  const isDragging = useRef(false);

  // Auto Slide (every 3 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrollOffset(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDragStart = (e) => {
    startX.current = e.touches ? e.touches[0].clientX : e.clientX;
    isDragging.current = true;
  };

  const handleDragEnd = (e) => {
    if (!isDragging.current) return;
    const endX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
    const diff = startX.current - endX;

    if (diff > 50) {
      // Swipe Left
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    } else if (diff < -50) {
      // Swipe Right
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    }
    isDragging.current = false;
  };

  const translateX = Math.sin(scrollOffset / 50) * 50;
  const opacity = 1 - scrollOffset / 200;
  const current = slides[currentSlide];

  return (
    <section
      className="relative h-[700px] sm:h-[650px] md:h-[750px] lg:h-[850px] overflow-hidden"
      onMouseDown={handleDragStart}
      onMouseUp={handleDragEnd}
      onTouchStart={handleDragStart}
      onTouchEnd={handleDragEnd}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000 z-0"
        style={{ backgroundImage: `url('${current.image}')` }}
      />

      {/* Grey Overlay */}
      <div className="absolute inset-0 bg-[#787878] opacity-30 z-10" />

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/50 z-20" />

      {/* Heading + Buttons */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[220px] sm:pt-[240px] md:pt-[260px] text-center"
      >
        <div className="inline-block">
          <h1
            className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mt-10 text-white uppercase tracking-wide transition-all duration-500 ease-in-out"
            style={{ transform: `translateX(${translateX}px)`, opacity }}
          >
            TRUSTWORTHY & EFFICIENT
          </h1>
          <h2 className="mt-4 text-lg sm:text-2xl md:text-5xl text-white tracking-widest font-light">
            HANDYMAN SERVICES
          </h2>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <button className="relative overflow-hidden group text-white font-semibold px-6 py-3 rounded bg-[#F79D2B]">
              <span className="relative z-10 transition-colors duration-500 group-hover:text-[#F79D2B]">
                LEARN MORE
              </span>
              <span className="absolute inset-0 bg-white w-0 group-hover:w-full transition-all duration-500 ease-in-out"></span>
            </button>

            <button className="relative overflow-hidden group text-white font-semibold px-6 py-3 rounded border border-white">
              <span className="relative z-10 transition-colors duration-500 group-hover:text-[#0f1f3e]">
                OUR SERVICES
              </span>
              <span className="absolute inset-0 bg-white w-0 group-hover:w-full transition-all duration-500 ease-in-out"></span>
            </button>
          </div>
        </div>
      </motion.div>

      {/* Bottom 3 Headings */}
      <div className="absolute bottom-0 left-0 right-0 z-40">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-center items-center gap-10 sm:gap-20 text-white text-base sm:text-lg">
            <span className="cursor-pointer hover:text-[#F79D2B] transition-colors duration-300">
              Rolling Shutters
            </span>
            <span className="cursor-pointer hover:text-[#F79D2B] transition-colors duration-300">
              Entrance Automation
            </span>
            <span className="cursor-pointer hover:text-[#F79D2B] transition-colors duration-300">
              General Fabrication
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
