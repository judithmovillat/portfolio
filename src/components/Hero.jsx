import React from "react";
import profilePic from "../assets/profile.jpg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen flex items-center justify-center bg-gradient-to-br from-primaryBlue via-purple-900 to-violet-1000 px-4 font-poppins"
    >
      <div className="flex flex-col-reverse md:flex-row items-center gap-8 max-w-4xl w-full">
        {/* Texto */}
        <div className="text-center md:text-left flex-1">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-lightWhite leading-tight">
            Hola, soy <span className="text-babyBlue">Judith Movilla</span>
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-lightWhite whitespace-pre-line">
            Analista-desarrolladora de software{"\n"}
            Ingeniera Informática{"\n"}
            SCRUM Master
          </p>

          <a
            href="#projects"
            className="mt-6 inline-block px-6 py-3 bg-babyViolet text-lightWhite rounded-lg font-bold border-2 border-white shadow-lg"
          >
            Ver Proyectos
          </a>
        </div>

        {/* Imagen */}
        <div className="flex justify-center flex-1">
          <img
            src={profilePic}
            alt="Judith Movilla"
            className="w-40 sm:w-48 md:w-64 lg:w-80 aspect-square rounded-full border-4 border-white object-cover shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;