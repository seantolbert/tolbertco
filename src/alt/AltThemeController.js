import { useContext } from "react";
import { AppState } from "..";
import { batch, effect } from "@preact/signals-react";
import Values from "values.js";

export default function AltThemeController() {
  const {
    theme,
    chosen,
    highlight,
    // darkPrime,
    // darkHigh,
    // lightHigh,
    // lightPrime,
    handleThemeSwitch,
    handlePrimaryChange,
    handleHighlightChange,
  } = useContext(AppState);

  // const handlePrimaryChange = (color) => {
  //   batch(() => {
  //     chosen.value = color;
  //     darkPrime.value = new Values(chosen.value).tint(30);
  //     lightPrime.value = new Values(chosen.value).shade(30);
  //   });
  // };

  // const handleHighlightChange = (color) => {
  //   highlight.value = color;
  //   darkHigh.value = new Values(highlight.value).tint(30);
  //   lightHigh.value = new Values(highlight.value).shade(30);
  // };

  return (
    <div className="fixed right-0 flex flex-col gap-5 p-5 items-end z-[10]">
      <button
        onClick={handleThemeSwitch}
        className="shadow-smallLight dark:shadow-smallDark p-2 dark:text-light text-dark rounded-md text-xl font-bold"
      >
        {theme.value === "dark" ? "light" : "dark"}
      </button>
      {/* <form
        onSubmit={handleHighlightChange}
        className="flex items-center gap-1"
      >
        <label htmlFor="highlight">highlight</label>
        <input
          type="color"
          name="highlight"
          className="h-10 w-10 border-transparent"
          onChange={(e) => (highlight.value = e.target.value)}
          value={highlight}
        />
      </form> */}
      <form onSubmit={handlePrimaryChange} className="flex items-center gap-1" >
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
