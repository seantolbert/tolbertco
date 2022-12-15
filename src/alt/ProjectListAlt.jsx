import Card from "./Card";
import jod from "../assets/jod.png";
import fayvs from "../assets/fayvs.png";

const ProjectListAlt = () => {
  const projects = [
    {
      title: "Jungles Of Dorado",
      technologies: "Django, Postgresql, Wagtail CMS",
      repoURL: "https://github.com/seantolbert/Jungles-of-Dorado",
      url: "https://www.junglesofdorado.com/",
      description: "A blog cataloging history and culture.",
      isComplete: true,
      image: jod,
    },
    {
      title: "Fayvs",
      technologies: "React, Firebase, Material-UI",
      repoURL: "https://github.com/seantolbert/fayvs",
      url: "https://fayvs-e116b.firebaseapp.com/",
      description: "Make storing resources and achievements quick and easy.",
      isComplete: true,
      image: fayvs,
    },
    {
      title: "Daily",
      technologies: "React Native, Expo, Firebase",
      repoURL: "https://github.com/seantolbert/fayvs",
      url: "",
      description:
        "Keep track of your daily activities, by achieving self set goals and gamifying good habits",
      isComplete: false,

    },
  ];

  return (
    <div className="">
      {projects.map((project) => (
        <Card project={project} />
      ))}
    </div>
  );
};
export default ProjectListAlt;
