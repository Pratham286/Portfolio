import React from 'react'

const Skills = () => {
const skillCategories = [
  {
    id: 1,
    title: "Programming Languages",
    skills: ["C", "C++", "JavaScript", "TypeScript"]
  },
  {
    id: 2,
    title: "Frontend Development",
    skills: [
      "React",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Redux",
      "Responsive Design"
    ]
  },
  {
    id: 3,
    title: "Backend Development",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "WebSockets",
      "Authentication & Authorization"
    ]
  },
  {
    id: 4,
    title: "Databases",
    skills: ["MongoDB", "PostgreSQL", "MySQL"]
  },
  {
    id: 5,
    title: "Tools & Platforms",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Docker",
      "Bash"
    ]
  },
  {
    id: 6,
    title: "Deployment & DevOps",
    skills: ["Vercel", "Render", "CI/CD Basics"]
  },
  {
    id: 7,
    title: "Core Computer Science",
    skills: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Operating Systems",
      "DBMS"
    ]
  }
];


  return (
    <div id="skills" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-5xl w-full">
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-12">
          My <span className="text-blue-600">Skills</span>
        </h1>

        {/* Skills Grid */}
        <div className="space-y-6">
          {skillCategories.map((category) => (
            <div 
              key={category.id}
              className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
            >
              {/* Category Title */}
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {category.title}
              </h2>

              {/* Skills */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-white text-gray-800 font-medium rounded-lg border border-gray-300 hover:bg-blue-50 hover:border-blue-300 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills