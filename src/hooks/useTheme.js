import { useEffect, useState } from "react";

export function useTheme() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    console.log("[useTheme] Initial storedTheme:", storedTheme);
    if (storedTheme === "dark") return true;
    if (storedTheme === "light") return false;
    // If no theme is stored, use OS preference
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    console.log("[useTheme] No stored theme, prefersDark:", prefersDark);
    return prefersDark;
  });

  useEffect(() => {
    // Set the <html> class and localStorage on mount and when isDarkMode changes
    console.log("[useTheme] useEffect isDarkMode:", isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  useEffect(() => {
    const updateTheme = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    };
    const onStorage = (e) => {
      if (e.key === "theme") {
        if (e.newValue === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
        updateTheme();
      }
    };
    window.addEventListener("storage", onStorage);
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => {
      window.removeEventListener("storage", onStorage);
      observer.disconnect();
    };
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return [isDarkMode, toggleTheme];
}
