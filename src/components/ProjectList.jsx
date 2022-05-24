import "./ProjectList.scss";

import { useGitMetrics } from "../hooks/useGitMetrics";

export default function ProjectList() {
  const { error, isPending, data } = useGitMetrics()
  // const pinnedItems = data.user.pinnedItems.edges.map(( {node} ) => node);

  console.log({ data, error, isPending });

  return (
    <div id="projectlist" className="bg-dark">
      {error && <div className="error">Something is wrong</div>}
      {isPending && <div>Loading...</div>}
      <div>
        {data && data.user.pinnedItems.edges[1].node.name}
        {data && data.user.pinnedItems.edges[1].node.url}
        {data && data.user.pinnedItems.edges[1].node.updatedAt}
        {data && data.user.name}
        {data && data.user.url}
        {data && data.user.pinnedItems.totalCount}
        {/* {data && pinnedItems.map((item) => {
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
