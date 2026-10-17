import { portfolioData } from '../data/portfolioData';
import Icon from './Icon';
import useEmailCopy from './useEmailCopy';
import { useLanguage } from '../context/useLanguage';

function Footer() {
  const { language } = useLanguage();
  const { email, name } = portfolioData[language].personal;
  const { footer, ui } = portfolioData[language];
  const { copyEmail, copyStatus } = useEmailCopy(email, ui);

  return (
    <footer className="site-footer" id="contact">
      <div className="content-width footer-content">
        <div>
          <p className="eyebrow">{footer.heading}</p>
          <h2>{footer.title}</h2>
          <button className="footer-email" type="button" onClick={copyEmail}>
            {email}
          </button>
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
