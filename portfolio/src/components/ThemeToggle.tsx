'use client';

import { useEffect, useState } from 'react';

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
            <svg viewBox="0 0 24 24" focusable="false">
              <path d="M20.3 15.4A8.2 8.2 0 0 1 8.6 3.7 8.2 8.2 0 1 0 20.3 15.4Z" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" focusable="false">
              <circle cx="12" cy="12" r="3.5" />
              <path d="M12 2v2.2M12 19.8V22M4.9 4.9l1.6 1.6M17.5 17.5l1.6 1.6M2 12h2.2M19.8 12H22M4.9 19.1l1.6-1.6M17.5 6.5l1.6-1.6" />
            </svg>
          )}
        </span>
      </span>
      <span className="theme-toggle__label">{theme}</span>
    </button>
  );
}
