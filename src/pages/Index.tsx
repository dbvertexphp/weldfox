import React, { useState, useEffect } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import HeroBanner from '../components/home/HeroBanner';
import AboutSection from '../components/home/AboutSection';
import Services from '../components/home/Services';
import ImageOverlaySection from '../components/home/Process';

const Index = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div className="min-h-screen relative">
      {/* ✅ Fixed & Centered Header */}
      <div
        className={`fixed top-0 left-[5%] w-full z-50 transition-transform duration-300 ease-in-out ${
          isHeaderVisible ? 'translate-y-6' : '-translate-y-full'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <Header />
        </div>
      </div>

      {/* ✅ Content (starts from top, header overlaps banner) */}
      <div className="relative z-10">
        <HeroBanner />
        <AboutSection />
        <ImageOverlaySection />
        <Services />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
