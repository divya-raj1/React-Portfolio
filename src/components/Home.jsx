import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import profileImg from "../assets/profile.png";

const Home = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 bg-white dark:bg-gradient-to-br from-gray-900 via-black to-gray-800 text-dark dark:text-white overflow-hidden">
      {/* Animated background glow */}
      <div className="absolute inset-0 dark:bg-gradient-to-br from-blue-900/20 via-black/10 to-transparent animate-pulse pointer-events-none" />

      {/* Left Content */}
      <motion.div
        className="flex-1 flex flex-col gap-6 z-10 mt-20 md:mt-0"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="text-blue-400 text-sm font-medium uppercase tracking-wide">
          Hey, I'm Divya 👋
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
          I build modern, responsive, and accessible user interfaces.
        </h1>

        <TypeAnimation
          sequence={[
            "Frontend Developer",
            2000
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="text-xl md:text-2xl text-blue-400 font-semibold"
        />

        <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-xl">
          I’m a frontend developer with a passion for turning complex problems into elegant, scalable UIs. I’ve worked on everything from fintech dashboards to crypto exchanges and I love bringing ideas to life with React, performance first thinking, and a bit of design intuition.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-all text-center"
          >
            Contact Me
          </a>
          <a
            href="/resume.pdf"
            download
            className="border border-blue-600 hover:bg-blue-600 hover:text-white text-blue-400 px-6 py-2 rounded-lg transition-all text-center"
          >
            Download Resume
          </a>
        </div>
      </motion.div>

      {/* Profile Image */}
      <motion.div
        className="flex-1 mt-10 md:mt-0 flex justify-center z-10"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <div className="relative group">
          {/* Outer glow ring for large screens only */}
          <div className="hidden lg:block absolute inset-0 animate-pulse rounded-full border-2 border-blue-400 blur-[6px] opacity-30 group-hover:opacity-50 transition duration-300" />

          {/* Profile Image */}
          <div className="relative w-72 h-72 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[26rem] lg:h-[26rem] rounded-full overflow-hidden border-4 border-blue-500 shadow-2xl group-hover:shadow-blue-500/50 transition-all duration-500">
            <img
              src={profileImg}
              alt="Divya Raj"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;