import { useState } from 'react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import styles from './Portfolio.module.css';

function Portfolio() {
  const [items] = useState(projects);

  return (
    <section className="section portfolio" id="portfolio">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Portfolio</p>
            <h2>Selected projects</h2>
          </div>
        </div>
        <div className={styles.portfolioGrid}>
          {items.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
