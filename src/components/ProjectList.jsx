import "./ProjectList.scss";

import { useGitMetrics } from "../hooks/useGitMetrics";

export default function ProjectList() {
  const { error, isPending, data: projects } = useGitMetrics();
  console.log({ projects, error, isPending });

  return (
    <div
      id="projectlist"
      className="bg-dark justify-center items-center w-full h-80"
    >
      {error && <div className="error">Something is wrong</div>}
      {isPending && <div>Loading...</div>}
      {/* <p className="text-secondary text-lg">Projects</p> */}
      <div className="text-white grid grid-cols-3 gap-3 w-full projects h-72">
        {projects &&
          projects.user.pinnedItems.edges.map(({ node }) => (
            <a href={node.url} className="card" key={node.id}>
              <div className="card-content">
                <div className="card-title">{node.name}</div>
                <div className="card-updated">
                  Last updated {node.updatedAt}
                </div>
                <div className="card-description">{node.description}</div>
              </div>
            </a>
          ))}
      </div>
    </div>
  );
}
