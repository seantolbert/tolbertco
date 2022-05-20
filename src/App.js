import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages and components
import Background from "./components/Background";
import Home from "./pages/home/Home";

// styles
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
