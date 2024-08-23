import React from "react";
import Header from "./pages/Header";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import Work from "./pages/Work";
import Footer from "./pages/Footer";

function App() {
  return (
    <>
      {/* <Header /> */}
      <Portfolio />
      <About />
      <Skills />
      <Education/>
      <Work/>
      <Experience/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
