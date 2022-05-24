import "./ProjectList.scss";

import { useGitMetrics } from "../hooks/useGitMetrics";

export default function ProjectList() {
  const { error, isPending, data: projects } = useGitMetrics()
  console.log({ projects, error, isPending });

  return (
    <div id="projectlist" className="bg-dark">
      {error && <div className="error">Something is wrong</div>}
      {isPending && <div>Loading...</div>}
      <div className="text-white">
        {projects && projects.user.pinnedItems.edges[1].node.name}
        {projects && projects.user.pinnedItems.edges[1].node.url}
        {projects && projects.user.pinnedItems.edges[1].node.updatedAt}
        {projects && projects.user.name}
        {projects && projects.user.url}
        {projects && projects.user.pinnedItems.totalCount}
        {/* {projects && pinnedItems.map((item) => {
          return (
            <a href={item.url} key={item.id} className="text-white">
              {item.name}
            </a>
          )
        })} */}
      </div>
    </div>
  );
}
