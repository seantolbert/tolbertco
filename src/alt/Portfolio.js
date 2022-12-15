import { useState } from "react";
import ComponentList from "./ComponentList";
import Sidebar from "./Sidebar";
import ProjectListAlt from "./ProjectListAlt";

export default function Portfolio() {
  const [isProjects, setIsProjects] = useState(true);

  return (
    <div className="w-full border flex justify-between">
      {/* <Sidebar isProjects={isProjects} setIsProjects={setIsProjects} /> */}


      {isProjects ? <ProjectListAlt /> : <ComponentList />}
    </div>
  );
}
