import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = ({ skills, tools }) => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section
      className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white relative overflow-hidden"
      data-aos="fade-in"
    >
      {/* Decorative Blurred Circles */}
      <div className="absolute w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-slow -top-24 -left-24"></div>
      <div className="absolute w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow top-1/4 right-0 transform translate-x-1/2"></div>

      <div className="w-full px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Section Title */}
        <h2
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-400 animate-gradient-xy text-center mb-12"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          Skills & Tools
        </h2>

        {/* Skills Section */}
        <div className="max-w-5xl mx-auto mb-10" data-aos="fade-up" data-aos-delay="300">
          <h3
            className="text-2xl sm:text-3xl font-semibold text-gray-100 text-center mb-6 group-hover:text-yellow-400 transition"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="inline-block bg-gray-800/50 px-4 py-2 rounded-full text-base sm:text-lg text-gray-100 shadow-md hover:scale-105 hover:text-yellow-400 transform transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={`${500 + index * 50}`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Tools Section */}
        <div className="max-w-5xl mx-auto" data-aos="fade-up" data-aos-delay="500">
          <h3
            className="text-2xl sm:text-3xl font-semibold text-gray-100 text-center mb-6 group-hover:text-yellow-400 transition"
            data-aos="fade-right"
            data-aos-delay="600"
          >
            Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, index) => (
              <span
                key={index}
                className="inline-block bg-gray-800/50 px-4 py-2 rounded-full text-base sm:text-lg text-gray-100 shadow-md hover:scale-105 hover:text-yellow-400 transform transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={`${700 + index * 50}`}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;