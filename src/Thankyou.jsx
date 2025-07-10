import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ThankYou = ({ message }) => {
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

      <div className="container mx-auto max-w-4xl relative z-10">
        <h2
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-400 animate-gradient-xy text-center mb-6"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          {message || "Thank You for Visiting!"}
        </h2>
        <p
          className="text-lg sm:text-xl md:text-2xl font-light text-gray-100 text-center group-hover:text-yellow-400 transition"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          I appreciate your time and interest.
        </p>
      </div>
    </section>
  );
};

export default ThankYou;