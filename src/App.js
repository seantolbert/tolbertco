import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages and components
import Home from "./pages/home/Home";
import Components from "./pages/components/Components";
import Projects from "./pages/projects/Projects";
import About from "./pages/about/About";

// styles
import "./App.css";
import Background from "./components/Background";

function App() {
  return (
    <div className="App">
      <Background />
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/components" element={<Components />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
