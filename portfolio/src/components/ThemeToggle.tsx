'use client';

import { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa6';

type Theme = 'light' | 'dark';

function getAppliedTheme(): Theme {
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    setTheme(getAppliedTheme());

    const colorScheme = window.matchMedia('(prefers-color-scheme: dark)');
    const followSystemTheme = (event: MediaQueryListEvent) => {
      if (localStorage.getItem('portfolio-theme')) return;

      const systemTheme: Theme = event.matches ? 'dark' : 'light';
      document.documentElement.dataset.theme = systemTheme;
      document.documentElement.style.colorScheme = systemTheme;
      setTheme(systemTheme);
    };

    colorScheme.addEventListener('change', followSystemTheme);
    return () => colorScheme.removeEventListener('change', followSystemTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme: Theme = getAppliedTheme() === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = nextTheme;
    document.documentElement.style.colorScheme = nextTheme;
    localStorage.setItem('portfolio-theme', nextTheme);
    setTheme(nextTheme);
  };

  const nextTheme = theme === 'dark' ? 'light' : 'dark';

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${nextTheme} theme`}
      title={`Switch to ${nextTheme} theme`}
      aria-pressed={theme === 'dark'}
    >
      <span className="theme-toggle__track" aria-hidden="true">
        <span className="theme-toggle__thumb">
          {theme === 'dark' ? (
            <FaMoon aria-hidden="true" />
          ) : (
            <FaSun aria-hidden="true" />
          )}
        </span>
      </span>
      <span className="theme-toggle__label">{theme}</span>
    </button>
  );
}
