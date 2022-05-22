import "./MenuIcon.scss";

export default function MenuIcon() {
  return (
    <div className="menu-container">
      <span className="glow"></span>
      {/* <span className="glow slide-left"></span>
      <span className="glow slide-right"></span> */}
      <div className="cube">
        <span className="top">
          <i className="fa-brands fa-react"></i>
        </span>
        <span className="left">
          <i className="fa-solid fa-address-card"></i>
        </span>
        <span className="right">
          <i className="fa-solid fa-diagram-project"></i>
        </span>
      </div>
    </div>
  );
}
