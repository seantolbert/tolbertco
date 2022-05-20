import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages and components
import Sidebar from "./components/Sidebar";
import Home from "./pages/home/Home";
import Components from "./pages/components/Components";
import Projects from "./pages/projects/Projects";

// styles
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/components" element={<Components />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
