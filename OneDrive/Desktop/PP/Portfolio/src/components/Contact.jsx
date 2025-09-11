import React from "react";
import { motion } from "framer-motion";
import "../styles/Contact.scss";

const projects = [
  {
    name: "Intellect Coin",
    desc: "Developed an app connecting students and companies for short-term projects using MERN stack.",
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <motion.h2 className="section-title"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}>
        Projects
      </motion.h2>
      {projects.map((proj, i) => (
        <motion.div key={i} className="card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.3 }}>
          <h3 style={{ color: "var(--neon-pink)" }}>{proj.name}</h3>
          <p>{proj.desc}</p>
        </motion.div>
      ))}
    </section>
  );
}
