import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useContext } from "react";
import { AppState } from "..";
import AltSocial from "./AltSocial";

gsap.registerPlugin(ScrollTrigger);

export default function AltHome() {
  const { theme, highlight, chosen } = useContext(AppState);

  // assigning the 
  useEffect(() => {
    theme.value === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [theme.value]);

  // gsap animations

  useEffect(() => {
    const shadowTheme =
      theme.value === "dark"
        ? "13px 13px 26px #2f2f2f, -13px -13px 26px #5f5f5f"
        : "13px 13px 26px #a3a3a3, -13px -13px 26px #ffffff";
    gsap.to("#Github", { duration: 1, boxShadow: shadowTheme });
    gsap.to("#Linkedin", { duration: 1, boxShadow: shadowTheme });
    gsap.to("#Codepen", { duration: 1, boxShadow: shadowTheme });
  }, [theme.value]);

  // social 'database'

  return (
    <main className="dark:bg-dark bg-light text-dark dark:text-light relative">
      <div className="flex flex-col gap-6">
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
      </div>
      <AltSocial />
    </main>
  );
}
