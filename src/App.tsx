import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

import "./index.css";

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
