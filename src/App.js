// pages and components
import {
  Home,
  StatsBoard,
  ProjectList,
  MenuIcon,
  Contact,
  FlexGrid,
} from "./components/index";

// hooks
import { useWindowSize } from "@react-hook/window-size/throttled";

// styles
import "./App.css";
import MobileDivider from "./components/MobileDivider";
import MobileMenu from "./components/MobileMenu";
// import GitContributions from "./components/GitContributions";

function App() {
  const [width] = useWindowSize({ fps: 30 });

  return (
    <div className="App h-screen w-screen bg-dark">
      {width > 1200 ? <MenuIcon /> : <MobileMenu />}
      <FlexGrid />
      <Home />
      {width > 1200 ? <FlexGrid /> : <MobileDivider />}
      <StatsBoard />
      <ProjectList />
      {width > 1200 ? <FlexGrid /> : <MobileDivider />}
      <Contact />
    </div>
  );
}

export default App;
