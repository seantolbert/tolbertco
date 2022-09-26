import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faCodepen,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { useState, useEffect } from "react";
import Values from "values.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AltHome() {

  
  // theme
  const [theme, setTheme] = useState(null);

  // color inputs
  const [highlight, setHighlight] = useState("#eaae39");
  const [chosen, setChosen] = useState("#b43a3a");
  // correlating theme colors
  const [darkHigh, setDarkHigh] = useState(new Values("#eaae39").tint(30));
  const [lightHigh, setLightHigh] = useState(new Values("#eaae39").shade(30));
  const [dark, setDark] = useState(new Values("#b43a3a").tint(30));
  const [light, setLight] = useState(new Values("#b43a3a").shade(30));
  
  // grabbing theme from browser
  useEffect(() => {
    if (window.matchMedia("(prefers-colorScheme: light)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  // assigning theme
  useEffect(() => {
    theme === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [theme]);

  // theme based dynamic color assignment
  const primary = theme === "dark" ? `#${dark.hex}` : `#${light.hex}`;
  const secondary = theme === "dark" ? `#${darkHigh.hex}` : `#${lightHigh.hex}`;









  // gsap animations

  // button hover effect
  const hoverTimeline = gsap.timeline({ paused: true });
  hoverTimeline.fromTo(
    "#GitHub",
    {
      duration: 0.5,
      scale: 1,
    },
    {
      scale: 1.2,
    }
    );
    
    useEffect(() => {
      const shadowTheme =
        theme === "dark"
          ? "13px 13px 26px #2f2f2f, -13px -13px 26px #5f5f5f"
          : "13px 13px 26px #a3a3a3, -13px -13px 26px #ffffff";
      gsap.to("#GitHub", { duration: 1, boxShadow: shadowTheme });
      gsap.to("#LinkedIn", { duration: 1, boxShadow: shadowTheme });
      gsap.to("#Codepen", { duration: 1, boxShadow: shadowTheme });
    }, [theme]);







  
  






  // handlers

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleMouseEnter = () => {
    hoverTimeline.play();
  };

  const handleMouseLeave = () => {
    hoverTimeline.reverse();
  };

  const handlePrimaryChange = (color) => {
    setChosen(color);
    setDark(new Values(chosen).tint(30));
    setLight(new Values(chosen).shade(30));
  };

  const handleHighlightChange = (color) => {
    setHighlight(color);
    setDarkHigh(new Values(highlight).tint(30));
    setLightHigh(new Values(highlight).shade(30));
  };




















  // social 'database'

  const social = [
    {
      name: "GitHub",
      url: "https://github.com/seantolbert",
      icon: faGithub,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/seantolbert/",
      icon: faLinkedinIn,
    },
    {
      name: "Codepen",
      url: "https://codepen.io/stolbert",
      icon: faCodepen,
    },
  ];



















  return (
    <main className="dark:bg-dark bg-light text-dark dark:text-light relative">
      
      {/* menu */}
      
      <div className="absolute top-0 right-0 flex flex-col gap-5 items-end">
        <button onClick={handleThemeSwitch} className="w-10 h-10">
          {theme === "dark" ? "light" : "dark"}
        </button>
        <div className="flex items-center gap-1">
          <label htmlFor="highlight">highlight</label>
          <input
            type="color"
            name="highlight"
            className="h-10 w-10 border-transparent"
            onChange={(e) => handleHighlightChange(e.target.value)}
            value={highlight}
          />
        </div>
        <div className="flex items-center gap-1">
          <label htmlFor="main">main</label>
          <input
            type="color"
            name="main"
            className="h-10 w-10 border-transparent"
            onChange={(e) => handlePrimaryChange(e.target.value)}
            value={chosen}
          />
        </div>
      </div>








      {/* Heading */}

      <div className="flex flex-col gap-6">
        <p className={`text-9xl font-bold dark:text-light text-dark`}>
          Hey! my name is
          <span style={{ color: primary }}> Sean</span>
        </p>
        <p style={{ color: primary }} className="text-4xl ">
          I make <span style={{ color: secondary }}>shopify</span> themes and
          web apps
        </p>
        <p className="text-9xl">
          Come say <span style={{ color: primary }}>Hi!</span>
        </p>
      </div>








      {/* buttons */}

      <div
        id="buttons"
        className="flex gap-24 my-10 w-3/4 md:w-1-2 justify-end lg:justify-evenly xl:justify-end xl:w-1/3"
      >
        {social &&
          social.map((s) => (
            <a
              id={s.name}
              key={s.name}
              className="text-6xl p-4 rounded-full relative flex justify-center items-center"
              rel="noreferrer"
              target="_blank"
              href={s.url}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <FontAwesomeIcon icon={s.icon} />
            </a>
          ))}
      </div>
    </main>
  );
}
