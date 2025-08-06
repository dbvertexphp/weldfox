import React from "react";
import HeaderPages from "@/components/Header-Pages";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import StickyHeader from "@/components/StickyHeader";

const Projects = () => {
      return (
            <div className="font-montserrat">
                  <HeaderPages />

                  {/* Banner Section */}
                  <div className="relative w-full">
                        <img
                              src="/about-banner.jpg"
                              alt="About Us Banner"
                              className="w-full h-[300px] object-cover"
                        />
                        <div className="absolute inset-0 bg-[#1a2940] opacity-80"></div>
                          <div className="absolute top-[200px] md:top-[150px] left-1/2 transform -translate-x-1/2 z-10 px-4 w-full flex justify-center">
                        <div className="bg-white w-full max-w-[700px] shadow-lg p-6 md:p-10 text-center">
                              <h2 className="text-4xl md:text-6xl font-md text-gray-900 mb-2">
                                    Projects
                              </h2>
                              <p className="text-gray-500 leading-relaxed text-base">
                                    <Link
                                          to="/"
                                          className="hover:text-[#F79D2B] transition-colors duration-200"
                                    >
                                          Home
                                    </Link>{" "}
                                    /
                                    <Link
                                          to="/pages/Projects"
                                          className="hover:text-[#F79D2B] transition-colors duration-200"
                                    >
                                          Projects Gallery
                                    </Link>
                              </p>
                        </div>
                  </div>
                  </div>


                  <StickyHeader />

                  {/* Title Section */}
                  {/* <div className="relative z-10 mt-[-230px] flex justify-center items-center px-4 min-h-[calc(100vh-300px)]">
                        <div className="bg-white w-full max-w-[700px] shadow-lg p-6 md:p-10 text-center">
                              <h2 className="text-4xl md:text-6xl font-md text-gray-900 mb-2">
                                    Projects
                              </h2>
                              <p className="text-gray-500 leading-relaxed text-base">
                                    <Link
                                          to="/"
                                          className="hover:text-[#F79D2B] transition-colors duration-200"
                                    >
                                          Home
                                    </Link>{" "}
                                    /
                                    <Link
                                          to="/pages/Projects"
                                          className="hover:text-[#F79D2B] transition-colors duration-200"
                                    >
                                          Projects Gallery
                                    </Link>
                              </p>
                        </div>
                  </div> */}

                  {/* Project Image Gallery */}
                  <div className="w-full px-4 py-16 bg-white mt-[60px] md:mt-[50px]">
                        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                              {[
                                    {
                                          src: "/project1.jpg",
                                          title: "Rolling Shutter",
                                    },
                                    {
                                          src: "/project2.jpg",
                                          title: "Entrance Automation",
                                    },
                                    {
                                          src: "/project3.jpg",
                                          title: "General Fabrication",
                                    },
                                    {
                                          src: "/project1.jpg",
                                          title: "Rolling Shutter",
                                    },
                                    {
                                          src: "/project2.jpg",
                                          title: "Entrance Automation",
                                    },
                                    {
                                          src: "/project3.jpg",
                                          title: "General Fabrication",
                                    },
                              ].map((item, index) => (
                                    <div
                                          key={index}
                                          className="relative w-full group overflow-hidden"
                                    >
                                          <img
                                                src={item.src}
                                                alt={item.title}
                                                className="w-full h-[300px] object-cover"
                                          />

                                          {/* Overlay */}
                                          <div className="absolute inset-0 flex items-center justify-center bg-[#1a2940] bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300">
                                                <h3 className="text-white text-xl md:text-2xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4 z-10">
                                                      {item.title}
                                                </h3>

                                                {/* Inner Orange Border (Box Inside) */}
                                                <div className="absolute inset-4 border-2 border-[#f79d2b] opacity-0 group-hover:opacity-100 transition-all duration-300 z-0 pointer-events-none"></div>
                                          </div>
                                    </div>
                              ))}
                        </div>
                  </div>

                  <Footer />
            </div>
      );
};

export default Projects;
