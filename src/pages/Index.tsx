import React, { useState, useEffect } from "react";
import Banner from "@/components/Banner";
import Header from "@/components/Header";
import Experience from "@/components/Experience";
import Counting from "@/components/Counting";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";

const Index = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  // Optional: Handle scroll to toggle header visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <div
        className={`fixed top-0 left-0 w-full transition-transform duration-300 ease-in-out z-50 ${
          isHeaderVisible ? "translate-y-6" : "-translate-y-full"
        }`}
      >
        <Header />
      </div>
      <Banner />
      <Experience />
      <Counting/>
      <Services />
      <Gallery />
      <Process/>
      <Testimonials/>
      <Video/>
    </div>
  );
};

export default Index;
