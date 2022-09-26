import BirthdayList from "../projects/Birthdays/BirthdayList";
import ColorList from "../projects/ColorGen/ColorList";
import DarkModeDemo from "../projects/DarkMode/DarkModeDemo";
import { useState, useEffect } from "react";

export default function Projects() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <main className="p-2 dark:bg-dark bg-white h-full lg:h-screen">
      <div className="w-full flex justify-between">
        <h1 className="text-primary text-3xl font-bold mb-10">
          React Demo Projects
        </h1>
        <button onClick={handleThemeSwitch}> DARK MODE DEMO</button>
      </div>

      <div className="flex flex-wrap gap-5 justify-center md:justify-start">
        <DarkModeDemo />
        <ColorList />
        <BirthdayList />
      </div>
    </main>
  );
}
