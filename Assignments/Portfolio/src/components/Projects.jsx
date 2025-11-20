import React from "react";
import "./Projects.css";   // Make sure this file exists

const Projects = () => {
  return (
    <div className="projects">
      <h1 className="section-title">Prince's Projects</h1>

      <div className="project-grid">
        <div className="project-card">
          <img src="/images/project1.png" alt="Project 1" />
          <h3>Project 1</h3>
          <p>Short description here...</p>
        </div>

        <div className="project-card">
          <img src="/images/project2.png" alt="Project 2" />
          <h3>Project 2</h3>
          <p>Short description here...</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
