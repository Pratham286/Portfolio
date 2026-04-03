import React from "react";
import pfp from "../src/pfp.jpg";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
const Introduction = () => {
  return (
    <div
      id="home"
      className="flex items-center justify-center px-4 sm:px-6 lg:px-8 py-6"
    >
      <div className="max-w-5xl w-full">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Left Side - Text Content */}
          <div className="flex-1">
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Hi, I'm <span className="text-blue-600">Pratham Chaurasiya</span>
            </h1>

            {/* Subheading */}
            <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-600 mb-6 py-4">
              Full Stack Developer & Complex Problem Solver
            </h2>

            {/* Paragraph */}
            <p className="text-base sm:text-lg text-gray-700 mb-8 leading-relaxed">
              I’m a final-year B.Tech student at IIT ISM Dhanbad who enjoys
              solving problems and building scalable web applications. I work
              with modern web technologies, mainly the MERN stack, and like
              turning ideas into clean, user-friendly products. I’m always
              excited to learn, improve my skills, and build things that create
              real impact.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="/resume.pdf"
                download="Pratham_Chaurasiya_Resume.pdf"
                className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors text-center"
              >
                Resume
              </a>
              <a
                href="https://github.com/Pratham286"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gray-200 text-gray-900 font-medium rounded-lg hover:bg-gray-300 transition-colors"
              >
                <FaGithub className="h-6 w-6"/>
              </a>
              <a
                href="https://www.linkedin.com/in/pratham-chaurasiya-a3a96a251/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gray-200 text-gray-900 font-medium rounded-lg hover:bg-gray-300 transition-colors"
              >
                <FaLinkedin className="h-6 w-6"/>
              </a>
            </div>
          </div>

          {/* Right Side - Profile Picture */}
          <div className="flex-shrink-0">
            <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-blue-600 shadow-xl">
              <img
                src={pfp}
                alt="Pratham Chaurasiya"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
