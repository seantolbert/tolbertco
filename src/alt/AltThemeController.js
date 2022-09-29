import { useContext } from "react";
import { AppState } from "..";
import { useSignal } from "@preact/signals-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBrush,
  faXmark,
  faSun,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";

export default function AltThemeController() {
  const { theme, chosen, highlight, handleThemeSwitch } = useContext(AppState);

  const show = useSignal(false);

  return (
    <div
      className={`fixed xs:bottom-0 bottom-0 sm:bottom-0 md:top-0 right-0 flex sm:flex-col-reverse md:flex-col items-center gap-5 p-5 z-[10] rounded-xl m-1 h-fit group `}
    >
      {/* paintbutton */}

      {show.value ? (
        <>
          {/* menu */}

          <button
            onClick={() => {
              show.value = !show.value;
              console.log(show.value);
            }}
            className={`w-16 h-16 dark:text-light text-dark text-3xl ${
              show
                ? "dark:shadow-pressedSmallDark shadow-pressedSmallLight"
                : "dark:shadow-smallDark shadow-smallLight rounded-full"
            } dark:shadow-smallDark shadow-smallLight rounded-full text-3xl`}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>

          <button
            onClick={handleThemeSwitch}
            className="shadow-smallLight dark:shadow-smallDark w-16 h-16 dark:text-light text-dark rounded-md text-3xl font-bold"
          >
            {theme.value === "dark" ? (
              <FontAwesomeIcon icon={faSun} />
            ) : (
              <FontAwesomeIcon icon={faMoon} />
            )}
          </button>
          <form className="flex flex-col items-center justify-center gap-1 text-sm font-bold dark:text-light text-dark dark:shadow-smallDark shadow-smallLight rounded-lg p-1">
            <label htmlFor="highlight">two</label>
            <input
              id="mainInput"
              type="color"
              name="highlight"
              className="h-14 w-14 bg-transparent rounded-lg border-none cursor-pointer appearance-none"
              onChange={(e) => (highlight.value = e.target.value)}
              value={highlight.value}
            />
          </form>
          <form className="flex flex-col items-center justify-center gap-1 text-sm font-bold dark:text-light text-dark dark:shadow-smallDark shadow-smallLight rounded-lg p-1">
            <label htmlFor="main">one</label>
            <div>
              <input
                id="secondaryInput"
                type="color"
                name="main"
                className="h-14 w-14 bg-transparent rounded-lg border-none cursor-pointer appearance-none "
                onChange={(e) => (chosen.value = e.target.value)}
                value={chosen.value}
              />
            </div>
          </form>
        </>
      ) : (
        <button
          onClick={() => (show.value = !show.value)}
          className={`w-16 h-16 dark:text-light text-dark text-3xl transition-shadow duration-400 ${
            show
              ? "hover:dark:shadow-pressedSmallDark hover:shadow-pressedSmallLight"
              : "hover:dark:shadow-smallDark shadow-smallLight "
          } rounded-full `}
        >
          <FontAwesomeIcon icon={faBrush} />
        </button>
      )}
    </div>
  );
}
