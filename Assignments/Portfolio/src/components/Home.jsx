import "./Home.css";

export default function Home() {
  return (
    <section id="home" className="hero">
      <h1>Welcome to <span>Prince</span> Portfolio</h1>
      <p>Hi! I'm a developer.</p>

      <div className="hero-buttons">
        <a href="#projects" className="btn">View My Work</a>
        <a href="/cv.pdf" className="btn-outline">Download CV</a>
      </div>

      <div className="cards-section">
        <div className="card">
          <h2>Design</h2>
          <p>Creating beautiful and user-friendly interfaces.</p>
        </div>

        <div className="card">
          <h2>Development</h2>
          <p>Building responsive and functional websites.</p>
        </div>

        <div className="card">
          <h2>Problem Solving</h2>
          <p>Finding creative solutions to challenges.</p>
        </div>
      </div>
    </section>
  );
}
