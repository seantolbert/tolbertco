import gsap from "gsap";
import { useContext } from "react";
import { AppState } from ".";

export default function Cursor() {
  const { xPosition, yPosition } = useContext(AppState);

  gsap.to("#inner", {
    duration: 0.1,
    x: xPosition.value + "px",
    y: yPosition.value + "px",
  });

  gsap.to("#outer", {
    duration: 0.3,
    x: xPosition.value + "px",
    y: yPosition.value + "px",
  });

  return (
    <>
      <div
        id="inner"
        className="w-3 h-3 rounded-full dark:bg-light bg-dark absolute"
      ></div>
      <div id="outer" className=""></div>
    </>
  );
}
