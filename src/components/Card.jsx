import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import {
  ReactLogo,
  DjangoLogo,
  PostgresqlLogo,
  WagtailLogo,
  BulmaLogo,
  SassLogo,
  FirebaseLogo,
  GraphqlLogo,
  HerokuLogo,
  DockerLogo,
  TailwindIcon,
} from "../assets/AssetIndex";

export default function Card({ node }) {
  const iconConverter = (name) => {
    if (name === "react") {
      return ReactLogo;
    }
    if (name === "django") {
      return DjangoLogo;
    }
    if (name === "postgresql") {
      return PostgresqlLogo;
    }
    if (name === "wagtail") {
      return WagtailLogo;
    }
    if (name === "bulma") {
      return BulmaLogo;
    }
    if (name === "scss") {
      return SassLogo;
    }
    if (name === "firebase") {
      return FirebaseLogo;
    }
    if (name === "graphql") {
      return GraphqlLogo;
    }
    if (name === "heroku") {
      return HerokuLogo;
    }
    if (name === "docker") {
      return DockerLogo;
    }
    if (name === "tailwind") {
      return TailwindIcon;
    }
  };

  const handleName = (n) => {
    return n.replaceAll("-", " ").toUpperCase();
  };

  return (
    <div className="mx-4 md:mx-0 h-50 md:h-64 snap-center rounded-lg">
      <div className="group p-7 h-full flex flex-col shadow-smallDark justify-between transition w-52 md:w-full rounded-lg">
        <div>
          <div className="font-bold text-xl">{handleName(node.name)}</div>
          <div className="font-light text-sm">
            {/* {handleDate(node.createdAt)} */}
            {node.createdAt}
          </div>
        </div>
        <div className="group-hover:text-secondary text-sm md:text-lg transition duration-700">
          {node.description}
        </div>
        <div className="flex justify-between pt-1">
          <div className="gap-2 grid grid-rows-2 grid-cols-3 md:flex md:flex-row">
            {node.repositoryTopics.edges.map(({ node }) => (
              <div
                className="pt-4 md:pt-0 w-6 h-6 md:w-8 md:h-8 flex justify-center items-center"
                key={node.topic.name}
              >
                <img
                  src={iconConverter(node.topic.name)}
                  alt={node.topic.name}
                  className="w-full"
                />
              </div>
            ))}
          </div>
          <div className="flex gap-2 mt-2 md:mt-0 flex-col md:flex-row">
            {node.homepageUrl && (
              <a
                href={node.homepageUrl}
                className="rounded-full text-center w-10 transition duration-500 md:group-hover:shadow-smallDark flex justify-center items-center"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faEye} />
              </a>
            )}
            {!node.homepageUrl && (
              <div className="rounded-full text-center w-10 transition duration-500 md:group-hover:shadow-smallDark flex justify-center items-center">
                <FontAwesomeIcon icon={faEyeSlash} />
              </div>
            )}
            <a
              href={node.url}
              className="rounded-full p-1 md:p-0 text-center w-10 transition duration-500 md:group-hover:shadow-smallDark flex justify-center items-center mt-2 md:mt-0"
              rel="noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
