import { portfolioData } from '../data/portfolioData';
import Icon from './Icon';

function Hero() {
  const { personal } = portfolioData;

  return (
    <section className="hero-section content-width" id="hero">
      <div className="hero-copy">
        <p className="eyebrow"><span className="status-dot" /> Full-stack · DevOps · Automation</p>
        <h1>
          Hi, I&apos;m <span className="gradient-text">{personal.name}</span>
          <br />
          <span className="hero-title">{personal.title}</span>
        </h1>
        <p className="hero-bio">{personal.bio}</p>
        <p className="hero-education">{personal.education}</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            Explore my work <Icon name="arrow" size={17} />
          </a>
          <a className="button button-secondary" href="#contact">
            Get in touch
          </a>
        </div>
        <div className="social-links" aria-label="Social links">
          {personal.socialLinks.map((link) => (
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
          ))}
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
            <span className="code-indent">build: <b>&quot;web apps&quot;</b>,</span>
            <span className="code-indent">automate: <b>&quot;workflows&quot;</b>,</span>
            <span className="code-indent">deploy: <b>&quot;with care&quot;</b></span>
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
