"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "phosphor-react";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.setAttribute("data-theme", storedTheme);
    } else {
      document.documentElement.setAttribute("data-theme", theme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "sunset" ? "light" : "sunset";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="btn btn-sm flex items-center gap-4 mx-[-12px] mt-[-5px]"
    >
      {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
      <span className="font-thin">Theme</span>
    </button>
  );
}
