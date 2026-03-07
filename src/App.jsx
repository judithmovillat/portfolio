import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Trayectory from "./components/Trayectory";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-darkBlack text-lightWhite">
      <Navbar />
      <Hero />
      <About />
      <Trayectory />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;