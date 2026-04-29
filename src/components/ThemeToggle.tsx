// src/components/ThemeToggle.tsx
"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    setIsDark(root.classList.contains("dark"));
    setMounted(true);
  }, []);

  function toggleTheme() {
    const root = document.documentElement;
    const next = !root.classList.contains("dark");
    root.classList.toggle("dark", next);
    localStorage.setItem("rung-theme", next ? "dark" : "light");
    setIsDark(next);
  }

  if (!mounted) {
    return (
      <button
        aria-label="Toggle theme"
        className="fixed right-4 top-4 z-50 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-black/10 bg-white text-slate-900 shadow-lg"
      >
        <Moon size={18} />
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className={`fixed right-4 top-4 z-50 inline-flex h-11 w-11 items-center justify-center rounded-2xl border shadow-lg transition ${
        isDark
          ? "border-red-900/40 bg-black text-white hover:bg-red-950/40"
          : "border-black/10 bg-white text-slate-900 hover:bg-slate-50"
      }`}
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}