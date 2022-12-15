const Sidebar = ({ isProjects, setIsProjects }) => {
  return (
    <div>
      <div className="flex flex-col items-center justify-evenly px-6 h-1/2 border">
        <p
          onClick={() => setIsProjects(true)}
          className={`text-white text-xl ${isProjects ? "border-b-4" : ""}`}
        >
          Projects
        </p>
        <p
          onClick={() => setIsProjects(false)}
          className={`text-white text-xl ${isProjects ? "" : "border-b-4"}`}
        >
          Components
        </p>
      </div>
    </div>
  );
};
export default Sidebar;
