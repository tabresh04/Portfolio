import React from 'react';
import styles from './Hero.module.css';
import heroImage from '../../../public/images/Hero.png';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Hi, I'm <span className={styles.name}>Shaikh</span>
            <br />
            <span className={styles.name}>Tabresh</span>
            <div className={styles.typingContainer}>
              <TypeAnimation
                sequence={[
                  'UI/UX Designer',
                  2000,
                  'Web Developer',
                  2000,
                  'Frontend Engineer',
                  2000
                ]}
                wrapper="span"
                speed={40}
                repeat={Infinity}
                className={styles.typingText}
              />
            </div>
          </h1>
          <p className={styles.heroText}>
            I craft digital experiences that are fast, accessible, and visually appealing.
          </p>
<<<<<<< HEAD
          <a href="https://drive.google.com/file/d/1kVuRUaz6s4UoBZSJcg1f9_C6nlDvVeqH/view?usp=drive_link">
=======
          <a href="https://drive.google.com/file/d/1kVuRUaz6s4UoBZSJcg1f9_C6nlDvVeqH/view?usp=drivesdk">
>>>>>>> c58be48a96ae53451cb627fe780055e6e8168bcc
          <button className={styles.heroButton}>
            Download CV
            <span className={styles.buttonArrow}>→</span>
          </button>
          </a>
        </div>
        <div className={styles.heroImage}>
          <img 
            src={heroImage} 
            alt="Shaikh Tabresh" 
            className={styles.profileImage}
            loading="lazy"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
