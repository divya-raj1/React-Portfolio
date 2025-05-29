import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Real-Time Market Price Tracker",
    description:
      "A web app that uses the Binary.com WebSocket API to display live market prices with dynamic dropdowns and visual indicators for price changes.",
    tech: ["JavaScript", "WebSocket", "API", "HTML", "CSS"],
    liveLink: "https://divya-raj1.github.io/Price-Tracker/",
    codeLink: "https://github.com/divya-raj1/Price-Tracker",
  },
  {
    title: "Interactive Network Graph Visualizer",
    description:
      "A React-based visualization tool that dynamically renders network graphs using react-graph-vis, showing connected devices and their subcomponents in a clear, hierarchical structure.",
    tech: ["React JS", "React Graph", "JavaScript", "HTML", "CSS"],
    liveLink: "https://divya-raj1.github.io/react-page/",
    codeLink: "https://github.com/divya-raj1/react-page",
  },
  {
    title: "Next.js Event Listing Platform",
    description:
      "A statically generated event listing page with dynamic routing, search, filters, and category-based sorting—built using Next.js to showcase SSG, dynamic routes, and React state management.",
    tech: ["Next.js", "TypeScript", "JavaScript", "HTML", "CSS"],
    liveLink: "https://next-event-listing.vercel.app/",
    codeLink: "https://github.com/divya-raj1/next-event-listing",
  },
  {
    title: "Swap Exchange Platform",
    description:
      "A decentralized crypto trading platform with real-time data, Web3 wallet integration, and token listing dashboard.",
    tech: ["React JS", "WebSockets", "Web3", "Redux", "GraphQL"],
    liveLink: "https://swap.panaroma.finance/#/swap?chain=mainnet",
    // codeLink: "#",
  },
  {
    title: "ICO Launchpad",
    description:
      "An ICO platform with Vue.js, wallet auth, and token sale metrics dashboard.",
    tech: ["Vue.js", "Web3", "REST API", "Axios", "Bootstrap"],
    liveLink: "https://ico.panaroma.finance/",
    // codeLink: "#",
  }
];

const Projects = () => {
  return (
    <section
      id="projects"
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
          04. Projects
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Some Things I've Built
        </h2>

        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow hover:shadow-lg transition-all"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 text-xs font-medium mb-4">
                {project.tech.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline text-sm flex items-center gap-1"
                >
                  <FaExternalLinkAlt size={14} />
                  Live
                </a>
                {
                    project.codeLink && (
                        <a
                            href={project.codeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-700 dark:text-gray-300 hover:underline text-sm flex items-center gap-1"
                        >
                        <FaGithub size={16} />
                        Code
                        </a>
                    )
                }
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;