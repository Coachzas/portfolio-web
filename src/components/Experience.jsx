import { portfolioData } from '../data/portfolioData';

function Experience() {
  return (
    <section className="section content-width" id="experience">
      <div className="section-heading">
        <p className="eyebrow">Where I&apos;ve worked</p>
        <h2>Experience<span className="brand-period">.</span></h2>
      </div>
      <div className="timeline">
        {portfolioData.experiences.map((experience) => (
          <article className="timeline-entry panel" key={`${experience.company}-${experience.period}`}>
            <div className="timeline-marker" aria-hidden="true" />
            <div className="experience-topline">
              <div>
                <h3>{experience.role}</h3>
                <p className="company-name">{experience.company}</p>
              </div>
              <span className="period-badge">{experience.period}</span>
            </div>
            <p className="experience-description">{experience.description}</p>
            <ul className="highlight-list">
              {experience.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
            <div className="tag-list" aria-label="Technologies used">
              {experience.techStack.map((tech) => (
                <span className="tech-tag" key={tech}>{tech}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
