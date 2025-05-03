import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Portfolio.module.css';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Restaurant (In Progress)',
      category: 'web',
      image: '/Portfolio/images/Resturantt.png', 
      tags: ['React', 'Node.js', 'MongoDB'],
      link: '#'
    },
    {
      id: 2,
      title: 'Calculator',
      category: 'web',
      image: '/Portfolio/images/Calculator.png',
      tags: ['Reacts', 'CSS'],
      link: 'https://tabresh04.github.io/Calculator/'
    },
    {
      id: 3,
      title: 'GYM',
      category: 'web',
      image: '/Portfolio/images/GYM.png',
      tags: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://tabresh04.github.io/GYMInf/'
    },
    {
      id: 4,
      title: 'Weather',
      category: 'web',
      image: '/Portfolio/images/WeatherAPI.png',
      tags: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://tabresh04.github.io/WeatherAPI/'
    },
    {
      id: 5,
      title: 'Tic Tac Toe',
      category: 'web',
      image: '/Portfolio/images/Tic-Tac-Toe.png',
      tags: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://tabresh04.github.io/Tic-Tac-Toe/'
    },
  ];
  
  

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'design', label: 'UI/UX Design' }
  ];

  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeFilter));
    }
  }, [activeFilter]);

  return (
    <section className={styles.portfolio} id="portfolio">
      <div className={"container"}>
        <h2 className="section-title">My Portfolio</h2>
        <p className={styles.subtitle}>Here are some of my recent works</p>

        {/* Filter Buttons */}
        <div className={styles.filterButtons}>
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`${styles.filterBtn} ${activeFilter === filter.id ? styles.active : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className={styles.projectsGrid}>
          <AnimatePresence>
            {filteredProjects.map(project => (
              <motion.div
                key={project.id}
                className={styles.projectCard}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className={styles.projectImage}>
                  {/* Image placeholder - replace with your actual image */}
                  <div 
                    className={styles.imagePlaceholder}
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  <div className={`${styles.overlay} ${hoveredProject === project.id ? styles.active : ''}`}>
                    <div className={styles.overlayContent}>
                      <h3>{project.title}</h3>
                      <div className={styles.tags}>
                        {project.tags.map((tag, index) => (
                          <span key={index}>{tag}</span>
                        ))}
                      </div>
                      <div className={styles.projectLinks}>
                        <a href={project.link} className={styles.viewBtn}>
                          View Project
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
