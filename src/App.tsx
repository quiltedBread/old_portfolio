import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

import "./index.css";

function App() {
    return (
        <main>
            <Navbar />
            <Hero />
            {/* <About /> */}
            <Skills />
            <Projects />
            <Testimonials />
            <Contact />
        </main>
    );
}

export default App;
