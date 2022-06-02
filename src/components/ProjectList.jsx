import "./ProjectList.scss";
import { useGitMetrics } from "../hooks/useGitMetrics";
import Card from './Card'



export default function ProjectList() {
  const { error, isPending, data: projects } = useGitMetrics();

  

  // const handleDate = (d) => {
  //   console.log(d.toString().subString(0, 10));
  // };

  return (
    <div
      id="projectlist"
      className="bg-dark justify-center items-center w-full h-full"
    >
      {error && <div className="error">Check your token!</div>}
      {isPending && <div>Loading...</div>}
      <div className="text-white grid grid-cols-3 gap-3 w-full projects">
        {projects &&
          projects.user.pinnedItems.edges.map(({ node }) => (
            <Card node={node} key={node.id} />
          ))}
      </div>
    </div>
  );
}
