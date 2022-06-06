import { useGitMetrics } from "../hooks/useGitMetrics";

export default function StatsBoard() {
  const { error, isPending, data: facts } = useGitMetrics();

  return (
    <div className="bg-dark p-3">
      {error && <div className="error">Check your token</div>}
      {isPending && <div>Loading...</div>}
      <div className="flex flex-wrap gap-5 m-4 ">
        <div className=" w-fit font-bold text-secondary rounded-xl h-fit p-3 shadow-smallDark hover:shadow-medDark transition">
          Associate @{" "}
          <a href="https://www.dai.com/" rel="noreferrer" target="_blank">
            DAI
          </a>
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
      <div className="w-fit rounded-xl p-3 hover:shadow-smallDark transition m-4">
        <span className="text-secondary font-bold">Git Contributions</span>
        <img
          src="https://ghchart.rshah.org/17A2B8/seantolbert"
          alt="Seantolbert github contributions"
          className="w-screen"
        />
      </div>
    </div>
  );
}
