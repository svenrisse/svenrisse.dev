"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";

export default function ThemeToggler() {
  const { theme, setTheme } = useTheme();

  const SWITCH = () => {
    switch (theme) {
      case "light":
        setTheme("dark");
        break;
      case "dark":
        setTheme("light");
        break;
      default:
        break;
    }
  };

  const TOGGLE_THEME = () => {
    //@ts-expect-error startViewTransition
    if (!document.startViewTransition) SWITCH();

    //@ts-expect-error startViewTransition
    document.startViewTransition(SWITCH); // eslint-disable-line
  };

  return (
    <Button variant="ghost" size="icon" className="rounded-full">
      <SunIcon
        onClick={TOGGLE_THEME}
        className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
      />
      <MoonIcon
        onClick={TOGGLE_THEME}
        className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
