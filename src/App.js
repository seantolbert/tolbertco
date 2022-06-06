// pages and components
import {
  Home,
  StatsBoard,
  ProjectList,
  // MenuIcon,
  Contact,
  FlexGrid,
} from "./components/index";

// styles
import "./App.css";

function App() {
  return (
    <div className="App h-screen w-screen bg-dark">
      {/* <MenuIcon /> */}
      <FlexGrid/>
      <Home />
      <FlexGrid/>
      <StatsBoard />
      <ProjectList />
      <FlexGrid />
      <Contact />
      <FlexGrid />
    </div>
  );
}

export default App;
