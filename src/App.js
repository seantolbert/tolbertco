// pages and components
import {
  Home,
  StatsBoard,
  ProjectList,
  MenuIcon,
  Contact,
  FlexGrid,
} from "./components/index";

// styles
import "./App.css";

function App() {
  return (
    <div className="App h-screen bg-dark">
      <MenuIcon />
      <FlexGrid />
      <Home />
      <FlexGrid />
      <StatsBoard />
      <FlexGrid />
      <ProjectList />
      <FlexGrid />
      <Contact />
      <FlexGrid />
    </div>
  );
}

export default App;
