"use client";

import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@/components/Icons";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const stored = localStorage.getItem("agk-theme") as "light" | "dark" | null;
    if (stored) {
      setTheme(stored);
      return;
    }
    if (window.matchMedia("(prefers-color-scheme: light)").matches) setTheme("light");
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("agk-theme", theme);
  }, [theme]);

  return (
    <button
      type="button"
      className="theme-toggle"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
      title="Toggle light / dark"
    >
      <span suppressHydrationWarning>{theme === "dark" ? <SunIcon /> : <MoonIcon />}</span>
    </button>
  );
}
