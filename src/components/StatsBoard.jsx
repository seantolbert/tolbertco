import { useGitMetrics } from "../hooks/useGitMetrics";
import { useWindowSize } from "@react-hook/window-size";

import {
  BulmaLogo,
  CRALogo,
  CSS3Logo,
  DjangoLogo,
  FirebaseLogo,
  GitLogo,
  GraphqlLogo,
  HerokuLogo,
  HTMLLogo,
  JSLogo,
  NodeLogo,
  PostgresqlLogo,
  PythonLogo,
  ReactLogo,
  SassLogo,
  TailwindLogo,
  ViteLogo,
  WagtailLogo,
} from "../assets/AssetIndex";

export default function StatsBoard() {
  const [width] = useWindowSize({ fps: 30 });
  const { error, isPending, data: facts } = useGitMetrics();

  const techIKnow = [
    { name: "Bulma", link: "https://bulma.io/", icon: BulmaLogo },
    {
      name: "Django",
      link: "https://www.djangoproject.com/",
      icon: DjangoLogo,
    },
    {
      name: "Firebase",
      link: "https://firebase.google.com/",
      icon: FirebaseLogo,
    },
    { name: "GraphQL", link: "https://graphql.org/", icon: GraphqlLogo },
    { name: "Heroku", link: "https://heroku.com/", icon: HerokuLogo },
    {
      name: "HTML",
      link: "https://html.spec.whatwg.org/multipage/",
      icon: HTMLLogo,
    },
    { name: "CSS3", link: "https://www.w3.org/TR/CSS/", icon: CSS3Logo },
    { name: "Nodejs", link: "https://nodejs.org/", icon: NodeLogo },
    { name: "Tailwind", link: "https://tailwindcss.com/", icon: TailwindLogo },
    { name: "Reactjs", link: "https://reactjs.org/", icon: ReactLogo },
    {
      name: "PostgreSQL",
      link: "https://www.postgresql.org/",
      icon: PostgresqlLogo,
    },
    { name: "Sass", link: "https://sass-lang.com/", icon: SassLogo },
    { name: "Wagtail", link: "https://wagtail.org/", icon: WagtailLogo },
    {
      name: "Javascript",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      icon: JSLogo,
    },
    { name: "Python", link: "https://www.python.org/", icon: PythonLogo },
    { name: "Vitejs", link: "https://vitejs.dev/", icon: ViteLogo },
    { name: "CRA", link: "https://create-react-app.dev/", icon: CRALogo },
    { name: "Git", link: "https://git-scm.com/", icon: GitLogo },

  ];

  return (
    <div className="bg-dark py-4" id="stats">
      {error && <div className="error">Check your token</div>}
      {isPending && <div>Loading...</div>}
      <div className="flex flex-wrap gap-8 m-4 ">
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
          {facts && facts.user.location}
        </div>
        {techIKnow.map((tech) => (
          <div
            key={tech.name}
            className="flex gap-2 font-bold text-secondary rounded-xl h-fit p-3 shadow-smallDark hover:shadow-medDark transition"
          >
            {width >= 600 && (
              <img src={tech.icon} alt={tech.name} className="w-full max-h-6" />
            )}
            <span>{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
