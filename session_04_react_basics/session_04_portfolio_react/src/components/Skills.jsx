
function Skills({ skills }) {
    return (
        <section id="skills" className="section">
            <div className="container">
                <h2>Skills</h2>

                <div className="skills-grid">
                    {skills.map((skill) => (
                        <div className="skill-card" key={skill.name}>
                            <h3>{skill.name}</h3>
                            <p>{skill.category}</p>

                            <div className="skill-bar">
                                <div
                                    className="skill-progress"
                                    style={{ width: `${skill.level}%` }}
                                ></div>
                            </div>

                            <span>{skill.level}%</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills