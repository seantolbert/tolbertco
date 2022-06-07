import { useGitMetrics } from "../hooks/useGitMetrics";
import { useWindowSize } from "@react-hook/window-size/throttled";
import Card from "./Card";

export default function ProjectList() {
  const { error, isPending, data: projects } = useGitMetrics();
  const [width] = useWindowSize({ fps: 30 });

  // const handleDate = (d) => {
  //   console.log(d.toString().subString(0, 10));
  // };

  return (
    <div
      id="projectlist"
      className="bg-dark justify-center items-center w-full py-10"
    >
      <div className="px-4 pb-3 text-center w-full text-secondary font-bold text-xl">
        Pinned Repositories
      </div>
      {error && <div className="error">Check your token!</div>}
      {isPending && <div>Loading...</div>}

      {width <= 600 ? (
        <div className="text-white py-4 gap-5 flex snap-x snap-mandatory overflow-auto">
          {projects &&
            projects.user.pinnedItems.edges.map(({ node }) => (
              <Card node={node} key={node.id} />
            ))}
        </div>
      ) : (
        <div className=" m-4 text-white py-4 gap-5 grid grid-cols-2 lg:grid-cols-3">
          {projects &&
            projects.user.pinnedItems.edges.map(({ node }) => (
              <Card node={node} key={node.id} />
            ))}
        </div>
      )}
    </div>
  );
}
