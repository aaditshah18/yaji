import { ThemeContext } from "../../contexts/ThemeContext.tsx";
import { Moon, Sun } from "../Icons";
import { SVGProps, useContext } from "react";

export default function ThemeToggle () {
  const themeContext = useContext(ThemeContext);

  if (themeContext === null) {
    return null;
  }

  const iconProps: SVGProps<SVGSVGElement> = {
    className: "cursor-pointer hover:opacity-75",
    onClick: () => themeContext.toggleTheme(),
  };

  return themeContext.theme === "light" ? <Sun {...iconProps} /> : <Moon {...iconProps} />;
}