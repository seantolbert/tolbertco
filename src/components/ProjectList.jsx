import "./ProjectList.scss";
import { useGitMetrics } from "../hooks/useGitMetrics";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import ReactLogo from "../assets/react.svg";
import DjangoLogo from "../assets/django-icon.svg";
import PostgresqlLogo from "../assets/postgresql.svg";
import WagtailLogo from "../assets/wagtail.svg";
import BulmaLogo from "../assets/bulma.svg";
import SassLogo from "../assets/sass.svg";
import FirebaseLogo from "../assets/firebase.svg";
import GraphqlLogo from "../assets/graphql.svg";
import HerokuLogo from "../assets/heroku-icon.svg";
import DockerLogo from "../assets/docker-icon.svg"
import TailwindIcon from "../assets/tailwindcss-icon.svg"

export default function ProjectList() {
  const { error, isPending, data: projects } = useGitMetrics();

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
    if (name === 'docker') {
      return DockerLogo
    }
    if (name === "tailwind") {
      return TailwindIcon
    }
  };

  return (
    <div
      id="projectlist"
      className="bg-dark justify-center items-center w-full h-full"
    >
      {error && <div className="error">Check your token!</div>}
      {isPending && <div>Loading...</div>}
      {/* <p className="text-secondary text-lg">Projects</p> */}
      <div className="text-white grid grid-cols-3 gap-3 w-full projects">
        {projects &&
          projects.user.pinnedItems.edges.map(({ node }) => (
            <div className="card" key={node.id}>
              <div className="card-content">
                <div className="title-time">
                  <div className="card-title">{node.name}</div>
                  <div className="card-updated"></div>
                  Last updated {node.updatedAt}
                </div>
                <div className="card-description">{node.description}</div>

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
                    <a href="#home" className="card-button">
                      <FontAwesomeIcon icon={faEye} />
                    </a>
                    <a href={node.url} className="card-button">
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
