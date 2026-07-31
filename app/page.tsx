import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Research from "./components/Research";
import Publications from "./components/Publications";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Stats from "./components/Stats";
import Timeline from "./components/Timeline";
import Skills from "./components/Skills";
import ResearchHighlights from "./components/ResearchHighlights";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="pt-20">
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Timeline />
        <ResearchHighlights />
        <Research />
        <Publications />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}