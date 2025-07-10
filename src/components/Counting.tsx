import React from "react";
import { FaCog, FaBriefcase, FaUser } from "react-icons/fa";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Counting = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  const commonDuration = 2; // seconds

  return (
    <section className="w-full max-w-7xl px-4 mx-auto py-10" ref={ref}>

      {/* Top Gray Line */}
      <div className="border-t border-gray-300 mb-10 w-full"></div>

      {/* Stats Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {/* Years of Experience */}
        <div className="flex flex-col items-center space-y-2">
          <div className="flex items-center gap-2">
            <FaCog size={40} className="text-[#F79D2B]" />
            <div className="text-6xl font-semibold text-[#0f1f3e]">
              {inView && <CountUp start={0} end={15} duration={commonDuration} />}+
            </div>
          </div>
          <p className="text-gray-600 text-lg">Years Of Experience</p>
        </div>

        {/* Projects Completed */}
        <div className="flex flex-col items-center space-y-2">
          <div className="flex items-center gap-2">
            <FaBriefcase size={40} className="text-[#F79D2B]" />
            <div className="text-6xl font-semibold text-[#0f1f3e]">
              {inView && <CountUp start={0} end={789} duration={commonDuration} />}
            </div>
          </div>
          <p className="text-gray-600 text-lg">Projects Completed</p>
        </div>

        {/* Experienced Workers */}
        <div className="flex flex-col items-center space-y-2">
          <div className="flex items-center gap-2">
            <FaUser size={40} className="text-[#F79D2B]" />
            <div className="text-6xl font-semibold text-[#0f1f3e]">
              {inView && <CountUp start={0} end={60} duration={commonDuration} />}+
            </div>
          </div>
          <p className="text-gray-600 text-lg">Experienced Workers</p>
        </div>
      </div>
    </section>
  );
};

export default Counting;
