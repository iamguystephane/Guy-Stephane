import React, { useState, type ReactNode, useEffect } from "react";
import { themeContext } from "./CreateThemeContext";

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [darkModeOn, setDarkModeOn] = useState<boolean>(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) return storedTheme === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    if (darkModeOn) {
      document.documentElement.classList.add("dark");
      document.documentElement.style.colorScheme = "dark";
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.style.colorScheme = "light";
      localStorage.setItem("theme", "light");
    }
  }, [darkModeOn]);

  const toggleDarkMode = () => setDarkModeOn((prev) => !prev);

  return (
    <themeContext.Provider value={{ darkModeOn, toggleDarkMode }}>
      {children}
    </themeContext.Provider>
  );
};
