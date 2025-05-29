import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="flex items-center px-6 md:px-20 py-20 bg-white dark:bg-black text-black dark:text-white transition-colors duration-500"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto space-y-6"
      >
        <p className="text-blue-500 uppercase font-semibold text-sm tracking-wide">
          01. About Me
        </p>

        <h2 className="text-3xl md:text-4xl font-bold">
          Who I Am
        </h2>

        <p className="text-lg leading-relaxed">
          I’m a frontend developer with nearly 6 years of experience building sleek, performant, and scalable interfaces using modern tech like React.js, Next.js, and Vue.js. Whether it’s launching a crypto exchange or debugging a complex e-commerce platform, I thrive in fast-paced, innovation-driven environments.
        </p>

        <p className="text-lg leading-relaxed">
          I’ve led UI development for fintech and blockchain apps, integrating Web3, GraphQL, REST APIs, and real-time WebSockets to elevate user engagement. I enjoy clean architecture, reusable components, and making products feel seamless for users.
        </p>

        <p className="text-lg leading-relaxed">
          Outside of code, I love exploring UI/UX trends, mentoring junior devs, and learning how to craft digital experiences that don’t just work, they impress. Based in Dubai, I’m always ready for the next challenge that helps me grow as both an engineer and a creator.
        </p>

        <p className="text-base text-gray-600 dark:text-gray-400">
          “Code is craft. Let’s build something unforgettable.”
        </p>
      </motion.div>
    </section>
  );
};

export default About;