import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCircleInfo,
  faLayerGroup,
  faAt,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function MobileMenu() {
  return (
    <nav className="flex justify-end z-200" role="navigation">
      <div className="transition duration-500 bg-primary text-light flex gap-4 m-5 justify-center items-center fixed top-3/4 height-screen h-fit w-fit rounded-full p-5 translate-y-20">
        <label
          htmlFor="checker"
          className="absolute flex justify-center items-center"
        >
          <FontAwesomeIcon icon={faLayerGroup} />
        </label>
        <input
          id="checker"
          className="peer checked:w-6 checked:h-6 w-16 h-16 absolute z-203 opacity-0"
          type="checkbox"
        />

        <a
          href="#home"
          className="text-light text-2xl bg-primary rounded-lg h-16 w-16 flex justify-center items-center translate-x-52 transition duration-300 absolute peer-checked:translate-x-0 -translate-y-20"
        >
          <FontAwesomeIcon icon={faHome} />
        </a>
        <a
          href="#pinned"
          className="text-light text-2xl bg-darkGrey rounded-lg h-16 w-16 flex justify-center items-center translate-x-52 transition duration-400 absolute peer-checked:translate-x-0 -translate-y-40"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="#contact"
          className="text-light text-2xl bg-secondary rounded-lg h-16 w-16 flex justify-center items-center translate-x-52 transition duration-500 absolute peer-checked:translate-x-0 -translate-y-60"
        >
          <FontAwesomeIcon icon={faAt} />
        </a>
        <a
          href="#stats"
          className="text-light text-2xl bg-lightGrey rounded-lg h-16 w-16 flex justify-center items-center translate-x-52 transition duration-600 absolute peer-checked:translate-x-0 -translate-y-80"
        >
          <FontAwesomeIcon icon={faCircleInfo} />
        </a>
      </div>
    </nav>
  );
}
