import { useContext } from "react";
import { AppState } from "..";

export default function AltThemeController() {
  const { theme, chosen, highlight, handleThemeSwitch } = useContext(AppState);

  return (
    <div className="fixed right-0 flex flex-col gap-5 p-5 items-end z-[10]">
      <button
        onClick={handleThemeSwitch}
        className="shadow-smallLight dark:shadow-smallDark p-2 dark:text-light text-dark rounded-md text-xl font-bold"
      >
        {theme.value === "dark" ? "light" : "dark"}
      </button>
      <form className="flex items-center gap-1">
        <label htmlFor="highlight">highlight</label>
        <input
          type="color"
          name="highlight"
          className="h-10 w-10 border-transparent"
          onChange={(e) => (highlight.value = e.target.value)}
          value={highlight.value}
        />
      </form>
      <form className="flex items-center gap-1">
        <label htmlFor="main">main</label>
        <div>
          <input
            type="color"
            name="main"
            className="h-10 w-10 border-transparent"
            onChange={(e) => (chosen.value = e.target.value)}
            value={chosen.value}
          />
        </div>
      </form>
    </div>
  );
}
