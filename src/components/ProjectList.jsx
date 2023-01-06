
import { useGitMetrics } from "../hooks/useGitMetrics";
import Card from "./Card";
import ProjectScroller from "./ProjectScroller";

export default function ProjectList() {
  const { error, isPending, data: projects } = useGitMetrics();

  return (
    <div id="pinned" className="flex flex-col justify-center items-start py-10">
      <div className="text-center md:text-left md:text-3xl w-full text-secondary font-bold text-xl">
        Portfolio
      </div>
      {error && <div className="error">Check your token!</div>}
      {isPending && <div>Loading...</div>}

      {window.innerWidth <= 600 ? <ProjectScroller projects={projects} /> : (
        <div className=" text-white py-4 gap-5 grid grid-cols-3">
          {projects &&
            projects.user.pinnedItems.edges.map(({ node }) => (
              <Card node={node} key={node.id} />
            ))}
        </div>
      )}
    </div>
  );
}
