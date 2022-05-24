// pages and components
import { Navbar, Home, ProjectList } from "./components/index";

// styles
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <ProjectList />
    </div>
  );
}

export default App;
