import { faLongArrowLeft, faLongArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "./Card";


const ProjectScroller = ({projects}) => {
  return (
    <>
      <div className="text-white py-4 flex snap-x snap-mandatory w-full overflow-scroll">
        {projects &&
          projects.user.pinnedItems.edges.map(({ node }, key) => (
            <Card node={node} key={key} />
          ))}
      </div>
      <div className="w-full flex justify-evenly text-2xl">
        <FontAwesomeIcon icon={faLongArrowLeft} color="#fff" />
        <FontAwesomeIcon icon={faLongArrowRight} color="#fff" />
      </div>
    </>
  );
};
export default ProjectScroller;
