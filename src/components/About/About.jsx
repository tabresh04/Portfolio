// src/components/About/About.jsx
import React from 'react';
import styles from './About.module.css';

const About = () => {
  const skills = [
    { name: 'Web Development', percentage: 90 },
    { name: 'UI/UX Design', percentage: 50 },
  ];

  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <h2 className="section-title">About Me</h2>
        
        <div className={styles.aboutContainer}>
          <div className={styles.aboutImage}>
            <h3>
            Hi, I’m <strong>Tabresh Shaikh</strong>, a passionate web developer with a strong interest in creating clean, responsive, and user-focused websites.<br/><br/>

            I am fullstack/Mern stack developer, with understanding of SQL and non-SQL data bases.

            <br/><br/>

            I believe in writing efficient, readable code and continuously improving my skill set with every project.<br/><br/>
            When I’m not coding, you’ll find me experimenting with new project ideas, diving into cybersecurity tools, or playing BGMI for a quick refresh!
            </h3>
          </div>
          
          <div className={styles.aboutContent}>
            <h3 className={styles.aboutText}>
              I'm a passionate web developer and designer with over 1 years of experience creating 
              modern and responsive websites. I specialize in front-end development but also have 
              experience with back-end technologies.
            </h3>
            
            <div className={styles.skills}>
              {skills.map((skill, index) => (
                <div className={styles.skillItem} key={index}>
                  <div className={styles.skillInfo}>
                    <span>{skill.name}</span>
                    <span>{skill.percentage}%</span>
                  </div>
                  <div className={styles.skillBar}>
                    <div 
                      className={styles.skillProgress} 
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;