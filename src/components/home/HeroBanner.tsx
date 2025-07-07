import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const slides = [
  {
    id: 1,
    heading1: "Elevate Your Bay Performance",
    heading2: "with Quality Equipment",
    image: "/Automation.jpg",
  },
  {
    id: 2,
    heading1: "Engineered for Excellence",
    heading2: "Empowering Industrial Growth",
    image: "/sliding-door.webp",
  },
  {
    id: 3,
    heading1: "Custom Fabrication that",
    heading2: "combines excellence and value!",
    image: "/sliding-gate-automation.jpg",
  },
];

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [scrollOffset, setScrollOffset] = useState(0);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollOffset(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const translateX = Math.sin(scrollOffset / 50) * 50;
  const opacity = 1 - scrollOffset / 200;

  const current = slides[currentSlide];

  return (
    <section className="relative h-[600px] md:h-[700px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
        style={{ backgroundImage: `url('${current.image}')` }}
      />
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Heading */}
      <motion.div
        initial="hidden"
        whileInView="visible"
		viewport={{ once: true }}
        className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40"
      >
        <div className="relative inline-block">
          <div
            className="absolute inset-0 rounded-md"
            style={{
              background:
                "linear-gradient(to right, rgba(55, 65, 81, 0.95), rgba(55, 65, 81, 0))",
            }}
          />
          <h1
            className="relative text-4xl md:text-7xl font-semibold text-white px-6 py-4 leading-tight transition-all duration-500 ease-in-out"
            style={{ transform: `translateX(${translateX}px)`, opacity }}
          >
            <span>{current.heading1}</span>
            <br />
            <span>{current.heading2}</span>
          </h1>
        </div>
      </motion.div>

      {/* Dots & Arrows */}
      <div className="absolute bottom-6 left-0 right-0 z-30 container flex items-center justify-between px-4">
        <div className="flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                index === currentSlide ? 'bg-white scale-125' : 'bg-white/50'
              }`}
              onClick={() => {
                setIsTransitioning(true);
                setCurrentSlide(index);
                setTimeout(() => setIsTransitioning(false), 500);
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <div className="flex space-x-2">
          <button
            onClick={prevSlide}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/30 transition-colors"
            aria-label="Previous slide"
          >
            <ArrowLeft size={18} className="text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/30 transition-colors"
            aria-label="Next slide"
          >
            <ArrowRight size={18} className="text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
