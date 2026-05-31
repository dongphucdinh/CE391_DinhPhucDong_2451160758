import { useState } from 'react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import styles from './Portfolio.module.css';

function Portfolio() {
  const [items] = useState(projects);
  const [filter, setFilter] = useState('all');
  const categories = ['all', 'web', 'mobile', 'design'];

  const filteredItems = filter === 'all'
    ? items
    : items.filter((item) => item.category === filter);

  return (
    <section className="section portfolio" id="portfolio">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Portfolio</p>
            <h2>Selected projects</h2>
          </div>
        </div>
        <div className={styles.filterGroup}>
          {categories.map((category) => (
            <button
              key={category}
              className={`${styles.filterBtn} ${filter === category ? styles.active : ''}`}
              type="button"
              onClick={() => setFilter(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        <div className={styles.portfolioGrid}>
          {filteredItems.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
