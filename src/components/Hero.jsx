import React from "react";

const Hero = () => {
  return (
    <section id="hero" className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-primaryBlue to-primaryViolet">
      <h2 className="text-5xl md:text-6xl font-bold text-lightWhite">Hola, soy <span className="text-primaryViolet">Judith Movilla</span></h2>
      <p className="mt-4 text-xl text-lightWhite">Analista-Desarrolladora de Software</p>
      <a href="#projects" className="mt-6 px-6 py-3 bg-primaryViolet text-lightWhite rounded-lg font-bold hover:bg-primaryBlue transition">Ver Proyectos</a>
    </section>
  );
};

export default Hero;