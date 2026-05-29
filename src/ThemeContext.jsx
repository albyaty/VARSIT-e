import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  theme: "dark",
  setTheme: () => {},
  accent: "#2d5bff",
  setAccent: () => {},
});

export const useTheme = () => useContext(ThemeContext);
