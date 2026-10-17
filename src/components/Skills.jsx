import { portfolioData } from '../data/portfolioData';
import { useLanguage } from '../context/useLanguage';
import { Code2, Video } from 'lucide-react';
import {
  siClaude,
  siCss,
  siDocker,
  siExpress,
  siGit,
  siGooglegemini,
  siHtml5,
  siJavascript,
  siN8n,
  siNodedotjs,
  siPostgresql,
  siPostman,
  siPrisma,
  siReact,
  siSocketdotio,
  siTailwindcss,
  siVercel,
  siVite,
} from 'simple-icons';

const simpleIcons = {
  claude: siClaude,
  css: siCss,
  docker: siDocker,
  express: siExpress,
  git: siGit,
  googlegemini: siGooglegemini,
  html5: siHtml5,
  javascript: siJavascript,
  n8n: siN8n,
  nodedotjs: siNodedotjs,
  postgresql: siPostgresql,
  postman: siPostman,
  prisma: siPrisma,
  react: siReact,
  socketdotio: siSocketdotio,
  tailwindcss: siTailwindcss,
  vercel: siVercel,
  vite: siVite,
};

const fallbackIcons = {
  'rest-api': Code2,
  vscode: Code2,
  zegocloud: Video,
};

function SkillIcon({ name }) {
  const simpleIcon = simpleIcons[name];
  if (simpleIcon) {
    return (
      <svg
        aria-hidden="true"
        className="skill-tag-icon"
        fill={`#${simpleIcon.hex}`}
        focusable="false"
        viewBox={simpleIcon.svg.viewBox}
      >
        <path d={simpleIcon.path} />
      </svg>
    );
  }

  const FallbackIcon = fallbackIcons[name];
  return <FallbackIcon aria-hidden="true" className="skill-tag-icon" />;
}

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
          <article className="skill-group panel" key={group.category.en}>
            <div className="skill-group-heading">
              <span className="skill-index">0{index + 1}</span>
              <h3 className="skill-category-title">
                {group.category}
              </h3>
            </div>
            <div className="tag-list">
              {group.items.map((skill) => (
                <span className="skill-tag" key={skill.name}>
                  <SkillIcon name={skill.icon} />
                  <span>{skill.name}</span>
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
