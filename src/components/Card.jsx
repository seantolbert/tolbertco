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
    <div className="mx-4 h-50 snap-center rounded-lg">
      <div className="p-7 h-full flex flex-col shadow-smallDark justify-between transition w-52 rounded-lg">
        <div>
          <div className="font-bold text-xl">{handleName(node.name)}</div>
          <div className="font-light text-sm">
            {/* {handleDate(node.createdAt)} */}
            {node.createdAt}
          </div>
        </div>
        <div className="group-hover:text-secondary text-sm transition duration-700">
          {node.description}
        </div>
        <div className="flex justify-between pt-1">
          <div className="gap-2 grid grid-rows-2 grid-cols-3">
            {node.repositoryTopics.edges.map(({ node }) => (
              <div
                className="w-6 h-6 flex justify-center items-center"
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
          <div className="flex gap-1 flex-col">
            {node.homepageUrl && (
              <a
                href={node.homepageUrl}
                className="rounded-full text-center w-10 transition"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faEye} />
              </a>
            )}
            {!node.homepageUrl && (
              <div className="rounded-full text-center w-10 transition">
                <FontAwesomeIcon icon={faEyeSlash} />
              </div>
            )}
            <a
              href={node.url}
              className="rounded-full p-1 text-center w-10 transition"
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
