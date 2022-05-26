// pages and components
import { Home, ProjectList, MenuIcon, Contact} from "./components/index";

// styles
import "./App.css";

function App() {
  return (
    <div className="App h-screen bg-dark">
      <MenuIcon />
      <Home />
      <ProjectList />
      <Contact />
    </div>
  );
}

export default App;
