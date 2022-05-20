import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faPuzzlePiece,
  faDiagramProject,
} from "@fortawesome/free-solid-svg-icons";

import Logo from "../assets/small_tolbert&co.png";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="logo">
          <img src={Logo} alt="Tolbert&co logo" />
        </div>
        <nav className="links">
          <NavLink to="/">
            <FontAwesomeIcon icon={faHouse} />
            Home
          </NavLink>
          <NavLink to="/components">
            <FontAwesomeIcon icon={faPuzzlePiece} />
            Components
          </NavLink>
          <NavLink to="/projects">
            <FontAwesomeIcon icon={faDiagramProject} />
            Projects
          </NavLink>
        </nav>
      </div>
    </div>
  );
}
