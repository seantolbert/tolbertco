import AltHome from "../alt/AltHome";
import AltThemeController from "../alt/AltThemeController";
import { useEffect, useContext } from "react";
import { AppState } from "..";
import { batch } from "@preact/signals-react";
import Cursor from "../Cursor";

export default function Alt() {
  const { theme, xPosition, yPosition, outerX, outerY } = useContext(AppState);

  useEffect(() => {
    if (window.matchMedia("(prefers-colorScheme: 'light')").matches) {
      theme.value = "light";
    } else {
      theme.value = "dark";
    }
  });

  const handleMouseMove = (e) => {
    batch(() => {
      xPosition.value = e.pageX;
      yPosition.value = e.pageY;
      outerX.value = e.pageX + 4;
      outerY.value = e.pageY + 4;
    });
  };

  return (
    <div
      className="dark:bg-dark bg-light h-screen cursor-none"
      onMouseMove={(e) => handleMouseMove(e)}
    >
      <Cursor />
      {/* <AltBarAnimation /> */}
      {/* <AltBarAnimation2 /> */}
      <AltThemeController />
      <AltHome />
    </div>
  );
}
