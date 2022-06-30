import {
  Home,
  StatsBoard,
  ProjectList,
  MenuIcon,
  Menu,
  Contact,
  FlexGrid,
  Footer
} from "./components/index";
import MobileDivider from "./components/MobileDivider";
import MobileMenu from "./components/MobileMenu";
import GitContributions from "./components/GitContributions";

// hooks
import { useWindowSize } from "@react-hook/window-size/throttled";
// import {useTheme} from './hooks/useTheme'

// styles
import "./App.css";

function App() {
  const [width] = useWindowSize({ fps: 30 });

  return (
    <div className="App h-screen w-screen bg-dark">
      {/* {width >= 1200 ? <MenuIcon /> : <MobileMenu />} */}
      <Menu />
      <FlexGrid />
      <Home />
      {width >= 1200 ? <FlexGrid /> : <MobileDivider />}
      <StatsBoard />
      {width >= 1200 && <GitContributions />}
      <ProjectList />
      {width >= 1200 ? <FlexGrid /> : <MobileDivider />}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
