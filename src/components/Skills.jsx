import React from "react";
import { motion } from "framer-motion";
import {
  FaReact, FaNode, FaSass, FaGitAlt, FaCss3Alt, FaHtml5, FaBootstrap,
} from "react-icons/fa";
import {
  SiJavascript, SiTypescript, SiNextdotjs, SiRedux, SiJest, SiGraphql,
  SiMongodb, SiMysql, SiWebpack, SiTailwindcss, SiVuedotjs
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";

const skills = [
  { name: "React", icon: <FaReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Vue.js", icon: <SiVuedotjs /> },
  { name: "Redux", icon: <SiRedux /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Node.js", icon: <FaNode /> },
  { name: "Express", icon: "Ex" }, // fallback text if icon missing
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
  { name: "SASS/SCSS", icon: <FaSass /> },
  { name: "Bootstrap", icon: <FaBootstrap /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GraphQL", icon: <SiGraphql /> },
  { name: "Jest", icon: <SiJest /> },
  { name: "Webpack", icon: <SiWebpack /> },
  { name: "VS Code", icon: <TbBrandVscode /> },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 px-6 md:px-20 bg-white dark:bg-black text-black dark:text-white transition-colors duration-500"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <p className="text-blue-500 uppercase font-semibold text-sm tracking-wide mb-2">
          02. Skills
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Technologies I Work With
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md hover:scale-105 transition-transform"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <div className="text-4xl text-blue-500 mb-2">
                {skill.icon || skill.name.charAt(0)}
              </div>
              <p className="text-center text-sm font-medium">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;