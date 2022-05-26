import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faDna,
  faJedi,
  faSearch,
  faBrush
} from "@fortawesome/free-solid-svg-icons";
import "./MenuIcon2.scss";

export default function MenuIcon() {
  return (
    <div className="menu-container">
      <span className="glow slide"></span>
      <span className="glow slide-down"></span>
      {/* <span className="glow slide-down-further"></span> */}
      <div className="cube text-darkGrey">
          <NavLink className="search rounded-md " to="#home">
            <FontAwesomeIcon icon={faSearch} />
          </NavLink>
        <span className="top bg-primary">
          <input type="text" className="bg-primary text-white w-100"/>
        </span>
        <span className="left bg-secondary">
          <NavLink to="#components">
            <FontAwesomeIcon icon={faHome} />
          </NavLink>
        </span>
        <span className="right bg-darkGrey">
          <NavLink to="#projectlist">
            <FontAwesomeIcon icon={faJedi} />
          </NavLink>
        </span>
      </div>
    </div>
  );
}
