import { createContext } from "react";

export interface ThemeContextType {
  darkModeOn: boolean;
  toggleDarkMode: () => void;
}

export const themeContext = createContext<ThemeContextType | null>(null);