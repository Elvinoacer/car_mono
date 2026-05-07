"use client";

import { useTheme } from "@/components/providers/ThemeProvider";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      className={`inline-flex items-center justify-center rounded-full border border-outline-variant bg-surface px-3 py-2 text-on-surface transition-colors hover:border-secondary hover:text-secondary ${className}`}
      onClick={toggleTheme}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
      type="button"
    >
      <span className="material-symbols-outlined text-[18px]">
        {isDark ? "light_mode" : "dark_mode"}
      </span>
    </button>
  );
}
