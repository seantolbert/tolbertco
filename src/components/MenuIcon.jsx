import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faDna, faJedi,  } from "@fortawesome/free-solid-svg-icons";
import "./MenuIcon.scss";

export default function MenuIcon() {
  return (
    <div className="menu-container">
      <span className="glow slide"></span>
      <span className="glow slide-down"></span>
      <span className="glow slide-down-further"></span>
      <div className="cube text-lightGrey">
        <span className="top2">
          <input type="text" className="bg-darkGrey text-light caret-primary" />
        </span>
        <span className="top bg-primary">
          <NavLink className="rounded-md" to="#home">
            <FontAwesomeIcon icon={faSearch} />
          </NavLink>
        </span>
        <span className="left bg-secondary">
          <NavLink to="#components">
            <FontAwesomeIcon icon={faDna} />
          </NavLink>
        </span>
        <span className="right bg-dark">
          <NavLink to="#projectlist">
            <FontAwesomeIcon icon={faJedi} />
          </NavLink>
          <i className="fa-solid fa-diagram-project"></i>
        </span>
      </div>
    </div>
  );
}
