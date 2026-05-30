function Portfolio({ projects }) {
  return (
    <section className="section portfolio" id="portfolio">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Portfolio</p>
            <h2>Selected projects</h2>
          </div>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.id}>
              <img src={project.image} alt={`${project.title} preview`} />
              <div className="project-content">
                <span>{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
