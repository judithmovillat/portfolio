import React from "react";
import { FaDatabase, FaLaptopCode, FaChartLine, FaBook, FaBrain } from "react-icons/fa";

const About = () => {
  return (
    <section 
      id="about" 
      className="bg-gray-900 text-center w-full min-h-[calc(100vh-64px)] flex flex-col justify-center py-10 px-4 md:px-8"
    >
      {/* Título */}
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-babyBlue mb-8 md:mb-10 font-poppins">Sobre mí</h2>

      {/* Bloque de introducción */}
      <p className="max-w-3xl sm:max-w-4xl mx-auto text-lightWhite text-base sm:text-lg md:text-xl leading-relaxed mb-10 md:mb-14 font-poppins">
        Soy una profesional apasionada por la <span className="text-babyPurple font-semibold">gestión de la tecnología</span> y el <span className="text-babyPurple font-semibold">análisis de datos</span>, 
        ejerciendo como analista-desarrolladora de software enfocada en el análisis, estudio y desarrollo evolutivo y correctivo de ERP con tecnologías Oracle y bases de datos. 
        Creo soluciones robustas y eficientes para la gestión de información y evalúo el impacto de las aplicaciones sobre los datos y viceversa. 
        Además, estoy continuamente aprendiendo (algo que me encanta) y cada día me esfuerzo poco a poco para seguir mejorando.
        
      </p>

      {/* Bloque de iconos con habilidades */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 md:gap-10 max-w-5xl mx-auto mb-10 md:mb-14 font-poppins">
        {[{
          icon: <FaLaptopCode className="text-babyBlue text-4xl sm:text-5xl md:text-6xl mb-2 sm:mb-3" />,
          label: "Desarrollo de Software"
        }, {
          icon: <FaDatabase className="text-babyBlue text-4xl sm:text-5xl md:text-6xl mb-2 sm:mb-3" />,
          label: "Bases de datos"
        }, {
          icon: <FaChartLine className="text-babyBlue text-4xl sm:text-5xl md:text-6xl mb-2 sm:mb-3" />,
          label: "Análisis de datos"
        }, {
          icon: <FaBook className="text-babyBlue text-4xl sm:text-5xl md:text-6xl mb-2 sm:mb-3" />,
          label: "SCRUM / Agile"
        }, {
          icon: <FaBrain className="text-babyBlue text-4xl sm:text-5xl md:text-6xl mb-2 sm:mb-3" />,
          label: "Inteligencia Artificial"
        }].map((item, idx) => (
          <div key={idx} className="flex flex-col items-center">
            {item.icon}
            <p className="text-lightWhite font-semibold mt-2 text-sm sm:text-base md:text-lg">{item.label}</p>
          </div>
        ))}
      </div>

      {/* Bloque de métricas */}
      <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 sm:gap-10 md:gap-12 max-w-5xl mx-auto mt-4">
        {[
          { value: "3+", label: "Años de experiencia" },
          { value: "10+", label: "Proyectos" },
          { value: "∞", label: "Aprendizaje continuo" }
        ].map((item, idx) => (
          <div key={idx} className="flex flex-col items-center text-center">
            <p className="text-babyBlue text-3xl sm:text-4xl md:text-5xl font-bold">{item.value}</p>
            <p className="text-lightWhite mt-1 sm:mt-2 text-sm sm:text-base md:text-lg">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;