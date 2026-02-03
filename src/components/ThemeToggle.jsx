"use client";

import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/hooks/useTheme";

export const ThemeToggle = () => {
  const [isDarkMode, toggleTheme, mounted] = useTheme();

  // Don't render until mounted to prevent hydration issues
  if (!mounted) {
    return (
      <div className="fixed max-sm:hidden top-5 right-5 z-60 p-2 rounded-full w-10 h-10" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed max-sm:hidden top-5 right-5 z-60 p-2 rounded-full transition-colors duration-300",
        "focus:outlin-hidden"
      )}
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" />
      )}
    </button>
  );
};
