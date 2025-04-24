import React, { memo } from 'react';
import styles from './ThemeToggle.module.css';

const ThemeToggle = memo(({ toggleTheme, theme }) => {
  const handleClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    toggleTheme();
  };

  return (
    <button 
  className={styles.themeToggle}
  onClick={handleClick}
  aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
>
  <span className={`${styles.sun} ${theme === 'dark' ? styles.visible : styles.hidden}`}>☀️</span>
  <span className={`${styles.moon} ${theme === 'light' ? styles.visible : styles.hidden}`}>🌙</span>
</button>
  );
});

export default ThemeToggle;