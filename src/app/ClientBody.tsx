"use client";

import { useCallback, useEffect, useState } from "react";
import WebringNav from "@/components/WebringNav";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;

    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
      document.documentElement.classList.toggle('dark', prefersDark);
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(prevTheme => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      document.documentElement.classList.toggle('dark', newTheme === 'dark');
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  }, []);

  useEffect(() => {
    window.toggleTheme = toggleTheme;
  }, [toggleTheme]);

  return (
    <body
      className={`min-h-screen antialiased bg-neutral-50 dark:bg-neutral-950 ${theme === 'dark' ? 'dark' : ''}`}
      suppressHydrationWarning
    >
      {children}
      <WebringNav />
    </body>
  );
}

declare global {
  interface Window {
    toggleTheme: () => void;
  }
}

