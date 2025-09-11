import React from "react";
import { motion } from "framer-motion";

const skills = ["HTML5", "CSS", "JavaScript", "React.js", "Node.js", "MongoDB", "Figma", "Tailwind CSS", "SCSS"];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <motion.h2 className="section-title"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}>
        Skills
      </motion.h2>
      <ul className="skills-list">
        {skills.map((skill, i) => (
          <motion.li key={i} className="card"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}>
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
