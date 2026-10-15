import { portfolioData } from '../data/portfolioData';

function Projects() {
  return (
    <section className="section section-tinted" id="projects">
      <div className="content-width">
        <div className="section-heading">
          <p className="eyebrow">Selected work</p>
          <h2>Projects<span className="brand-period">.</span></h2>
          <p className="section-intro">
            A few projects where software, automation, and useful ideas come together.
          </p>
        </div>
        <div className="project-grid">
          {portfolioData.projects.map((project, index) => (
            <article className="project-card panel" key={project.title}>
              <div className="project-number">0{index + 1}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tag-list">
                {project.techStack.map((tech) => (
                  <span className="tech-tag" key={tech}>{tech}</span>
                ))}
              </div>
              <a className="project-link" href="#contact">
                Ask me about this project <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
