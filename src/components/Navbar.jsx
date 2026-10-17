import { useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import Icon from './Icon';
import { useTheme } from '../context/useTheme';
import { useLanguage } from '../context/useLanguage';
import { portfolioData } from '../data/portfolioData';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const { navbar, ui } = portfolioData[language];
  const themeLabel = theme === 'dark' ? ui.switchToLight : ui.switchToDark;

  return (
    <header className="site-header fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
      <nav className="navbar content-width" aria-label={ui.navigationLabel}>
        <a className="brand" href="#hero" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark">C</span>
          <span>Coach<span className="brand-period">.</span></span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? ui.closeMenu : ui.openMenu}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <Icon name={menuOpen ? 'close' : 'menu'} size={22} />
        </button>
        <div
          className={`nav-links${menuOpen ? ' nav-links-open' : ''}`}
          id="primary-navigation"
        >
          {navbar.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="nav-actions">
            <div className="language-switcher" role="group" aria-label={ui.languageLabel}>
              {['th', 'en'].map((option) => (
                <button
                  aria-pressed={language === option}
                  className={`language-option${language === option ? ' language-option-active' : ''}`}
                  key={option}
                  onClick={() => setLanguage(option)}
                  type="button"
                >
                  {option.toUpperCase()}
                </button>
              ))}
            </div>
            <button
              aria-label={themeLabel}
              className="theme-toggle"
              onClick={toggleTheme}
              title={themeLabel}
              type="button"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              <span>{theme === 'dark' ? ui.lightMode : ui.darkMode}</span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
