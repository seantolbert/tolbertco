// pages and components
import { Home, ProjectList, MenuIcon, Contact} from "./components/index";

// styles
import "./App.css";
import StatsBoard from "./components/StatsBoard";

function App() {
  return (
    <div className="App h-screen bg-dark">
      <MenuIcon />
      <Home />
      <StatsBoard />
      <ProjectList />
      <Contact />
    </div>
  );
}

export default App;
