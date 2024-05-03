import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export default function useTheme(defaultTheme?: Theme) {
  const [theme, setTheme] = useState<Theme>(defaultTheme ?? "light");

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


  return {
    theme,
    setTheme,
    toggleTheme,
  };
}