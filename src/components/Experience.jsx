import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Software Development Engineer",
    company: "PFE Technologies",
    date: "Jan 2023 – Present | Dubai, UAE",
    points: [
      "Led frontend development for SWAP Exchange, increasing engagement by 40%.",
      "Built decentralized fintech apps with React, Redux, Next.js, and Web3.",
      "Improved conversion rates by 25% through UI optimization and performance tuning.",
      "Integrated WebSockets, GraphQL, REST APIs, and CI/CD pipelines.",
    ],
  },
  {
    title: "Senior Systems Engineer",
    company: "Infosys",
    date: "Jul 2022 – Jan 2023 | Kerala, India",
    points: [
      "Built responsive, accessible e-commerce UIs with React and jQuery.",
      "Implemented unit testing with Jest, reducing bugs by 40%.",
      "Collaborated with designers to optimize layout and performance.",
    ],
  },
  {
    title: "Systems Engineer",
    company: "Infosys",
    date: "Nov 2020 – Jul 2022 | Kerala, India",
    points: [
      "Developed UI components with HTML5, CSS3, JS and Material-UI.",
      "Improved site speed by 50% through code optimization.",
      "Ensured cross-browser support and mobile responsiveness.",
    ],
  },
  {
    title: "Bootstrap Intern",
    company: "QuestInnovative Solutions",
    date: "Jan 2017 – Dec 2017 | Cochin, India",
    points: [
      "Built responsive UI using Bootstrap.",
      "Practiced mobile-first design across real-world projects.",
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 px-6 md:px-20 bg-white dark:bg-black text-black dark:text-white transition-colors duration-500"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <p className="text-blue-500 uppercase font-semibold text-sm tracking-wide mb-2">
          03. Experience
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Where I've Worked
        </h2>

        <div className="relative border-l-2 border-blue-600 dark:border-blue-400 pl-6 space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -left-[14px] top-1 w-3 h-3 rounded-full bg-blue-600 dark:bg-blue-400 border-2 border-white dark:border-black" />
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{exp.company}</p>
              <p className="text-xs italic mb-2 text-gray-500 dark:text-gray-400">{exp.date}</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;