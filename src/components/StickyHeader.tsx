import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const StickyHeader = () => {
  const [isStickyVisible, setIsStickyVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const bannerHeight = 700;

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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

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
          {/* Logo */}
          <img src="/logo1.PNG" alt="Logo" className="h-14 w-auto" />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 text-lg font-medium">
            <Link to="/" className="text-[#1a2940] hover:text-[#f79d2b] transition">Home</Link>
            <Link to="/pages/About-us" className="text-[#1a2940] hover:text-[#f79d2b] transition">About</Link>
            <Link to="/pages/Services/Services" className="text-[#1a2940] hover:text-[#f79d2b] transition">Services</Link>
            <Link to="/pages/Projects" className="text-[#1a2940] hover:text-[#f79d2b] transition">Projects</Link>
            <Link to="/news" className="text-[#1a2940] hover:text-[#f79d2b] transition">News</Link>
            <Link to="/pages/Contact" className="text-[#1a2940] hover:text-[#f79d2b] transition">Contact</Link>
          </nav>

          {/* Mobile Hamburger Icon */}
          <div className="md:hidden text-2xl text-[#1a2940] cursor-pointer" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div className="md:hidden bg-white shadow-md px-6 py-4 flex flex-col space-y-4 text-base font-medium">
            <Link to="/" className="text-[#1a2940] hover:text-[#f79d2b]" onClick={toggleMenu}>Home</Link>
            <Link to="/pages/About-us" className="text-[#1a2940] hover:text-[#f79d2b]" onClick={toggleMenu}>About</Link>
            <Link to="/pages/Services/Services" className="text-[#1a2940] hover:text-[#f79d2b]" onClick={toggleMenu}>Services</Link>
            <Link to="/projects" className="text-[#1a2940] hover:text-[#f79d2b]" onClick={toggleMenu}>Projects</Link>
            <Link to="/news" className="text-[#1a2940] hover:text-[#f79d2b]" onClick={toggleMenu}>News</Link>
            <Link to="/pages/Contact" className="text-[#1a2940] hover:text-[#f79d2b]" onClick={toggleMenu}>Contact</Link>
          </div>
        )}
      </header>
    </>
  );
};

export default StickyHeader;
