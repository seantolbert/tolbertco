import {
  Home,
  MobileDivider,
  StatsBoard,
  ProjectList,
  Contact,
  FlexGrid,
  Footer,
  // MobileMenu,
  // Menu,
} from "./components/index";

// styles
import "./App.css";
import Background from "./components/Background";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      {/* {width >= 1200 ? <Menu /> : <MobileMenu />} */}
      <Background />
      <Home />
      <StatsBoard />
      <ProjectList />
      <About />
      {/* {window.innerWidth >= 1200 ? <FlexGrid /> : <MobileDivider />} */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
