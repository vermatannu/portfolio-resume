import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import image from "../src/assets/image.jpeg"

const PersonalInfo = ({ personalInfo }) => {
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

      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-10 px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Left: Text Content */}
        <div
          className="w-full md:w-1/2 space-y-6 text-center md:text-left"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h1
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-400 animate-gradient-xy"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            {personalInfo.name}
          </h1>

          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-200 italic drop-shadow"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            {personalInfo.title}
          </h2>

          <p
            className="text-lg sm:text-xl font-light leading-relaxed text-gray-300 max-w-xl mx-auto md:mx-0"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            {personalInfo.summary}
          </p>

          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 group">
              <span className="uppercase font-semibold text-indigo-200 group-hover:text-yellow-300 transition">
                Email:
              </span>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-gray-100 hover:text-yellow-400 transition"
              >
                {personalInfo.email}
              </a>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 group">
              <span className="uppercase font-semibold text-indigo-200 group-hover:text-yellow-300 transition">
                Phone:
              </span>
              <span className="text-gray-100">{personalInfo.phone}</span>
            </div>

            {/* <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 group">
              <span className="uppercase font-semibold text-indigo-200 group-hover:text-yellow-300 transition">
                Location:
              </span>
              <span className="text-gray-100">{personalInfo.location}</span>
            </div> */}

            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 group">
              <span className="uppercase font-semibold text-indigo-200 group-hover:text-yellow-300 transition">
                LinkedIn:
              </span>
              <a
                href={personalInfo.linkedin}
                className="text-gray-100 hover:text-yellow-400 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Profile
              </a>
            </div>
          </div>

          <div className="mt-8">
            <a
              href="#projects"
              className="inline-block bg-gradient-to-r from-yellow-400 to-pink-400 text-gray-900 font-semibold px-8 py-3 rounded-full shadow-lg transform transition-all duration-300 hover:scale-110 hover:from-yellow-300 hover:to-pink-300"
              data-aos="zoom-in-up"
              data-aos-delay="600"
            >
              View My Work
            </a>
          </div>
        </div>

        {/* Right: Profile Image */}
        <div
          className="w-full md:w-1/2 flex justify-center"
          data-aos="fade-left"
          data-aos-delay="500"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl group">
            <img
              src={image}
              alt="Profile"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60 group-hover:opacity-40 transition duration-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalInfo;
