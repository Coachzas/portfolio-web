import { portfolioData } from '../data/portfolioData';
import Icon from './Icon';
import useEmailCopy from './useEmailCopy';
import { useLanguage } from '../context/useLanguage';

function Hero() {
  const { language } = useLanguage();
  const content = portfolioData[language];
  const { personal, hero, ui } = content;
  const { copyEmail, copyStatus } = useEmailCopy(personal.email, ui);

  return (
    <section className="hero-section content-width" id="hero">
      <div className="hero-copy">
        <p className="eyebrow"><span className="status-dot" /> {hero.tagline}</p>
        <h1>
          {hero.greeting} <span className="gradient-text">{personal.name}</span>
          <br />
          <span className="hero-title">{personal.title}</span>
        </h1>
        <p className="hero-bio">{personal.bio}</p>
        <p className="hero-education">{personal.education}</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            {hero.projectsLink} <Icon name="arrow" size={17} />
          </a>
          <a className="button button-secondary" href="#contact">
            {hero.contactLink}
          </a>
        </div>
        <div className="social-links" aria-label="Social links">
          {personal.socialLinks.map((link) => (
            link.icon === 'mail' ? (
              <button
                className="social-link-button"
                key={link.name}
                type="button"
                aria-label={hero.emailCopyLabel}
                title={hero.emailCopyLabel}
                onClick={copyEmail}
              >
                <Icon name={link.icon} size={19} />
              </button>
            ) : (
              <a
                key={link.name}
                href={link.href}
                aria-label={link.name}
                title={link.name}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
              >
                <Icon name={link.icon} size={19} />
              </a>
            )
          ))}
          {copyStatus && <span className="copy-notification" role="status">{copyStatus}</span>}
        </div>
      </div>
      <div className="hero-art" aria-hidden="true">
        <div className="art-orbit orbit-one" />
        <div className="art-orbit orbit-two" />
        <div className="art-glow" />
        <div className="code-card">
          <div className="code-card-top"><span /><span /><span /></div>
          <div className="code-lines">
            <span><i>const</i> developer = {'{'}</span>
            <span className="code-indent">build: <b>&quot;{hero.code.build}&quot;</b>,</span>
            <span className="code-indent">automate: <b>&quot;{hero.code.automate}&quot;</b>,</span>
            <span className="code-indent">deploy: <b>&quot;{hero.code.deploy}&quot;</b></span>
            <span>{'}'};</span>
            <span className="code-cursor">▌</span>
          </div>
          <div className="floating-tag tag-react">React</div>
          <div className="floating-tag tag-node">Node.js</div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
