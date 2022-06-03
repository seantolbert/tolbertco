import "./Card.scss";

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
    <div className="group card">
      <div className="card-content">
        <div className="title-time">
          <div className="group-hover:text-primary card-title transition duration-1000">
            {handleName(node.name)}
          </div>
          <div className="card-updated">
            {/* {handleDate(node.createdAt)} */}
            {node.createdAt}
          </div>
        </div>
        <div className="card-description group-hover:text-secondary transition duration-700">
          {node.description}
        </div>
        <div className="bottom-row">
          <div className="tech">
            {node.repositoryTopics.edges.map(({ node }) => (
              <div className="img-container" key={node.topic.name}>
                <img
                  src={iconConverter(node.topic.name)}
                  alt={node.topic.name}
                  className="w-full"
                />
              </div>
            ))}
          </div>
          <div className="buttons">
            {node.homepageUrl && (
              <a
                href={node.homepageUrl}
                className="card-button"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faEye} />
              </a>
            )}
            {!node.homepageUrl && (
              <div className="card-button">
                <FontAwesomeIcon icon={faEyeSlash} />
              </div>
            )}
            <a
              href={node.url}
              className="card-button"
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
