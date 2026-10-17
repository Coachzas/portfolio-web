import { portfolioData } from '../data/portfolioData';
import { useLanguage } from '../context/useLanguage';

function Skills() {
  const { language } = useLanguage();
  const { skillsSection, skills } = portfolioData[language];
  return (
    <section className="section content-width" id="skills">
      <div className="section-heading">
        <p className="eyebrow">{skillsSection.heading}</p>
        <h2>{skillsSection.title}<span className="brand-period">.</span></h2>
      </div>
      <div className="skills-grid">
        {skills.map((group, index) => (
          <article className="skill-group panel" key={group.category}>
            <div className="skill-group-heading">
              <span className="skill-index">0{index + 1}</span>
              <h3>{group.category}</h3>
            </div>
            <div className="tag-list">
              {group.items.map((skill) => (
                <span className="skill-tag" key={skill}>{skill}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
