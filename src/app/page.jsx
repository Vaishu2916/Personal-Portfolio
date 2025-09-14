"use client";
import React from "react";
import Image from "next/image";
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter, FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { FaLaptopCode, FaLightbulb, FaBolt, FaCompass } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { profiles } from './data/coding';
import SkillSection  from './data/SkillSection';
import Tilt from "react-parallax-tilt";

const projects = [
  {
    title: "Personalized Music Recommendations Based on Real-Time Emotion and Weather Data",
    image: "/music.png",
    link: "https://github.com/Vaishu2916/Personalized-Music-Recommendations-Based-on-Real-Time-Emotion-and-Weather-Data/tree/master",
    tools: [
      "Python", "TensorFlow", "Keras", "OpenCV", "Pandas",
      "Spotipy", "Tkinter", "Pillow", "Requests", "CSV", "WeatherAPI"
    ],
    desc: "Developed a system using live video capture to assess user mood and environment. Generated playlists based on mood & listening history."
  },
  {
    title: "Resume Suggestions",
    image: "/resume.png",
    link: "https://github.com/Vaishu2916/Resume-Suggestion",
    tools: [
      "Python", "Streamlit", "NLTK", "scikit-learn",
      "OpenAI API", "Firebase", "ResumeParser"
    ],
    desc: "Python-based app that analyzes resumes and provides intelligent suggestions to improve structure, grammar, and ATS compatibility."
  },
  {
    title: "Image Deconvolution using Deep Gradient Descent Optimization Techniques",
    image: "/deblur.png",
    link: "https://github.com/Vaishu2916/Image-Deconvolution-by-Learning-Gradient-Descent-Optimization-Techniques",
    tools: ["Machine Learning", "Deep Learning", "TensorFlow", "Keras", "OpenCV"],
    desc: "Applied ML/DL optimization techniques to enhance image clarity through gradient-based algorithms."
  }
];

