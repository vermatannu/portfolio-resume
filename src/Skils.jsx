import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Tilt from "react-parallax-tilt"; // For 3D tilt effect
import { FaCode, FaTools } from "react-icons/fa"; // Example icons

const Skills = ({ skills, tools }) => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-out-cubic",
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <section
      className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white relative overflow-hidden py-20"
      data-aos="fade-in"
    >
      {/* Decorative Blurred Circles */}
      <div className="absolute w-80 h-80 bg-purple-400 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-pulse-slow -top-24 -left-24"></div>
      <div className="absolute w-96 h-96 bg-pink-400 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-pulse-slow top-1/4 right-0 transform translate-x-1/2"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.05)_0%,_transparent_70%)]"></div>

      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Section Title */}
        <h2
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-400 animate-gradient-xy text-center mb-16 drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          Skills & Tools
        </h2>

        {/* Skills Section */}
        <div className="max-w-6xl mx-auto mb-12" data-aos="fade-up" data-aos-delay="300">
          <h3
            className="text-3xl sm:text-4xl font-semibold text-gray-100 text-center mb-8 relative group"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            <FaCode className="inline-block mr-2 text-yellow-400" /> Skills
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-yellow-400 to-purple-400 rounded-full group-hover:w-32 transition-all duration-500"></span>
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-center">
            {skills.map((skill, index) => (
              <Tilt
                key={index}
                className="Tilt"
                options={{ max: 15, scale: 1.05, speed: 400, perspective: 1000 }}
              >
                <div
                  className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/70 backdrop-blur-lg p-4 rounded-xl text-center text-base sm:text-lg text-white shadow-xl hover:shadow-2xl transform transition-all duration-300 border border-gray-700/30 group"
                  data-aos="fade-up"
                  data-aos-delay={`${500 + index * 50}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                  <span className="relative font-medium group-hover:text-yellow-300 drop-shadow-sm">
                    {skill}
                  </span>
                </div>
              </Tilt>
            ))}
          </div>
        </div>

        {/* Tools Section */}
        <div className="max-w-6xl mx-auto" data-aos="fade-up" data-aos-delay="500">
          <h3
            className="text-3xl sm:text-4xl font-semibold text-gray-100 text-center mb-8 relative group"
            data-aos="fade-right"
            data-aos-delay="600"
          >
            <FaTools className="inline-block mr-2 text-yellow-400" /> Tools
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-yellow-400 to-purple-400 rounded-full group-hover:w-32 transition-all duration-500"></span>
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-center">
            {tools.map((tool, index) => (
              <Tilt
                key={index}
                className="Tilt"
                options={{ max: 15, scale: 1.05, speed: 400, perspective: 1000 }}
              >
                <div
                  className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/70 backdrop-blur-lg p-4 rounded-xl text-center text-base sm:text-lg text-white shadow-xl hover:shadow-2xl transform transition-all duration-300 border border-gray-700/30 group"
                  data-aos="fade-up"
                  data-aos-delay={`${700 + index * 50}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                  <span className="relative font-medium group-hover:text-yellow-300 drop-shadow-sm">
                    {tool}
                  </span>
                </div>
              </Tilt>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;