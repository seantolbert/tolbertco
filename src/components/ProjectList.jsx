import { useGitMetrics } from "../hooks/useGitMetrics";
import { useWindowSize } from "@react-hook/window-size/throttled";
import Card from "./Card";

export default function ProjectList() {
  const { error, isPending, data: projects } = useGitMetrics();
  const [width] = useWindowSize({ fps: 30 });

  return (
    <div id="pinned" className="flex justify-center items-center w-full py-10">
      <div className="w-4/5">
        <div className="text-center md:text-left md:text-3xl w-full text-secondary font-bold text-xl">
          Portfolio
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
          <div className=" text-white py-4 gap-5 grid grid-cols-3">
            {projects &&
              projects.user.pinnedItems.edges.map(({ node }) => (
                <Card node={node} key={node.id} />
              ))}
          </div>
        )}
      </div>
    </div>
  );
}
