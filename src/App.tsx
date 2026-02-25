import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Training from "./components/Training";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-industrial-black text-white font-sans selection:bg-electric-yellow selection:text-industrial-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Training />
        <Projects />
        <Skills />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
