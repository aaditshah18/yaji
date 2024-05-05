import { ReactNode, createContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

type ThemeContext = {
    theme: Theme
    toggleTheme: () => void;
  }

export const ThemeContext = createContext<ThemeContext | null>(null);

export const ThemeProvider = ({ children }: {children: ReactNode}) => {
  const [theme, setTheme] = useState<Theme>(
    localStorage.getItem("theme") as (Theme | null) || "light"
  );
    
  useEffect(() => {
    localStorage.setItem("theme", theme);
    
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
    
  const toggleTheme = () => {
    setTheme(t => t === "dark" ? "light" : "dark");
  };
    

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};