import React from 'react'

const Project = () => {

  const projects = [
  {
    id: 1,
    title: "BrieflyAI",
    image: "/Project1.png",
    techStack: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Tailwind CSS",
      "Cohere API",
      "REST APIs"
    ],
    summary:
      "An AI-powered text summarization platform with multiple summary modes, secure authentication, and scalable REST APIs.",
    liveLink: "https://brieflyai-frontend.onrender.com/",
    githubLink: "https://github.com/Pratham286/Text-Summarizer"
  },
  {
    id: 2,
    title: "ChatConnect",
    image: "/Project2.png",
    techStack: [
      "React",
      "Node.js",
      "Socket.io",
      "WebSockets",
      "MongoDB",
      "JWT",
      "Tailwind CSS"
    ],
    summary:
      "A real-time chat application supporting one-to-one and group messaging with secure authentication and low-latency communication.",
    liveLink: "https://chatapp-frontend-pw2b.onrender.com/",
    githubLink: "https://github.com/Pratham286/ChatApp"
  }
];


  return (
    <div id="projects" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-5xl w-full">
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-12">
          My <span className="text-blue-600">Projects</span>
        </h1>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* Project Image */}
              <div className="w-full h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Summary */}
                <p className="text-gray-700 mb-6 text-sm leading-relaxed">
                  {project.summary}
                </p>

                {/* Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors text-center"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-gray-200 text-gray-900 text-sm font-medium rounded-lg hover:bg-gray-300 transition-colors text-center"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Project