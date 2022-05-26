import './Home.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faCodepen, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Home() {

  return (
    <div id="home" className="py-72 bg-dark">
      <div className=" m-5 py-8 ">
        <p className="text-primary font-bold text-8xl my-4">Hey, my name is Sean</p>
        <p className="text-light text-4xl">
          I am a creative full-stack web developer accepting opportunities
        </p>
      </div>
      <nav className='ml-8 flex justify-start gap-10'> 
        <button className='text-5xl text-white hover:text-secondary transition ease-out duration-300 nav-button p-3 rounded-full'><FontAwesomeIcon icon={faGithub} /></button>
        <button className='text-5xl text-white hover:text-secondary transition ease-out duration-300 nav-button p-3 rounded-full'><FontAwesomeIcon icon={faLinkedin} /></button>
        <button className='text-5xl text-white hover:text-secondary transition ease-out duration-300 nav-button p-3 rounded-full'><FontAwesomeIcon icon={faCodepen} /></button>
        <button className='text-5xl text-white hover:text-secondary transition ease-out duration-300 nav-button p-3 rounded-full'><FontAwesomeIcon icon={faInstagram} /></button>
      </nav>
    </div>
  );
}
