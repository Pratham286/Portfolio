import React from 'react'

const Introduction = () => {
  return (
    <div id="home" className="flex items-center justify-center px-4 sm:px-6 lg:px-8 py-6">
      <div className="max-w-4xl w-full">
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
          Hi, I'm <span className="text-blue-600">Your Name</span>
        </h1>

        {/* Subheading */}
        <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-600 mb-6">
          Full Stack Developer & Creative Problem Solver
        </h2>

        {/* Paragraph */}
        <p className="text-base sm:text-lg text-gray-700 mb-8 leading-relaxed max-w-2xl">
          I'm passionate about building exceptional digital experiences that make a difference. 
          With expertise in modern web technologies, I create solutions that are not only 
          functional but also beautiful and user-friendly. Let's build something amazing together.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4">
          <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
            View Projects
          </button>
          <button className="px-6 py-3 bg-gray-200 text-gray-900 font-medium rounded-lg hover:bg-gray-300 transition-colors">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  )
}

export default Introduction