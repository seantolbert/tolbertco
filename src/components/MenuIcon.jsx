import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faJedi,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import "./MenuIcon2.scss";

export default function MenuIcon() {
  return (
    <div className="menu-container">
      <div className="cube text-lightGrey">
        <div className="search" to="#home">
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <span className="top bg-primary">
          <input type="text" className="bg-primary text-white w-full" />
        </span>
        <span className="left bg-secondary">
          <a href="#home">
            <FontAwesomeIcon icon={faHome} />
          </a>
        </span>
        <span className="right bg-darkGrey">
          <a href="#pinned">
            <FontAwesomeIcon icon={faJedi} />
          </a>
        </span>
      </div>
    </div>
  );
}
