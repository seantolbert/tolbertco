import AltHome from "../alt/AltHome";
import AltThemeController from "../alt/AltThemeController";
import { useEffect, useContext } from "react";
import { AppState } from "..";
import { batch } from "@preact/signals-react";
import Cursor from "../Cursor";
// import AltBarAnimation from "../alt/AltBarAnimation";
// import AltBarAnimation2 from '../alt/AltBarAnimation2'
import Portfolio from "../alt/Portfolio";
import About from "../alt/About";
import Resources from "../alt/Resources";
import Contact from "../alt/Contact";
import Experience from "../alt/Experience";

export default function Alt() {
  const { theme, xPosition, yPosition, showCursor, selected } =
    useContext(AppState);

  useEffect(() => {
    if (window.matchMedia("(prefers-colorScheme: 'light')").matches) {
      theme.value = "light";
    } else {
      theme.value = "dark";
    }
  });

  // const handleMouseEnter = () => {
  //   showCursor.value = true;
  // };

  // const handleMouseLeave = () => {
  //   showCursor.value = false;
  // };

  // const handleMouseMove = (e) => {
  //   batch(() => {
  //     xPosition.value = e.pageX;
  //     yPosition.value = e.pageY;
  //   });
  // };

  return (
    <div
      className="dark:bg-dark bg-light"
      // onMouseMove={(e) => handleMouseMove(e)}
      // onMouseEnter={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}
    >
      <div className="">
        {/* <Cursor /> */}
      </div>
      <AltThemeController />
      <div className="m-0 md:m-2 lg:m-7">
        <AltHome />
        {selected.value === "Portfolio" && <Portfolio />}
        {selected.value === "Experience" && <Experience />}
        {selected.value === "About" && <About />}
        {selected.value === "Resources" && <Resources />}
        {selected.value === "Contact" && <Contact />}
      </div>
          

    </div>
  );
}
