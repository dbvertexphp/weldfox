import React, { useEffect, useState } from "react";

const StickyHeader = () => {
  const [isStickyVisible, setIsStickyVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const bannerHeight = 700; // match your Banner height

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > lastScrollY;
      const halfwayPoint = bannerHeight / 2;

      if (scrollingDown && currentScrollY > halfwayPoint) {
        setIsStickyVisible(true);
      } else if (!scrollingDown && currentScrollY < halfwayPoint - 100) {
        setIsStickyVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* 👇 Sticky Header */}
      <header
        className={`fixed top-0 left-0 w-full z-50 bg-white text-black shadow-md transition-all duration-500 ease-in-out transform ${
          isStickyVisible
            ? "translate-y-0 opacity-100"
            : "-translate-y-10 opacity-0 pointer-events-none"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 py-5 flex items-center justify-between">
          <img src="/logo1.PNG" alt="Logo" className="h-14 w-auto" />
          <nav className="hidden md:flex space-x-6 text-lg font-medium">
            <a href="/" className="text-[#1a2940] hover:text-[#f79d2b] transition">Home</a>
            <a href="/pages/About-us" className="text-[#1a2940] hover:text-[#f79d2b] transition">About</a>
            <a href="/services" className="text-[#1a2940] hover:text-[#f79d2b] transition">Services</a>
            <a href="/projects" className="text-[#1a2940] hover:text-[#f79d2b] transition">Projects</a>
            <a href="/news" className="text-[#1a2940] hover:text-[#f79d2b] transition">News</a>
            <a href="/contact" className="text-[#1a2940] hover:text-[#f79d2b] transition">Contact</a>
          </nav>
        </div>
      </header>
    </>
  );
};

export default StickyHeader;
