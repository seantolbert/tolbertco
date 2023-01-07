import { faLongArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { social } from "../data/lists";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <div
        id="home"
        className="h-screen flex justify-evenly items-center flex-col"
      >
        <Navbar />
        <div className="flex flex-col gap-5 w-4/5">
          <p className="text-primary font-bold text-6xl md:text-8xl">
            Hey, I'm Sean.
          </p>
          <p className="text-light text-4xl md:text-6xl">
            I am a Full-Stack Developer for Hire.
          </p>
          <a
            href="#Contact"
            className="text-secondary w-full md:w-fit gap-5 rounded-lg flex items-center"
          >
            <p className="text-secondary text-5xl">come say hi!</p>
            <motion.div
              className="text-2xl"
              animate={{ y: [0, 15, 0] }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            >
              <FontAwesomeIcon icon={faLongArrowDown} />
            </motion.div>
          </a>
        </div>
        <nav className="flex justify-start gap-10 w-4/5 items-center mt-10">
          {social.map((s, i) => (
            <a href={s.url} rel="noreferrer" target="_blank" key={i}>
              <button className="text-5xl md:text-primary text-white md:hover:text-secondary transition hover:shadow-shadow active:shadow-pressedMedDark duration-500 nav-button p-3 rounded-full">
                <FontAwesomeIcon icon={s.icon} />
              </button>
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
