const Card = ({ project }) => {
  const { title, technologies, repoURL, url, description, isComplete, image } =
    project;

  return (
    <div className="w-full h-96 flex justify-start items-center">
      <div className="w-1/2">
        <img src={image} alt={title} className="w-full " />
      </div>
      <p className="text-white">{technologies}</p>
    </div>
  );
};
export default Card;
