import { useGitMetrics } from "../hooks/useGitMetrics";

export default function StatsBoard() {
  const { error, isPending, data: facts } = useGitMetrics();

  return (
    <div className="bg-dark py-4" id="stats">
      {error && <div className="error">Check your token</div>}
      {isPending && <div>Loading...</div>}
      <div className="flex flex-wrap gap-5 m-4 ">
        <div className=" w-fit font-bold text-secondary rounded-xl h-fit p-3 shadow-smallDark hover:shadow-medDark transition">
          Looking to collaborate with other content creators
        </div>
        <div className=" w-fit font-bold text-secondary rounded-xl h-fit p-3 shadow-smallDark hover:shadow-medDark transition">
          Associate @{" "}
          <a
            href="https://www.dai.com/"
            rel="noreferrer"
            target="_blank"
            className="text-highlight font-light"
          >
            DAI
          </a>
        </div>
        <div className=" w-fit rounded-xl h-fit p-3 text-primary font-bold shadow-smallDark hover:shadow-medDark transition">
          <span className="text-secondary">
            Currently working on{" "}
            <a
              href="https://github.com/seantolbert/achiever"
              className="text-highlight font-light"
            >
              Achiever
            </a>
          </span>
        </div>
        <div className=" w-fit rounded-xl h-fit p-3 text-primary shadow-smallDark hover:shadow-medDark transition">
          <span className="font-bold text-secondary">Status:&nbsp;</span>
          {facts && facts.user.status.message}
        </div>
        <div className=" w-fit rounded-xl h-fit p-3 text-primary shadow-smallDark hover:shadow-medDark transition">
          <span className="font-bold text-secondary">
            Total Repositories:&nbsp;
          </span>
          {facts && facts.user.repositories.totalCount}
        </div>
        <div className=" w-fit font-bold text-secondary rounded-xl h-fit p-3 shadow-smallDark hover:shadow-medDark transition">
          Operating in {facts && facts.user.location}
        </div>
      </div>
    </div>
  );
}
