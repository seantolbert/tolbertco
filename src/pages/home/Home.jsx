// styles
import Navbar from "../../components/Navbar";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <div className="heading-container">
        <p className="home-heading">Welcome to my resume and portfolio</p>
        <p className="home-subheading">I am a creative full stack developer</p>
      </div>
      <Navbar />
    </div>
  );
}
