import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './Skills.module.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiExpress } from 'react-icons/si';
import { SiC, SiCplusplus, SiPython } from 'react-icons/si';
import { FaJava,FaTerminal,FaDatabase  } from 'react-icons/fa';

const skills = [
  { name: 'HTML', icon: <FaHtml5 /> },
  { name: 'CSS', icon: <FaCss3Alt /> },
  { name: 'JavaScript', icon: <FaJs /> },
  { name: 'React', icon: <FaReact /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'Express.js', icon: <SiExpress /> },
  { name: 'C', icon: <SiC /> },
  { name: 'C++', icon: <SiCplusplus /> },
  { name: 'Java', icon: <FaJava /> },
  { name: 'Python', icon: <SiPython /> },
  { name: 'Bash', icon: <FaTerminal />  },
  { name: 'SQL', icon: <FaDatabase />  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
      when: 'beforeChildren',
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Skills = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <section className={styles.skills} id="skills" ref={sectionRef}>
      <motion.h2
        className={styles.sectionTitle}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        My Skills
      </motion.h2>
      <motion.p
        className={styles.subtitle}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 0.8, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Technologies I work with
      </motion.p>
      <motion.div
        className={styles.skillsContainer}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className={styles.skill}
            variants={itemVariants}
          >
            <span className={styles.icon}>{skill.icon}</span>
            <span className={styles.name}>{skill.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
