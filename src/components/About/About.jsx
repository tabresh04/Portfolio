import React from 'react';
import styles from './About.module.css';
import heroImage from '../../../public/images/Hero.png';


const About = () => (
  <section className={styles.aboutSection} id="about">
    <div className={styles.aboutContainer}>
      <div className={styles.aboutImage}>
        <img
          src={heroImage}
          alt="Tabresh Shaikh"
          className={styles.profileImg}
        />
      </div>
      <div className={styles.aboutContent}>
        <p className={styles.aboutTitle}>About Me</p>
        <p className={styles.aboutText}>
          Hi, I’m <strong>Tabresh Shaikh</strong>, a passionate web developer with a strong interest in creating clean, responsive, and user-focused websites.<br />
          I am a fullstack/MERN stack developer, with understanding of SQL and NoSQL databases.<br />
          I believe in writing efficient, readable code and continuously improving my skill set with every project.
        </p>
      </div>
    </div>
  </section>
);

export default About;