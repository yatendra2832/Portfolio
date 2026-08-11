import React, { useEffect } from "react";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Services from "./pages/Services";
import Skills from "./pages/Skills";
import Education from "./pages/Education";
import Work from "./pages/Work";
import Experience from "./pages/Experience";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import "./pages/portfolio.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      <Portfolio />
      <About />
      <Services />
      <Skills />
      <Education />
      <Work />
      <Experience />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
