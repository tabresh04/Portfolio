import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './Header.module.css';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

const Header = ({ toggleSidebar }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'services', 'portfolio', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 100) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.headerContainer}`}>
        {/* Logo/Brand */}
        <motion.div 
          className={styles.logo}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a href="#home" className={styles.logoLink}>
            <span className={styles.logoText}>Shaikh Tabresh</span>
          </a>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className={styles.navDesktop}>
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li key={item.id}>
                <a 
                  href={`#${item.id}`}
                  className={`${styles.navLink} ${activeSection === item.id ? styles.active : ''}`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.span 
                      className={styles.underline}
                      layoutId="underline"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Hamburger Menu */}
        <button 
          className={styles.menuToggle}
          onClick={toggleSidebar}
          aria-label="Toggle menu"
        >
          <div className={`${styles.hamburger} ${styles.hamburgerSpin}`}>
            <div className={styles.hamburgerBox}>
              <div className={styles.hamburgerInner}></div>
            </div>
          </div>
        </button>

        {/* Theme Toggle (Desktop) */}
        <div className={styles.themeToggleDesktop}>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;