import { useLayoutEffect, useState } from 'react';
import { ThemeContext } from './themeContextValue';

const STORAGE_KEY = 'portfolio-theme';

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const savedTheme = window.localStorage.getItem(STORAGE_KEY);
    return savedTheme === 'light' ? 'light' : 'dark';
  });

  useLayoutEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('light', theme === 'light');
    root.classList.toggle('dark', theme === 'dark');
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
