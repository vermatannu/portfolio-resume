import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = ({ projects }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <section
      className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1e1b4b] via-[#3b0764] to-[#6b21a8] text-white relative overflow-hidden py-20"
      data-aos="fade-in"
    >
      {/* Decorative Elements */}
      <div className="absolute w-96 h-96 bg-violet-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-pulse-slow -top-32 -left-32"></div>
      <div className="absolute w-80 h-80 bg-rose-500 rounded-full mix-blend-overlay filter blur-3xl opacity-25 animate-pulse-slow bottom-0 right-0 transform translate-x-1/3 translate-y-1/3"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.05)_0%,_transparent_70%)]"></div>

      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Section Title */}
        <h2
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-rose.400 to-violet-500 animate-gradient-xy text-center mb-16 drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          My Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {projects && projects.length && projects.map((project, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-300 border border-gray-700/50 group"
              data-aos="fade-up"
              data-aos-delay={`${300 + index * 100}`}
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-violet-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>

              {/* Project Content */}
              <div className="relative">
                <h3 className="text-xl sm:text-2xl font-semibold text-white group-hover:text-amber-300 transition-colors duration-300 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base line-clamp-3 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="inline-block bg-gray-700/50 px-3 py-1 rounded-full text-xs sm:text-sm text-gray-200 group-hover:text-amber-200 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gradient-to-r from-amber-400 to-rose-400 text-white px-4 py-2 rounded-full text-sm sm:text-base font-medium hover:from-amber-500 hover:to-rose-500 transition-all duration-300"
                  >
                    View Project
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;