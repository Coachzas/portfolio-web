import { portfolioData } from '../data/portfolioData';
import { useLanguage } from '../context/useLanguage';

function Experience() {
  const { language } = useLanguage();
  const { experience } = portfolioData[language];
  return (
    <section className="section content-width" id="experience">
      <div className="section-heading">
        <p className="eyebrow">{experience.heading}</p>
        <h2>{experience.title}<span className="brand-period">.</span></h2>
      </div>
      <div className="timeline">
        {portfolioData[language].experiences.map((item) => (
          <article className="timeline-entry panel" key={`${item.company}-${item.period}`}>
            <div className="timeline-marker" aria-hidden="true" />
            <div className="experience-topline">
              <div>
                <h3>{item.role}</h3>
                <p className="company-name">{item.company}</p>
              </div>
              <span className="period-badge">{item.period}</span>
            </div>
            <p className="experience-description">{item.description}</p>
            <ul className="highlight-list">
              {item.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
            <div className="tag-list" aria-label={experience.technologiesLabel}>
              {item.techStack.map((tech) => (
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
