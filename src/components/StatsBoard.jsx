import { useGitMetrics } from "../hooks/useGitMetrics";

export default function StatsBoard() {
  const { error, isPending, data: facts } = useGitMetrics();

  return (
    <div className="statsboard bg-dark">
     {error && <div className="error">Check your token</div>}
        {isPending && <div>Loading...</div>}
        <div className="flex flex-col gap-5 m-4 ">
          <div className=" w-fit rounded-xl p-3 text-primary shadow-smallDark hover:shadow-medDark transition">
            <span className="font-bold text-secondary">
              Total Repositories:&nbsp;
            </span>
            {facts && facts.user.repositories.totalCount}
          </div>
          <div className=" max-w-2xl rounded-xl p-3 text-primary shadow-smallDark hover:shadow-medDark font-bold transition">
            {facts && facts.user.bio} <br />
            <span className="text-sm">
              I am a full stack developer with a passion for clean functional
              code and easy aesthetics.
            </span>
          </div>
          <div className="w-fit shadow-smallDark rounded-xl p-3 hover:shadow-medDark transition">
            <span className="text-secondary font-bold">Git Contributions</span>
            <img
              src="https://ghchart.rshah.org/17A2B8/seantolbert"
              alt="Seantolbert github contributions"
            />
          </div>
        </div>
    </div>
  );
}
