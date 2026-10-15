import { portfolioData } from '../data/portfolioData';

function Skills() {
  return (
    <section className="section content-width" id="skills">
      <div className="section-heading">
        <p className="eyebrow">Tools of the trade</p>
        <h2>Skills<span className="brand-period">.</span></h2>
      </div>
      <div className="skills-grid">
        {portfolioData.skills.map((group, index) => (
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
