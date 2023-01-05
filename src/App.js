import {
  Home,
  MobileDivider,
  MobileMenu,
  // GitContributions,
  StatsBoard,
  ProjectList,
  Menu,
  Contact,
  FlexGrid,
  // JOD,
  Footer,
} from "./components/index";

// hooks
import { useWindowSize } from "@react-hook/window-size/throttled";
// import {useTheme} from './hooks/useTheme'

// styles
import "./App.css";
import Background from "./components/Background";
import About from "./components/About";
// import WeatherPanel from "./components/WeatherPanel";

function App() {
  const [width] = useWindowSize({ fps: 30 });

  return (
    <div className="App  ">
      {width >= 1200 ? <Menu /> : <MobileMenu />}
      {/* {width >= 1200 && <Background />} */}
      <Background />
      <Home />
      <StatsBoard />
      <ProjectList />
      <About />
      {width >= 1200 ? <FlexGrid /> : <MobileDivider />}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
