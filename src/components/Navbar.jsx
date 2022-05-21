import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faPuzzlePiece,
  faDiagramProject,
  faFaceKiss,
} from "@fortawesome/free-solid-svg-icons";

import "./Navbar.css";
import MenuIcon from "./MenuIcon";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-content">
        <MenuIcon />
        <nav className="links space-x-6">
          <NavLink to="/">
            <FontAwesomeIcon icon={faHouse} />
            <span>Home</span>
          </NavLink>
          <NavLink to="/components">
            <FontAwesomeIcon icon={faPuzzlePiece} />
            <span>Components</span>
          </NavLink>
          <NavLink to="/projects">
            <FontAwesomeIcon icon={faDiagramProject} />
            <span>Projects</span>
          </NavLink>
          <NavLink to="/about">
            <FontAwesomeIcon icon={faFaceKiss} />
            <span>About</span>
          </NavLink>
        </nav>
      </div>
    </div>
  );
}
