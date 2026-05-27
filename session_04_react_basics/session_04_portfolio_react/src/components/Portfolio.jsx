
function Portfolio({ projects }) {
    return (
        <section id="portfolio" className="section">
            <div className="container">
                <h2>Portfolio</h2>

                <div className="portfolio-grid">
                    {projects.map((project) => (
                        <div className="project-card" key={project.id}>
                            <img src={project.image} alt={project.title} />

                            <div className="project-content">
                                <span>{project.category}</span>
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Portfolio