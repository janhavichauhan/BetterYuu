import React, { useState } from "react";
import { motion } from "framer-motion";
import "../styles/ProjectCourosel.scss";

const projects = [
  {
    title: "Intellect Coin",
    description:
      "A platform connecting students with companies for short-term projects, enabling users to earn money through their skills. Built with MERN stack.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    link: "https://github.com/janhavichauhan/intellect-coin",
  },
  {
    title: "Curious Connect",
    description:
      "UI/UX design and development for a community-driven project under GSSOC-24. Delivered responsive interfaces and led a team for execution.",
    tech: ["Figma", "React", "Tailwind"],
    link: "https://github.com/janhavichauhan",
  },
  {
    title: "Hackathon Events",
    description:
      "Organized and designed college tech events, focusing on user experience and professional interface design.",
    tech: ["UI/UX", "Leadership"],
    link: "#",
  },
];

const ProjectCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextProject = () =>
    setActiveIndex((prev) => (prev + 1) % projects.length);
  const prevProject = () =>
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Projects</h2>

      <div className="projects__carousel">
        <motion.div
          key={activeIndex}
          className="projects__card"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h3>{projects[activeIndex].title}</h3>
          <p>{projects[activeIndex].description}</p>
          <ul className="tech-list">
            {projects[activeIndex].tech.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <a
            href={projects[activeIndex].link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            View Project
          </a>
        </motion.div>

        <div className="projects__controls">
          <button onClick={prevProject}>⬅</button>
          <button onClick={nextProject}>➡</button>
        </div>
      </div>
    </section>
  );
};

export default ProjectCarousel;
