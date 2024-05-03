import useTheme from "../../hooks/useTheme.tsx";
import { Moon, Sun } from "../Icons";
import { SVGProps } from "react";

export default function ThemeToggle () {
  const { theme, toggleTheme } = useTheme();
  const iconProps: SVGProps<SVGSVGElement> = {
    className: "cursor-pointer hover:opacity-75",
    onClick: () => toggleTheme(),
  };

  return theme === "light" ? <Sun {...iconProps} /> : <Moon {...iconProps} />;
}