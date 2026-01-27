import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const socialLinks = [
    { 
      icon: FaGithub, 
      href: "https://github.com/yourusername", 
      label: "GitHub",
      color: "hover:text-gray-900"
    },
    { 
      icon: FaLinkedin, 
      href: "https://linkedin.com/in/yourusername", 
      label: "LinkedIn",
      color: "hover:text-blue-600"
    },
    { 
      icon: FaTwitter, 
      href: "https://twitter.com/yourusername", 
      label: "Twitter",
      color: "hover:text-blue-400"
    },
    { 
      icon: MdEmail, 
      href: "mailto:your.email@example.com", 
      label: "Email",
      color: "hover:text-red-600"
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div id="contact" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-4xl w-full">
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-12">
          Get In <span className="text-blue-600">Touch</span>
        </h1>

        {/* Social Links */}
        <div className="flex justify-center gap-8 mb-12">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-gray-600 ${social.color} transition-colors`}
              aria-label={social.label}
            >
              <social.icon className="w-8 h-8" />
            </a>
          ))}
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-lg border border-gray-200">
          {/* Name Field */}
          <div className="mb-6">
            <label 
              htmlFor="name" 
              className="block text-gray-800 font-medium mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Your name"
            />
          </div>

          {/* Email Field */}
          <div className="mb-6">
            <label 
              htmlFor="email" 
              className="block text-gray-800 font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="your.email@example.com"
            />
          </div>

          {/* Message Field */}
          <div className="mb-6">
            <label 
              htmlFor="message" 
              className="block text-gray-800 font-medium mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              placeholder="Your message here..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact