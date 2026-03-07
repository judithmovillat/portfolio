import React from "react";
import profilePic from "../assets/profile.jpg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen flex items-center justify-center bg-gradient-to-r from-primaryBlue to-primaryViolet px-4 font-poppins"
    >
      <div className="flex flex-col md:flex-row items-center gap-8 max-w-4xl">
        
        <div className="text-center md:text-left">
          <h2 className="text-5xl md:text-6xl font-bold text-lightWhite">
            Hola, soy <span className="text-babyBlue">Judith Movilla</span>
          </h2>
          <p className="mt-4 text-xl text-lightWhite whitespace-pre-line">
            Analista-desarrolladora de Software{"\n"}
            Ingeniera Informática{"\n"}
            SCRUM Master
          </p>

          <a
            href="#projects"
            className="mt-6 inline-block px-6 py-3 bg-primaryViolet text-lightWhite rounded-lg font-bold hover:bg-primaryBlue transition"
          >
            Ver Proyectos
          </a>
        </div>

        <div className="flex justify-center">
          <img
            src={profilePic}
            alt="Judith Movilla"
            className="w-100 md:w-100 aspect-square rounded-full border-4 border-white object-cover shadow-xl"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;