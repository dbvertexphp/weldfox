import { useEffect, useState } from "react";
// import slidingDoorImage from "@/public/sliding-door.webp";


const slides = [
  {
    url: "https://www.geapl.com/images/banner_videos/banner-2.jpg",
    heading1: "Elevate Your Bay Performance",
    heading2: "with Quality Equipment",
  },
  {
    url: "/sliding-door.webp",
    heading1: "Engineered for Excellence",
    heading2: "Empowering Industrial Growth",
  },
  {
    url: "/automation.webp",
    heading1: "Custom Fabrication that",
    heading2: " combines excellence and value!",
  },
];

const HeroSection = () => {
  const [scrollOffset, setScrollOffset] = useState(0);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrollOffset(Math.min(scrollY, 200));
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((prevIndex) =>
        (prevIndex + 1) % slides.length
      );
    }, 1000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const translateX = Math.sin(scrollOffset / 50) * 50;
  const opacity = 1 - scrollOffset / 200;

  const currentSlide = slides[currentSlideIndex];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 overflow-hidden transition-all duration-1000">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
        style={{
          backgroundImage: `url('${currentSlide.url}')`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Heading Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40">
        <div className="relative inline-block">
          {/* Gradient behind text */}
          <div
            className="absolute inset-0 rounded-md"
            style={{
              background:
                "linear-gradient(to right, rgba(55, 65, 81, 0.95), rgba(55, 65, 81, 0))",
            }}
          />

          {/* Heading Text */}
          <h1
            className="relative text-4xl md:text-7xl font-semibold text-white px-6 py-4 leading-tight transition-all duration-500 ease-in-out"
            style={{
              transform: `translateX(${translateX}px)`,
              opacity: opacity,
            }}
          >
            <span>{currentSlide.heading1}</span>
            <br />
            <span>{currentSlide.heading2}</span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
