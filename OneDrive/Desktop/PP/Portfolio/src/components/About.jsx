import React from "react";
import { motion } from "framer-motion";
import "../styles/AboutSection.scss";

export default function About() {
  return (
    <section id="about" className="section">
      <motion.h2 className="section-title"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}>
        About Me
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        I am a versatile Full Stack Developer with expertise in front-end and back-end technologies. 
        I thrive in dynamic environments, delivering efficient, scalable solutions while maintaining clean and intuitive design. 
        Experienced in UI/UX design and team leadership, enhancing user experience and project outcomes.
      </motion.p>
    </section>
  );
}
