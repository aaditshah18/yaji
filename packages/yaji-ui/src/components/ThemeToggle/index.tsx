import useTheme from "../../hooks/useTheme.tsx";
import { Moon, Sun } from "../Icons";

export default function ThemeToggle () {
  const { theme, toggleTheme } = useTheme();

  return theme === "light" ? <Sun onClick={toggleTheme} /> : <Moon onClick={toggleTheme} />;
}