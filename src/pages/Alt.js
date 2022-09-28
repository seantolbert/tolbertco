import AltHome from "../alt/AltHome";
import AltThemeController from "../alt/AltThemeController";
import { useEffect, useContext } from "react";
import { AppState } from "..";
import { batch } from "@preact/signals-react";
import Cursor from "../Cursor";
// import AltBarAnimation from '../alt/AltBarAnimation'
// import AltBarAnimation2 from '../alt/AltBarAnimation2'
import AltPageSwitch from "../alt/AltPageSwitch";

export default function Alt() {
  const { theme, xPosition, yPosition, showCursor } = useContext(AppState);

  useEffect(() => {
    if (window.matchMedia("(prefers-colorScheme: 'light')").matches) {
      theme.value = "light";
    } else {
      theme.value = "dark";
    }
  });

  const handleMouseEnter = () => {
    showCursor.value = true;
  };

  const handleMouseLeave = () => {
    showCursor.value = false;
  };

  const handleMouseMove = (e) => {
    batch(() => {
      xPosition.value = e.pageX;
      yPosition.value = e.pageY;
    });
  };

  return (
    <div
      className="dark:bg-dark bg-light h-full cursor-none"
      onMouseMove={(e) => handleMouseMove(e)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Cursor />
      {/* <AltBarAnimation /> */}
      {/* <AltBarAnimation2 /> */}
      <AltThemeController />
      <div className="m-7">
        <AltHome />
        <AltPageSwitch />
      </div>
    </div>
  );
}
