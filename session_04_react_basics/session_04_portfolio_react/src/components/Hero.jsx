function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <div className="hero-content">
          <p className="eyebrow">React Portfolio</p>
          <h1>
            Hi, I&apos;m <span className="highlight">Dinh Phuc Dong</span>
          </h1>
          <p className="hero-subtitle">
            Full-stack developer focused on responsive interfaces, clear user flows, and practical web apps.
          </p>
          <div className="hero-actions">
            <a href="#portfolio" className="button button-primary">
              View My Work
            </a>
            <a href="#contact" className="button button-secondary">
              Contact Me
            </a>
          </div>
        </div>
        <div className="hero-panel" aria-label="Profile summary">
          <div className="hero-avatar">DPD</div>
          <div>
            <strong>Frontend + Backend</strong>
            <span>React, JavaScript, Node.js</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
