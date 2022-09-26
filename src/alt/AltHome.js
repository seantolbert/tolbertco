import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faCodepen,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { useState, useEffect } from "react";
import Values from "values.js";
import { useCollection } from "../hooks/useCollection";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { collection } from "firebase/firestore";

gsap.registerPlugin(ScrollTrigger);

export default function AltHome() {
  const { documents: social } = useCollection("social");

  // dynamic color section
  const [primary, setPrimary] = useState("#b43a3a");
  const [dark, setDark] = useState(new Values("#b43a3a").tint(30));
  const [light, setLight] = useState(new Values("#b43a3a").shade(30));
  const [highlight, setHighlight] = useState("#eaae39");

  // useEffect(() => {
  //   const timeline = gsap.timeline({ defaults: { duration: 1 } });
  //   timeline.from("#Github", )
  // }, []);

  console.log(social)

  // const social = [
  //   {
  //     name: "GitHub",
  //     url: "https://github.com/seantolbert",
  //     icon: faGithub,
  //   },
  //   {
  //     name: "LinkedIn",
  //     url: "https://www.linkedin.com/in/seantolbert/",
  //     icon: faLinkedinIn,
  //   },
  //   {
  //     name: "Codepen",
  //     url: "https://codepen.io/stolbert",
  //     icon: faCodepen,
  //   },
  // ];

  return (
    <main className="dark:bg-dark bg-light text-dark dark:text-light">
      <div className="flex flex-col gap-6">
        <p className="text-9xl font-bold text-dark">
          Hey! my name is
          <span style={{ color: `#${light.hex}` }}> Sean</span>
        </p>
        <p style={{ color: primary }} className="text-7xl">
          I make <span style={{ color: highlight }}>shopify</span> themes and
          web apps
        </p>
        <p className="text-9xl">
          Come say <span style={{ color: `#${dark.hex}` }}>Hi!</span>
        </p>
      </div>
      <div className="flex gap-24 my-10 w-3/4 md:w-1-2 lg:w-1/3 justify-end">
        {social && social.map((s) => (
          <a
            key={s.name}
            className="text-6xl p-4 rounded-full shadow-smallLight dark:shadow"
            rel="noreferrer"
            target="_blank"
            href={s.url}
          >
            <FontAwesomeIcon icon={s.icon} />
          </a>
        ))}
      </div>
    </main>
  );
}
