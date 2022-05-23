// import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages and components
import {
  Navbar,
  // Background,
  Home,
  // MenuIcon,
  // Project,
  ProjectList,
  // Codepen,
  // CodepenList,
} from "./components/index";

// import Navbar from './components/Navbar'
// import Home from "./components/Home";
// import ProjectList from './components/ProjectList'
// import Components from "./pages/components/Components";
// import Projects from "./pages/projects/Projects";
// import About from "./pages/about/About";

// styles
import "./App.css";
// import Background from "./components/Background";

function App() {
  return (
    <div className="App">
      {/* <div className="container"> */}
        <Navbar />
        <Home />
        <ProjectList />
      </div>
    // </div>
  );
}

export default App;
