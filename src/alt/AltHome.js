import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useContext } from "react";
import { AppState } from "..";
import AltSocial from "./AltSocial";

gsap.registerPlugin(ScrollTrigger);

export default function AltHome() {
  const { theme, highlight, chosen } = useContext(AppState);

  useEffect(() => {
    theme.value === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [theme.value]);

  return (
    <main className="text-dark dark:text-light">
      <div className="flex flex-col gap-6 m-7">
        <p className={`text-9xl font-bold dark:text-light text-dark`}>
          Hey! my name is
          <span style={{ color: chosen.value }}> Sean</span>
        </p>
        <p style={{ color: highlight.value }} className="text-4xl ">
          I make <span style={{ color: highlight.value }}>shopify</span> themes
          and web apps
        </p>
        <p className="text-9xl">
          Come say <span style={{ color: chosen.value }}>Hi!</span>
        </p>
        <AltSocial />
      </div>
    </main>
  );
}
