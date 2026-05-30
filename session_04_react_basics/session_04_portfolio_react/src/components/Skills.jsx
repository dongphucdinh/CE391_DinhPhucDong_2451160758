function Skills({ skills }) {
  return (
    <section className="section skills" id="skills">
      <div className="container">
        <p className="eyebrow">Skills</p>
        <h2>Technical toolkit</h2>
        <div className="skills-grid">
          {skills.map((skill) => (
            <article className="skill-card" key={skill.name}>
              <div className="skill-header">
                <h3>{skill.name}</h3>
                <span>{skill.level}%</span>
              </div>
              <div className="skill-meter" aria-label={`${skill.name} skill level ${skill.level}%`}>
                <span style={{ width: `${skill.level}%` }} />
              </div>
              <p>{skill.category}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
