import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";

import "./index.css";

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <About />
      <Contact />
    </main>
  );
}

export default App;
