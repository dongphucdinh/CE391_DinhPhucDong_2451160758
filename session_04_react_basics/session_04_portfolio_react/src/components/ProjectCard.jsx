import styles from './Portfolio.module.css';

function ProjectCard({ title, category, image, description, tags }) {
  return (
    <article className={styles.projectCard}>
      <div className={styles.projectImage}>
        <img src={image} alt={`${title} preview`} />
      </div>
      <div className={styles.projectCardBody}>
        <span className={styles.projectCategory}>{category}</span>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className={styles.projectTags}>
          {tags.map((tag) => (
            <span className={styles.tag} key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
