import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CockTailes from "./components/CockTailes";
import About from "./components/About";
import Art from "./components/Art";
import Menu from "./components/Menu";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <CockTailes />
      <About />
      <Art />
      <Menu />
    </main>
  );
}

export default App;
