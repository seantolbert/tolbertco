import "./ProjectList.scss";
import Quotate from "../assets/small_quotate.png";

export default function ProjectList() {
  return (
    <div id="projectlist" className="">
      <div className="card">
        <div className="card__image-container">
          <img src={Quotate} alt="quotate logo" />
        </div>
        <div className="card-about">
          <span className="about-title text-dark">Quotate</span>
          <p className="about-descrip">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            quod vel iure unde reprehenderit hic soluta velit repellat maiores
            blanditiis. Cum, voluptatum? Libero sint animi nemo? Dignissimos
            nostrum officia cum.
          </p>
        </div>
      </div>
      <div className="card">
          <div className="about__image-container">
            <img src={Quotate} alt="quotate logo" />
          </div>
        <div className="card-about">
          <span className="about-title">Jungles of Dorado</span>
          <p className="about-descrip">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            quod vel iure unde reprehenderit hic soluta velit repellat maiores
            blanditiis. Cum, voluptatum? Libero sint animi nemo? Dignissimos
            nostrum officia cum.
          </p>
        </div>
      </div>
      <div className="card">
          <div className="about__image-container">
            <img src={Quotate} alt="quotate logo" />
          </div>
        <div className="card-about">
          <span className="about-title">Quotate</span>
          <p className="about-descrip">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            quod vel iure unde reprehenderit hic soluta velit repellat maiores
            blanditiis. Cum, voluptatum? Libero sint animi nemo? Dignissimos
            nostrum officia cum.
          </p>
        </div>
      </div>
    </div>
  );
}
