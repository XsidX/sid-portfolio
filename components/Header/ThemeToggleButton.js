import React, { useEffect, useState } from 'react';
import MoonIcon from './icons/MoonIcon';
import SunIcon from './icons/SunIcon';

export default function ThemeToggle() {
  const [isMounted, setIsMounted] = useState(false);
  const [prefersDarkMode, setPrefersDarkMode] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setPrefersDarkMode(true);
    }
  }, []);

  const [theme, setTheme] = useState(() => {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
      return localStorage.getItem('theme');
    }

    if (prefersDarkMode) {
      return 'dark';
    }
    return 'light';
  });

  const toggleTheme = () => {
    const t = theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', t);
    setTheme(t);
  };

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.remove('dark');
    } else {
      root.classList.add('dark');
    }
  }, [theme]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted ? (
    <div className="inline-flex ">
      <button
        type="button"
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        {theme === 'light' ? (
          <SunIcon className="" />
        ) : (
          <MoonIcon className="" />
        )}
      </button>

    </div>
  ) : (
    <div />
  );
}
