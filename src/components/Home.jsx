import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <>
      <div id="home" className="bg-dark py-4">
        <div className="flex flex-col gap-5">
          <p className="text-primary font-bold text-8xl h-fit">
            Hey, my name is Sean
          </p>
          <p className="text-light text-8xl">
            I am a straight up web developer
          </p>
          <a href="#contact" className="text-secondary text-8xl rounded-lg">
            come say hi!
          </a>
        </div>
        <nav className="m-8 flex justify-evenly md:justify-start gap-10">
          <a
            href="https://github.com/seantolbert"
            rel="noreferrer"
            target="_blank"
          >
            <button
              className="text-5xl text-white hover:text-secondary transition hover:shadow-medDark active:shadow-pressedMedDark duration-500 nav-button p-3 rounded-full"
            >
              <FontAwesomeIcon icon={faGithub} />
            </button>
          </a>
          <a
            href="https://www.linkedin.com/in/seantolbert/"
            rel="noreferrer"
            target="_blank"
          >
            <button className="text-5xl text-white hover:text-secondary transition hover:shadow-medDark active:shadow-pressedMedDark duration-500 nav-button p-3 rounded-full">
              <FontAwesomeIcon icon={faLinkedin} />
            </button>
          </a>
          <a
            href="https://codepen.io/stolbert"
            rel="noreferrer"
            target="_blank"
          >
            <button className="text-5xl text-white hover:text-secondary transition hover:shadow-medDark active:shadow-pressedMedDark duration-500 nav-button p-3 rounded-full">
              <FontAwesomeIcon icon={faCodepen} />
            </button>
          </a>
        </nav>
      </div>
    </>
  );
}
