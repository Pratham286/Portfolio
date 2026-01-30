import React from "react";

const About = () => {
  const passion = [
    {
      Title: "Solving Complex Problems",
      Summary:
        "I enjoy breaking complex problems into simple and efficient solutions using logical thinking and code.",
    },
    {
      Title: "Building Scalable Web Applications",
      Summary:
        "I like building scalable and maintainable web applications that can grow and handle real-world use.",
    },
    {
      Title: "Learning & Continuous Improvement",
      Summary:
        "I am always eager to learn new technologies and improve my skills to become a better developer.",
    },
    {
      Title: "Innovation & Creative Thinking",
      Summary:
        "I enjoy exploring new ideas and building innovative solutions that add real value to users.",
    },
  ];
  const achievements = [
    {
      title: "Smart India Hackathon",
      description: "Qualified for Round 2 of Smart India Hackathon (SIH) 2024.",
    },
    {
      title: "Exam Rank",
      description:
        "Secured AIR 4961 in JEE Advanced 2022 and AIR 7751 in JEE Main 2022.",
    },
    {
      title: "Codeforces Contests",
      description:
        "Placed 197th in Codeforces Round 1029 (Div. 3) and 809th in Codeforces Round 1042 (Div. 3).",
    },
    {
      title: "LeetCode Contests",
      description:
        "Ranked 704th in LeetCode Biweekly Contest 138 and 438th in LeetCode Biweekly Contest 166.",
    },
    {
      title: "CodeChef Contests",
      description:
        "Secured 178th rank in CodeChef Starters 199 (Div. 2) and 169th rank in CodeChef Starters 202 (Div. 2).",
    },
  ];
  const code = [
    {
      id: 1,
      title: "Codeforces",
      profile: "Pc_286",
      rating: 1573,
      tag: "Specialist",
      problemsSolved: "550+",
      link: "https://codeforces.com/profile/Pc_286",
    },
    {
      id: 2,
      title: "LeetCode",
      profile: "Pc_286",
      rating: 1967,
      tag: "Knight",
      problemsSolved: "450+",
      link: "https://leetcode.com/u/Pc_286/",
    },
    {
      id: 3,
      title: "CodeChef",
      profile: "pc_286",
      rating: 1772,
      tag: "3-Star",
      problemsSolved: "",
      link: "https://www.codechef.com/users/pc_286", // add codechef profile link
    },
    {
      id: 4,
      title: "GeeksforGeeks",
      profile: "Pc_286", // you can fill
      rating: "",
      tag: "",
      problemsSolved: "230+",
      link: "https://www.geeksforgeeks.org/profile/pc_286", // add gfg profile link
    },
  ];

  return (
    <div
      id="about"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16"
    >
      <div className="max-w-5xl w-full">
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-12">
          About <span className="text-blue-600">Me</span>
        </h1>

        {/* Education Section */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            Education
          </h2>

          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">
              Indian Institute of Technology (Indian School of mines) Dhanbad
            </h3>
            <p className="text-base sm:text-lg text-gray-600">2022-2026</p>

            {/* Degree */}
            <p className="text-base sm:text-lg text-gray-700">
              Bachelor of Technology
            </p>

            {/* Branch */}
            <p className="text-base sm:text-lg text-gray-700">
              Electronics and Communication Engineering
            </p>

            {/* Relevant Coursework */}
            <div>
              <p className="text-base sm:text-lg font-medium text-gray-800 mb-2">
                Relevant Coursework:
              </p>
              <p className="text-base sm:text-lg text-gray-700">
                Data Structures and Algorithms (C++), Introduction to Computer
                Programming (C), Operating Systems, Database Management Systems,
                Object-Oriented Programming.
              </p>
            </div>
          </div>
        </div>

        {/* Passion & Motive Section */}

        {/* Passion & Motive Section */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            Passion & Motive
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {passion.map((p, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg border-2 border-gray-200 hover:border-blue-600 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                  {p.Title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {p.Summary}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Competitive Programming Section */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            Competitive Programming & DSA
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {code.map((platform) => (
              <a
                key={platform.id}
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-lg hover:border-blue-300 transition-all cursor-pointer"
              >
                {/* Platform Title */}
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {platform.title}
                </h3>

                {/* Profile Details */}
                <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                  {platform.profile && (
                    <p className="text-gray-700">
                      <span className="font-medium">Profile:</span>{" "}
                      {platform.profile}
                    </p>
                  )}

                  {platform.rating && (
                    <p className="text-gray-700">
                      <span className="font-medium">Rating:</span>{" "}
                      {platform.rating}
                    </p>
                  )}

                  {platform.tag && (
                    <p className="text-gray-700">
                      <span className="font-medium">Rank:</span>{" "}
                      <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full">
                        {platform.tag}
                      </span>
                    </p>
                  )}

                  {platform.problemsSolved && (
                    <p className="text-gray-700">
                      <span className="font-medium">Problems:</span>{" "}
                      {platform.problemsSolved}
                    </p>
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            Achievements
          </h2>

          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg border-2 border-gray-200 hover:border-blue-600 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {achievement.title}
                </h3>
                <p className="text-base sm:text-lg text-gray-700">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
