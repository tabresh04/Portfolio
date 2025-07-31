import { motion, AnimatePresence } from 'framer-motion';
import styles from './Sidebar.module.css';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiX } from 'react-icons/fi';
import img from '../../../public/images/Hero.png';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'about', label: 'About', icon: '👤' },
    // { id: 'services', label: 'Services', icon: '🛠️' },
    { id: 'portfolio', label: 'Portfolio', icon: '🎨' },
    { id: 'contact', label: 'Contact', icon: '✉️' }
  ];

  const socialLinks = [
    { icon: <FiGithub />, url: 'https://github.com/tabresh04' },
    { icon: <FiLinkedin />, url: 'https://www.linkedin.com/in/shaikh-tabresh-3686a926b' },
    // { icon: <FiTwitter />, url: 'https://twitter.com/yourusername' },
    { icon: <FiMail />, url: 'mailto:tabresh786shaikh@email.com' }
  ];

  const handleNavigation = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    toggleSidebar();
  };

  const sidebarVariants = {
    open: { x: 0, transition: { type: 'spring', stiffness: 300, damping: 30 } },
    closed: { x: '-100%', transition: { type: 'spring', stiffness: 300, damping: 30 } }
  };

  return (
    <>
      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleSidebar}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        className={styles.sidebar}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={sidebarVariants}
      >
        <div className={styles.sidebarContent}>
          {/* Close Button */}
          <button className={styles.closeBtn} onClick={toggleSidebar}>
            <FiX />
          </button>

          {/* Profile Section */}
          <div className={styles.profile}>
            <div className={styles.avatar}>
              {/* image section */}
              <div className={styles.avatarPlaceholder}>
                {/* <img src={img} alt="Profile" /> */}
              </div>
            </div>
            <h3 className={styles.profileName}>Shaikh Tabresh</h3>
            <p className={styles.profileTitle}>Web Developer</p>
          </div>

          {/* Navigation */}
          <nav className={styles.nav}>
            <ul className={styles.navList}>
              {navItems.map((item) => (
                <li key={item.id} className={styles.navItem}>
                  <a
                    href={`#${item.id}`}
                    className={styles.navLink}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigation(item.id);
                    }}
                  >
                    <span className={styles.navIcon}>{item.icon}</span>
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Theme Toggle */}
          <div className={styles.themeToggleWrapper}>
            <ThemeToggle />
          </div>

          {/* Social Links */}
          <div className={styles.socialLinks}>
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Footer/Copyright */}
          <div className={styles.footer}>
            <p>&copy; {new Date().getFullYear()} Shaikh Tabresh</p>
          </div>
        </div>
      </motion.aside>
    </>
  );
};

export default Sidebar;