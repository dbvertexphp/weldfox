import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] uppercase">
          About Us
        </h2>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Image */}
        <div className="w-full md:w-1/2 mt-9">
          <img
            src="https://arkofabrications.com/assets/images/general-fabrication/glass-glazing.jpg" 
            alt="About Weldfox"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Right Text Content */}
        <div className="w-full md:w-1/2 text-gray-800">
          {/* Semi Heading */}
          <p className="text-[#205f8f] text-xl md:text-3xl font-bold uppercase mb-2">
            Welcome to Weldfox
          </p>

          {/* Main Title */}
          <h3 className="text-2xl md:text-3xl font-bold text-[#1e3a8a] leading-snug mb-4">
            Crafting Excellence <br className="hidden md:block" />
            in Fabrication
          </h3>

          {/* Description */}
          <p className="text-lg leading-relaxed mb-3">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. In id maxime nemo nobis nostrum, itaque enim rerum aspernatur aperiam iusto reiciendis doloribus excepturi vero cum harum ea voluptates quis saepe, iure minus esse animi inventore? Aut quisquam ipsam tempore molestias dolores ea repellat, qui facilis.
          </p>
          <p className="text-lg leading-relaxed">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit ad culpa temporibus maiores quia odio rerum provident, ea nisi obcaecati nihil numquam maxime deserunt necessitatibus cumque vero ducimus. Accusamus et tempora quaerat sunt in.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
