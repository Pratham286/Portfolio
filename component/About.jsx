import React from 'react'

const About = () => {
  return (
    <div id="about" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-4xl w-full">
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
            {/* Institute Name */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">
              {/* Institute name goes here */}
            </h3>
            
            {/* Duration */}
            <p className="text-base sm:text-lg text-gray-600">
              {/* Duration goes here */}
            </p>
            
            {/* Degree */}
            <p className="text-base sm:text-lg text-gray-700">
              {/* Degree goes here */}
            </p>
            
            {/* Branch */}
            <p className="text-base sm:text-lg text-gray-700">
              {/* Branch goes here */}
            </p>
            
            {/* Relevant Coursework */}
            <div>
              <p className="text-base sm:text-lg font-medium text-gray-800 mb-2">
                Relevant Coursework:
              </p>
              <p className="text-base sm:text-lg text-gray-700">
                {/* Coursework goes here */}
              </p>
            </div>
          </div>
        </div>

        {/* Passion & Motive Section */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            Passion & Motive
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Grid Item 1 */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              {/* Content goes here */}
            </div>
            
            {/* Grid Item 2 */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              {/* Content goes here */}
            </div>
            
            {/* Grid Item 3 */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              {/* Content goes here */}
            </div>
            
            {/* Grid Item 4 */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              {/* Content goes here */}
            </div>
          </div>
        </div>

        {/* Competitive Programming Section */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            Competitive Programming & DSA
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Codeforces */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Codeforces
              </h3>
              {/* Content goes here */}
            </div>
            
            {/* LeetCode */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                LeetCode
              </h3>
              {/* Content goes here */}
            </div>
            
            {/* CodeChef */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                CodeChef
              </h3>
              {/* Content goes here */}
            </div>
            
            {/* GeeksforGeeks */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                GeeksforGeeks
              </h3>
              {/* Content goes here */}
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            Achievements
          </h2>
          
          <div className="space-y-6">
            {/* Achievement 1 */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {/* Achievement title goes here */}
              </h3>
              <p className="text-base sm:text-lg text-gray-700">
                {/* Achievement description goes here */}
              </p>
            </div>
            
            {/* Achievement 2 */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {/* Achievement title goes here */}
              </h3>
              <p className="text-base sm:text-lg text-gray-700">
                {/* Achievement description goes here */}
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About