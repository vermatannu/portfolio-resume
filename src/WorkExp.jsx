import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const WorkExperience = ({ workExperience }) => {
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
          Work Experience
        </h2>

        {/* Experience List */}
        <div className="max-w-5xl mx-auto space-y-8">
          {workExperience.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-800/30 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-500 group"
              data-aos="fade-up"
              data-aos-delay={`${300 + index * 100}`}
            >
              <h3
                className="text-2xl sm:text-3xl font-semibold text-gray-100 group-hover:text-yellow-400 transition"
                data-aos="fade-right"
                data-aos-delay={`${400 + index * 100}`}
              >
                {exp.title}
              </h3>
              <p
                className="text-lg sm:text-xl font-light text-indigo-200 mb-4"
                data-aos="fade-up"
                data-aos-delay={`${500 + index * 100}`}
              >
                {exp.company} | {exp.duration} | {exp.location}
              </p>
              <ul
                className="list-disc pl-5 space-y-3 text-base sm:text-lg text-gray-300 leading-relaxed"
                data-aos="fade-up"
                data-aos-delay={`${600 + index * 100}`}
              >
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;