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

            My main focus right now is on <strong>frontend development</strong>, where I work with technologies like React.js, HTML, CSS, and JavaScript to build engaging user interfaces.<br/>
            I'm also in the process of learning <strong>backend development</strong>, exploring tools like Node.js, Express, and MongoDB to eventually become a full-stack developer.<br/><br/>

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