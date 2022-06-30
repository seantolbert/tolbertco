import {
  Home,
  MobileDivider,
  MobileMenu,
  GitContributions,
  StatsBoard,
  ProjectList,
  Menu,
  Contact,
  FlexGrid,
  Footer,
} from "./components/index";

// hooks
import { useWindowSize } from "@react-hook/window-size/throttled";
// import {useTheme} from './hooks/useTheme'

// styles
import "./App.css";

function App() {
  const [width] = useWindowSize({ fps: 30 });

  return (
    <div className="App h-screen w-screen bg-dark">
      {width >= 1200 ? <Menu /> : <MobileMenu />}
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
