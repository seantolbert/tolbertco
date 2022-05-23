import "./Navbar.css";
import MenuIcon from "./MenuIcon";
import Search from "./Search";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-content">
        <Search />
        <MenuIcon />
      </div>
    </div>
  );
}
