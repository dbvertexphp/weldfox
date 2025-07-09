import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Video = () => {
  const [playVideo, setPlayVideo] = useState(false);

  return (
    <section className="relative w-full h-[650px] overflow-hidden">
      {/* 🔹 Background Image */}
      <img
        src="/services1.jpg"
        className="absolute inset-0 w-full h-full object-cover"
        alt="Background"
      />

      {/* 🔹 Dark Overlay */}
      <div className="absolute inset-0 bg-[#1a2940] bg-opacity-95 z-10">
        <div className="max-w-7xl mx-auto h-full flex justify-between items-center flex-col lg:flex-row px-6 gap-10">
          {!playVideo ? (
            <>
              {/* 🔸 Left Content Centered in Left Half */}
              <div className="flex-1 flex justify-center items-center h-full">
                <div className="text-white flex flex-col justify-center items-center text-center max-w-xl">
                  {/* Play Button */}
                  <button
                    onClick={() => setPlayVideo(true)}
                    className="w-[80px] h-[80px] rounded-full bg-white text-[#F79D2B] flex items-center justify-center text-2xl mb-6"
                  >
                    <FaPlay />
                  </button>

                  {/* Heading */}
                  <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-4">
                    Watch the short intro video – How we work and help customers
                  </h2>

                  {/* CTA Button */}
                  <button className="bg-[#F79D2B] hover:bg-[#e38816] text-white font-semibold px-6 py-4 rounded shadow-md transition">
                    SCHEDULE AN APPOINTMENT TODAY
                  </button>

                  {/* Subtext */}
                  <p className="text-gray-400 mt-3 text-sm">
                    Quis nostrud exercitation ullamco laboris
                  </p>
                </div>
              </div>

              {/* 🔸 Right Character */}
              <div className="flex-1 flex items-center justify-center">
                <img
                  src="/videoimg.png"
                  alt="Character"
                  className="max-w-[400px] w-full"
                />
              </div>
            </>
          ) : (
            // 🔸 Video Modal
            <div className="flex justify-center items-center w-full h-full">
              <div className="relative w-full max-w-4xl mx-auto">
                {/* Close Button */}
                <button
                  onClick={() => setPlayVideo(false)}
                  className="absolute -top-6 -right-6 bg-white text-[#1a2940] p-2 rounded-full shadow hover:bg-gray-200 z-20"
                >
                  <IoClose className="text-2xl" />
                </button>

                {/* Video */}
                <video
                  className="w-full rounded-lg shadow-lg"
                  controls
                  autoPlay
                >
                  <source src="/video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Video;
