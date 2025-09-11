import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Full Stack Web Developer",
    company: "Lowe's India",
    date: "08/2024 - Present",
    desc: "Developed responsive web applications using React.js and the Backyard Design System. Collaborated in Agile teams and built reusable components."
  },
  {
    title: "Full-Stack Web Developer, UI-UX Designer",
    company: "Curious Ecosystem",
    date: "01/2024 - 06/2024",
    desc: "Led UI/UX design for Curious Connect. Managed a team, facilitating leadership development and community engagement."
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section">
      <motion.h2 className="section-title"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}>
        Experience
      </motion.h2>
      {experiences.map((exp, index) => (
        <motion.div key={index} className="card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.3 }}>
          <h3 style={{ color: "var(--neon-pink)" }}>{exp.title}</h3>
          <h4 style={{ color: "var(--neon-blue)" }}>{exp.company} | {exp.date}</h4>
          <p>{exp.desc}</p>
        </motion.div>
      ))}
    </section>
  );
}