export default function Home() {
  return (
    <main className="bg-white text-gray-800 min-h-screen font-sans scroll-smooth">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <nav className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
          <h1 className="text-xl font-bold text-blue-700">Vaishnavi</h1>
          <ul className="flex space-x-5 font-medium">
            <li>
              <a href="#home" className="hover:text-blue-600 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-600 transition">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-blue-600 transition">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-blue-600 transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-600 transition">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section
  id="home"
  className="flex flex-col-reverse md:flex-row items-center justify-between min-h-screen px-6 md:px-20 pt-28 bg-[#1a1340] text-white"
>
  {/* Text Content */}
  <div className="md:w-1/2 space-y-6 text-center md:text-left">
    <h1 className="text-4xl md:text-7xl font-bold leading-tight">
      Crafting{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-500 to-blue-500">
        Smart
      </span>{" "}
      &{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
        Impactful
      </span>{" "}
      Digital <br /> Experiences
    </h1>
    <p className="text-gray-300 text-lg">
      I’m passionate about developing digital experiences that are efficient,
      intuitive, and purposeful. Let’s craft something impactful together.
    </p>
    <p className="font-semibold text-xl text-purple-300">Frontend Enthusia_</p>

    {/* Buttons */}
        <motion.div
          className="flex flex-wrap gap-4 justify-center md:justify-start"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          viewport={{ once: true }}
        >
          <a
            href="/vaishu_resume.pdf"
            download
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-2 px-5 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 flex items-center gap-2"
          >
            Download Resume ⬇
          </a>
          <a
            href="#contact"
            className="border border-purple-500 py-2 px-5 rounded-lg text-purple-300 hover:bg-purple-600/20 transition duration-300"
          >
            Get in Touch →
          </a>
        </motion.div>
      </div>
      
  {/* Profile Section */}
<motion.div
  className="relative w-72 h-72 md:w-[420px] md:h-[420px] mx-auto md:mx-0"
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1.5, ease: "easeOut" }}
>
  {/* Glowing Background */}
  <div className="absolute -inset-10 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 blur-3xl opacity-40 animate-pulse-glow"></div>

  {/* Profile Image with Unique Wave Motion */}
  <motion.img
    src="/chinnu.jpg"
    alt="Vaishnavi"
    className="w-full h-full object-cover rounded-3xl border-2 border-white shadow-[0_0_40px_rgba(255,255,255,0.8)] relative z-10"
    animate={{
      y: [0, -20, 0, 20, 0],   // floating up & down wave motion
      rotate: [0, 2, -2, 0],   // gentle tilt
      scale: [1, 0.95, 1.05, 1] // subtle breathing effect
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
</motion.div>

{/* Glow Animation */}
<style jsx global>{`
  @keyframes pulse-glow {
    0%, 100% {
      opacity: 0.3;
      transform: scale(1);
    }
    50% {
      opacity: 0.8;
      transform: scale(1.1);
    }
  }
  .animate-pulse-glow {
    animation: pulse-glow 5s ease-in-out infinite;
  }
`}</style>



</section>
  {/* About Me Section */}
<section
  id="about"
  className="py-20 px-6 bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] text-white"
>
  <div className="max-w-7xl mx-auto">
    <motion.h2
      className="text-4xl font-bold text-center mb-12 text-purple-400"
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      About Me
    </motion.h2>

    <div className="grid md:grid-cols-2 gap-8">
      {/* Main Bio Card */}
      <motion.div
  className="bg-[#1a133f] border border-purple-600 rounded-lg p-6 shadow-lg"
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{
    duration: 0.8,
    ease: "easeInOut",
    delay: 0.2,
  }}
>
  <h3 className="text-xl font-semibold text-pink-400 mb-4 flex items-center gap-2">
    <span className="text-pink-300 text-2xl">🖥️</span> My Journey
  </h3>
  <p className="text-gray-200 leading-relaxed">
    I'm <span className="text-purple-300 font-semibold">Angari Vaishnavi</span>, a Frontend Developer with a passion
    for crafting smooth, accessible, and engaging user experiences. My journey started with HTML & CSS and has grown into
    a love for building real-world web apps that solve meaningful problems.
  </p>
  <p className="mt-4 text-gray-400 text-sm">
    I enjoy solving problems, learning new technologies, and improving myself every day.
  </p>
</motion.div>

      {/* Animated Traits Column */}
      <div className="grid sm:grid-cols-2 gap-4">
        {/* Trait Cards */}
        {[
          {
      icon: <FaLightbulb />,
      title: "Problem Solver",
      text: "I enjoy finding effective solutions to real-world challenges.",
      glow: "from-purple-500 via-pink-500 to-blue-500",
    },
    {
      icon: <FaBolt />,
      title: "Fast Learner",
      text: "I quickly adapt to new tech and work efficiently under pressure.",
      glow: "from-pink-500 via-purple-500 to-indigo-500",
    },
    {
      icon: <FaCompass />,
      title: "Self-Guided",
      text: "I explore and experiment independently to deepen understanding.",
      glow: "from-indigo-500 via-blue-500 to-pink-500",
    },
    {
      icon: <FaLaptopCode />,
      title: "Clean Coder",
      text: "I write readable, reusable, and maintainable code.",
      glow: "from-blue-500 via-pink-500 to-purple-500",
    },
  ].map((item, idx) => (
          <motion.div
            key={idx}
            className="bg-[#1e1b3a] border border-purple-700 rounded-lg p-4 hover:scale-105 transition transform duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-2xl text-pink-400 mb-2">{item.icon}</div>
            <h4 className="text-lg font-semibold text-purple-300 mb-1">{item.title}</h4>
            <p className="text-sm text-gray-300">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</section>

{/* Education Section */}
<section
  id="education"
  className="py-20 px-6 bg-gradient-to-b from-[#100c2a] to-[#1a1340] text-white text-center relative"
>
  {/* Header */}
  <motion.h2
    className="text-4xl font-bold mb-12 flex justify-center items-center gap-3 text-purple-400"
    initial={{ opacity: 0, y: -30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <FaGraduationCap className="text-pink-400 text-3xl" />
    Education
  </motion.h2>

  {/* Timeline with animated cards */}
  <div className="relative max-w-4xl mx-auto space-y-8 before:absolute before:left-6 before:top-0 before:w-1 before:h-full before:bg-gradient-to-b from-pink-500 to-purple-500">
    {[
      {
        title: "ZPHS High School – Govoor (Nizamabad)",
        detail: "SSC GPA: 10.0",
        date: "May 2020",
      },
      {
        title: "TS Model School & Jr College – Kuntala (Nirmal)",
        detail: "MPC: 81.7%",
        date: "Apr 2022",
      },
      {
        title: "Institute of Aeronautical Engineering – Hyderabad",
        detail: "IT, CGPA: 8.0",
        date: "2022–2026",
      },
    ].map((item, index) => (
      <motion.div
        key={index}
        className="ml-14 bg-[#1f1b3a] p-6 rounded-xl border-l-4 border-purple-500 relative shadow-lg hover:scale-[1.02] transition-transform duration-300"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        viewport={{ once: true }}
      >
        {/* Timeline Dot */}
        <div className="absolute w-4 h-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full left-[-34px] top-6 border-4 border-[#1a1340] shadow-md"></div>

        <h4 className="text-lg font-bold text-white">{item.title}</h4>
        <p className="text-sm text-gray-300">
          {item.detail} <span className="text-gray-500 ml-2">({item.date})</span>
        </p>
      </motion.div>
    ))}
  </div>
</section>


{/* SkillSection */}


        <SkillSection />

      


{/* Projects Section */}
<section
  id="projects"
  className="py-20 px-6 bg-gradient-to-b from-[#100c2a] to-[#1a1340] text-white"
>
  <motion.h2
    className="text-4xl font-bold mb-12 text-center text-purple-400"
    initial={{ opacity: 0, y: -30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    Projects
  </motion.h2>

  <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
    {projects.map((project, index) => (
      <motion.div
        key={index}
        className="relative bg-[#1f1b3a] rounded-xl shadow-xl overflow-hidden border border-purple-600 hover:scale-[1.03] transition-transform duration-300"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        viewport={{ once: true }}
      >
        {/* Project Image */}
        <div className="h-44 w-full relative overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-500 hover:scale-110"
          />
        </div>

        {/* Card Content */}
        <div className="p-5">
          <h3 className="text-xl font-semibold mb-3">{project.title}</h3>

          {/* Tools Used */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tools.map((tool, i) => (
              <span
                key={i}
                className="bg-purple-800 text-white px-2 py-1 text-sm rounded-full shadow-sm"
              >
                {tool}
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="text-gray-300 mb-4">{project.desc}</p>

          {/* Link Button */}
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-md shadow-md transition duration-300"
          >
            View Project
          </a>
        </div>

        {/* Glow Animation */}
        <div className="absolute inset-0 rounded-xl z-[-1] bg-gradient-to-br from-pink-500/10 to-purple-500/10 blur-xl opacity-30 animate-pulse" />
      </motion.div>
    ))}
  </div>
</section>

{/* CODING PROFILES */}
      <section id="coding" className="py-20 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 bg-gradient-to-r from-[#14001f] to-[#1e0054] text-white">
      <h2 className="text-4xl font-bold text-center mb-12 text-purple-400 drop-shadow-lg animate-pulse">Coding Profiles</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {profiles.map((profile, i) => (
          <motion.a
            key={i}
            href={profile.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative bg-[#0d031a] border border-purple-500 rounded-xl p-6 flex flex-col items-center text-center shadow-lg hover:shadow-purple-700 transition duration-300 ease-in-out overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.7 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="animate-bounce mb-3">{profile.icon}</div>
            <h3 className="text-lg font-semibold text-purple-300 mb-1">{profile.title}</h3>
            <p className="text-sm text-gray-300">{profile.description}</p>
            <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 opacity-70 blur-sm"></div>
          </motion.a>
        ))}
      </div>
    </section>
<section
  id="contact"
  className="py-20 px-6 bg-gradient-to-br from-[#1a1340] to-[#2b1a67] text-white"
>
  <motion.h2
    className="text-3xl md:text-4xl font-bold text-center mb-4 text-pink-400"
    initial={{ opacity: 0, y: -30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    Let's Connect & Collaborate
  </motion.h2>

      <motion.p
        className="text-center text-gray-300 max-w-2xl mx-auto mb-12 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        Feel free to reach out if you want to collaborate on projects, share ideas, or just have a conversation!
      </motion.p>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 relative z-10">
        {/* Contact Info */}
        <motion.div
          className="border border-purple-600 rounded-lg p-8 bg-[#1a1340]/70 backdrop-blur-md shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-white">Let's Connect</h3>
          <p className="text-gray-300 mb-4">
            I’m always open to new opportunities, ideas, and discussions. Don’t hesitate to drop a message!
          </p>
          <p className="text-purple-300 mb-6 flex items-center gap-2">
            📧 aangarivaishnavi@gmail.com
          </p>
          <h4 className="text-lg font-semibold mb-2">Socials</h4>
          <div className="flex space-x-4 mt-2 text-2xl text-purple-300">
            <a
              href="https://www.linkedin.com/in/angari-vaishnavi-808553293/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-400 transition-transform hover:scale-110"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Vaishu2916"
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-400 transition-transform hover:scale-110"
            >
              <FaGithub />
            </a>
            <a
              href="#"
              className="hover:text-pink-400 transition-transform hover:scale-110"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="hover:text-pink-400 transition-transform hover:scale-110"
            >
              <FaTwitter />
            </a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          className="border border-purple-600 rounded-lg p-8 bg-[#1a1340]/70 backdrop-blur-md shadow-lg space-y-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div>
            <label className="block mb-2 font-medium">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded bg-[#0e0a24] text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Email</label>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-full px-4 py-3 rounded bg-[#0e0a24] text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Message</label>
            <textarea
              placeholder="Want to ask anything?"
              rows="4"
              className="w-full px-4 py-3 rounded bg-[#0e0a24] text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold hover:scale-105 transform transition duration-300 flex items-center justify-center gap-2"
          >
            Send Message <FaPaperPlane />
          </button>
        </motion.form>
      </div>
    </section>
    </main>
  );
}
