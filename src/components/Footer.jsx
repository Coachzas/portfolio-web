import { portfolioData } from '../data/portfolioData';
import Icon from './Icon';
import useEmailCopy from './useEmailCopy';
import { useLanguage } from '../context/useLanguage';

function Footer() {
  const { language } = useLanguage();
  const { personal } = portfolioData[language];
  const { email, name, socialLinks } = personal;
  const { footer, ui } = portfolioData[language];
  const { copyEmail, copyStatus } = useEmailCopy(email, ui);

  return (
    <footer className="site-footer" id="contact">
      <div className="content-width footer-content">
        <div className="footer-contact">
          <p className="eyebrow">{footer.heading}</p>
          <h2>{footer.title}</h2>
          <p className="footer-description">{footer.description}</p>
          <div className="footer-contact-links">
            <a className="footer-contact-link" href={`mailto:${email}`} onClick={copyEmail}>
              <Icon name="mail" size={20} />
              <span>{email}</span>
            </a>
            {socialLinks.filter((link) => link.icon !== 'mail').map((link) => (
              <a
                className="footer-contact-link"
                href={link.href}
                key={link.name}
                rel="noreferrer"
                target="_blank"
              >
                <Icon name={link.icon} size={20} />
                <span>{link.name}</span>
              </a>
            ))}
            <a
              className="footer-contact-link"
              download="Tirawat-Pisut-Resume.pdf"
              href="/resume.pdf"
            >
              <Icon name="download" size={20} />
              <span>{footer.resumeLabel}</span>
            </a>
          </div>
          {copyStatus && <span className="copy-notification" role="status">{copyStatus}</span>}
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} {name}. {footer.copyright}</p>
          <a className="back-to-top" href="#hero" aria-label={footer.backToTopLabel}>
            {footer.backToTop} <Icon name="up" size={17} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
