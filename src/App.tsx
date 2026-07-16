import { useEffect } from "react";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { FeaturedSystem } from "./components/FeaturedSystem";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Learning } from "./components/Learning";
import { Mission } from "./components/Mission";
import { Projects } from "./components/Projects";
import { ResearchTimeline } from "./components/ResearchTimeline";
import { useContent } from "./content";

function App() {
  const { site } = useContent();

  useEffect(() => {
    document.title = site.documentTitle;
  }, [site.documentTitle]);

  return (
    <>
      <a className="skip-link" href="#work">
        {site.a11y.skipToContent}
      </a>

      <Header />

      <main id="top">
        <Hero />
        <Mission />
        <Projects />
        <FeaturedSystem />
        <ResearchTimeline />
        <Learning />
        <About />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
