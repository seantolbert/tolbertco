import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faPuzzlePiece,
  faDiagramProject,
  faFaceKiss,
} from "@fortawesome/free-solid-svg-icons";

import Logo from "../assets/small_tolbert&co.png";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-content">
        <nav className="links">
        <div className="logo-container">
          <img src={Logo} alt="Tolbert and Co Logo" />
        </div>
          <NavLink to="/">
            <FontAwesomeIcon icon={faHouse} />
            {/* <span>Home</span> */}
          </NavLink>
        <div className="logo-container">
          <img src={Logo} alt="Tolbert and Co Logo" />
        </div>
          <NavLink to="/components">
            <FontAwesomeIcon icon={faPuzzlePiece} />
            {/* <span>Components</span> */}
          </NavLink>
        <div className="logo-container">
          <img src={Logo} alt="Tolbert and Co Logo" />
        </div>
          <NavLink to="/projects">
            <FontAwesomeIcon icon={faDiagramProject} />
            {/* <span>Projects</span> */}
          </NavLink>
        <div className="logo-container">
          <img src={Logo} alt="Tolbert and Co Logo" />
        </div>
          <NavLink to="/about">
            <FontAwesomeIcon icon={faFaceKiss} />
            {/* <span>About</span> */}
          </NavLink>
        <div className="logo-container">
          <img src={Logo} alt="Tolbert and Co Logo" />
        </div>
        </nav>
      </div>
    </div>
  );
}
