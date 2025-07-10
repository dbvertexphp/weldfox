import React, { useEffect, useRef, useState } from "react";
import Banner from "@/components/Banner";
import Header from "@/components/Header";
import StickyHeader from "@/components/StickyHeader";
import Experience from "@/components/Experience";
import Counting from "@/components/Counting";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import Footer from "@/components/Footer";

const Index = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show sticky only when header is fully out of view
        setShowSticky(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 1.0,
      }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen relative bg-white">
      {/* Sticky Header */}
      {showSticky && <StickyHeader />}

      {/* Main Header */}
      <div ref={headerRef} className="absolute top-0 left-0 w-full z-50">
        <Header />
      </div>

      {/* Banner Section */}
      <Banner />

      {/* Main Content */}
      <Experience />
      <Counting />
      <Services />
      <Gallery />
      <Process />
      <Testimonials />
      <Video />
      <Footer />
    </div>
  );
};

export default Index;
