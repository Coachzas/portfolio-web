import { useEffect, useState } from 'react';
import { LanguageContext } from './languageContextValue';

const STORAGE_KEY = 'portfolio-language';

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    const savedLanguage = window.localStorage.getItem(STORAGE_KEY);
    return savedLanguage === 'th' ? 'th' : 'en';
  });

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language;
  }, [language]);

  function changeLanguage(nextLanguage) {
    if (nextLanguage === 'en' || nextLanguage === 'th') {
      setLanguage(nextLanguage);
    }
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
