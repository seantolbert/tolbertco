import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faCodepen,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

export default function AltSocial() {
  return (
    <div id="buttons" className="flex gap-24 my-10 w-3/4 ">
      <a
        id="Github"
        className="text-6xl p-4 rounded-full relative flex justify-center items-center"
        rel="noreferrer"
        target="_blank"
        href="https://github.com/seantolbert"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        id="Codepen"
        className="text-6xl p-4 rounded-full relative flex justify-center items-center"
        rel="noreferrer"
        target="_blank"
        href="https://github.com/seantolbert"
      >
        <FontAwesomeIcon icon={faCodepen} />
      </a>
      <a
        id="Linkedin"
        className="text-6xl p-4 rounded-full relative flex justify-center items-center"
        rel="noreferrer"
        target="_blank"
        href="https://github.com/seantolbert"
      >
        <FontAwesomeIcon icon={faLinkedinIn} />
      </a>
    </div>
  );
}
