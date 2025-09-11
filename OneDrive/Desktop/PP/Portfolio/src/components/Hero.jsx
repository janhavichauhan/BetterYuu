import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../styles/HeroSection.scss";

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Building Futuristic Web Experiences with Code & Creativity";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setDisplayText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(timer);
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="hero">
      <motion.div
        className="hero__content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="hero__title"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Janhavi Chauhan
        </motion.h1>

        <motion.p
          className="hero__subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {displayText}
          <span className="cursor">|</span>
        </motion.p>

        <motion.div
          className="hero__buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <button className="btn btn-primary">View Projects</button>
          <button className="btn btn-outline">Contact Me</button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
