import { portfolioData } from '../data/portfolioData';
import Icon from './Icon';

function Footer() {
  const email = portfolioData.personal.socialLinks.find((link) => link.icon === 'mail');

  return (
    <footer className="site-footer" id="contact">
      <div className="content-width footer-content">
        <div>
          <p className="eyebrow">Have something in mind?</p>
          <h2>Let&apos;s build something useful.</h2>
          <a className="footer-email" href={email.href}>{email.href.replace('mailto:', '')}</a>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} {portfolioData.personal.name}. Built with care.</p>
          <a className="back-to-top" href="#hero" aria-label="Back to top">
            Back to top <Icon name="up" size={17} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
