import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/HeroSection/Hero";
import About from "./components/About/About";
import Skill from "./components/Skills/Skill";
import Project from "./components/Project/Project";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <Hero />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Skill />
      </div>
      <div>
        <Project />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
