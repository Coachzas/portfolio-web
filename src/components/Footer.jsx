import { portfolioData } from '../data/portfolioData';
import {
  ArrowDownToLine,
  ArrowUpRight,
  Mail,
} from 'lucide-react';
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
        <div className="contact-heading">
          <p className="contact-label">
            <Mail aria-hidden="true" size={15} />
            {footer.heading}
            <span aria-hidden="true">/</span>
            {language === 'th' ? 'GET IN TOUCH' : 'ช่องทางการติดต่อ'}
          </p>
          <h2>{footer.title}</h2>
          <p className="footer-description">{footer.description}</p>
        </div>

        <div className="contact-bento-grid grid gap-4">
          <a className="contact-bento-card contact-email-card" href={`mailto:${email}`} onClick={copyEmail}>
            <span className="contact-card-icon"><Mail aria-hidden="true" size={21} /></span>
            <span className="contact-card-copy">
              <span className="contact-card-label">{footer.emailPrompt}</span>
              <strong>{email}</strong>
            </span>
            <ArrowUpRight aria-hidden="true" className="contact-card-arrow" size={19} />
          </a>
          {socialLinks.filter((link) => link.icon !== 'mail').map((link) => {
            const isGithub = link.icon === 'github';

            return (
              <a
                className={`contact-bento-card contact-social-card${isGithub ? ' contact-github-card' : ' contact-linkedin-card'}`}
                href={link.href}
                key={link.name}
                rel="noreferrer"
                target="_blank"
              >
                <span className="contact-card-icon">
                  <Icon aria-hidden="true" name={link.icon} size={21} />
                </span>
                <span className="contact-card-copy">
                  <strong>{link.name}</strong>
                  <span>{isGithub ? footer.githubDetail : footer.linkedinDetail}</span>
                </span>
                <ArrowUpRight aria-hidden="true" className="contact-card-arrow" size={18} />
              </a>
            );
          })}
          <a
            className="contact-bento-card contact-resume-card"
            download="Tirawat-Pisut-Resume.pdf"
            href="/Tirawat Pisut - Resume (English).pdf"
          >
            <span className="contact-card-icon"><ArrowDownToLine aria-hidden="true" size={21} /></span>
            <span className="contact-card-copy">
              <strong>{footer.resumeLabel}</strong>
              <span>{footer.resumePrompt}</span>
            </span>
            <ArrowUpRight aria-hidden="true" className="contact-card-arrow" size={18} />
          </a>
        </div>
        {copyStatus && <span className="copy-notification" role="status">{copyStatus}</span>}

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
