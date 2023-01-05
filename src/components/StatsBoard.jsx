import { useGitMetrics } from "../hooks/useGitMetrics";
import { useWindowSize } from "@react-hook/window-size";
import { techIKnow } from "../data/lists";

export default function StatsBoard() {
  const [width] = useWindowSize({ fps: 30 });
  const { error, isPending, data: facts } = useGitMetrics();

  return (
    <div
      className=" flex justify-center items-center w-full h-screen"
      id="stats"
    >
      {error && <div className="error">Check your token</div>}
      {isPending && <div>Loading...</div>}

      {/*  */}
      {/* individually made tags */}
      {/*  */}
      <div className="w-4/5 flex justify-between">
        <div className="flex items-start flex-wrap w-1/2 gap-8 content-start">
          <div className="flex gap-2 font-bold text-secondary rounded-xl p-3 backdrop-blur-3xl border-y border-y-gray-600">
            Looking to collaborate with other content creators
          </div>
          <div className="flex gap-2 font-bold text-secondary rounded-xl p-3 backdrop-blur-3xl border-y border-y-gray-600">
            Associate @{" "}
            <a
              href="https://www.dai.com/"
              rel="noreferrer"
              target="_blank"
              className="text-highlight font-bold"
            >
              DAI
            </a>
          </div>
          <div className="flex gap-2 font-bold text-secondary rounded-xl p-3 backdrop-blur-3xl border-y border-y-gray-600">
            <span className="text-secondary">
              Currently working on:{" "}
              <a
                href="https://github.com/seantolbert/daily"
                className="text-highlight font-bold"
              >
                Daily
              </a>
            </span>
          </div>
          <div className="flex gap-2 font-bold text-secondary rounded-xl p-3 backdrop-blur-3xl border-y border-y-gray-600">
            <span className="font-bold text-secondary">Status:&nbsp;</span>
            {facts && facts.user.status.message}
          </div>
          <div className="flex gap-2 font-bold text-secondary rounded-xl p-3 backdrop-blur-3xl border-y border-y-gray-600">
            <span className="font-bold text-secondary">
              Total Repositories:&nbsp;
            </span>
            {facts && facts.user.repositories.totalCount}
          </div>
          <div className="flex gap-2 font-bold text-secondary rounded-xl p-3 backdrop-blur-3xl border-y border-y-gray-600">
            {facts && facts.user.location}
          </div>
          <div className="flex gap-2 font-bold text-secondary rounded-xl p-3 backdrop-blur-3xl border-y border-y-gray-600">
            Weekly{" "}
            <a
              rel="noreferrer"
              target="_blank"
              href="https://codepen.io/stolbert"
            >
              codepen challenges
            </a>
          </div>
        </div>

        {/*  */}
        {/* mapped tech tags */}
        {/*  */}

        <div className="w-1/2 flex flex-wrap gap-8 content-start justify-end">
          {techIKnow.map((tech, i) => (
            <div
              key={i}
              className="flex gap-2 font-bold text-secondary rounded-xl p-3 backdrop-blur-3xl border-y border-y-gray-600"
            >
              {width >= 600 && (
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-full max-h-6"
                />
              )}
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
