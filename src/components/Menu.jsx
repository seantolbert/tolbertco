import "./Menu.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faJedi, faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import "./MenuIcon2.scss";

export default function Menu() {
  return (
    <div className="flex fixed right-0 mt-10 mr-10 ml-20 mb-20 group flex-col z-[500] gap-6">
      <div className="transition duration-700 flex justify-center items-center w-14 h-14 bg-primary skew-x-12 skew-y-12 rotate-45 transition group-hover:transform-none group-hover:rounded-md">
        <a
          href="#pinned"
          className="flex justify-center items-center text-light transition duration-500 rounded-md opacity-0 group-hover:opacity-100"
        >
          <FontAwesomeIcon icon={faJedi} />
        </a>
      </div>
      <div className="transition duration-700 flex justify-center items-center w-14 h-14 bg-primary skew-x-12 skew-y-12 rotate-90 -translate-y-20 group-hover:transform-none group-hover:rounded-md group-hover:bg-secondary">
        <a
          href="#pinned"
          className="flex justify-center items-center text-light transition duration-500 rounded-md opacity-0 group-hover:opacity-100"
        >
          <FontAwesomeIcon icon={faJedi} />
        </a>
      </div>
      <div className="transition duration-700 flex justify-center items-center w-14 h-14 bg-primary skew-x-12 skew-y-12 rotate-180 -translate-y-40 transition group-hover:transform-none group-hover:rounded-md group-hover:bg-darkGrey">
        <a
          href="#pinned"
          className="flex justify-center items-center text-light transition duration-500 rounded-md opacity-0 group-hover:opacity-100"
        >
          <FontAwesomeIcon icon={faJedi} />
        </a>
      </div>
      <div className="transition duration-700 flex justify-center items-center w-14 h-14 bg-primary skew-x-12 skew-y-12 -rotate-45 -translate-y-60 transition group-hover:transform-none group-hover:rounded-md group-hover:bg-lightGrey">
        <a
          href="#pinned"
          className="flex justify-center items-center text-light transition duration-500 rounded-md opacity-0 group-hover:opacity-100"
        >
          <FontAwesomeIcon icon={faJedi} />
        </a>
      </div>
          <FontAwesomeIcon icon={faLayerGroup} className="absolute text-light transition duration-200 text-2xl translate-x-4 translate-y-4 opacity-100 group-hover:opacity-0"/>
    </div>
  );
}
