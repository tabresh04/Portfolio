import { useState, useEffect, useCallback } from 'react';
import styles from './App.module.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Skills/Skills';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Sidebar from './components/Sidebar/Sidebar';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';

function App() {
  const [theme, setTheme] = useState(() => {
    // Initialize theme from localStorage or prefer-color-scheme
    return localStorage.getItem('theme') || 
           (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  });
  
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Memoized toggle functions
  const toggleTheme = useCallback(() => {
    setTheme(prev => {
      const newTheme = prev === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  }, []);

  const toggleSidebar = useCallback(() => {
    setSidebarOpen(prev => !prev);
  }, []);

  // Sync theme with DOM and localStorage
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.style.colorScheme = theme;
  }, [theme]);

  return (
    <div className={styles.app}>
      <ThemeToggle toggleTheme={toggleTheme} theme={theme} />
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} theme={theme} />
      <Header toggleSidebar={toggleSidebar} theme={theme} />
      <main>
        <Hero theme={theme} />
        <About theme={theme} />
        <Services theme={theme} />
        <Portfolio theme={theme} />
        <Contact theme={theme} />
      </main>
    </div>
  );
}

export default App;