import React from "react";
import mdImage from "../assets/md.jpg";
import jAImage from "../assets/junta_andalucia.png";
import libImage from "../assets/libra.png";
import tfgImage from "../assets/rapidminer_logo.jpg";

const projects = [
  { 
    title: "Consorcio Regional de Transportes de Madrid (CRTM) y Madrid Digital", 
    description: "Nuevos desarrollos y soporte del sistema de transportes de la Comunidad de Madrid", 
    current: true,
    image: mdImage
  },
  { 
    title: "Ministerio de Educación de la Junta de Andalucía", 
    description: "Soporte a incidencias frente al sistema de la administración pública",
    image: jAImage
  },
  { 
    title: "LIBRA ERP/CRM/BPM", 
    description: "Desarrollo de la normativa interna ISO27001 así como de nuevas funcionalidades y personalizaciones de módulos empresariales (facturación, Ley 11 Antifraude, sistema de gestión de almacenes - SGA) del software LIBRA ERP",
    image: libImage
  },
  { 
    title: "Trabajo de Fin de Grado", 
    description: "Estudio teórico-práctico de técnicas de análisis de datos en jugadores de golf",
    image: tfgImage,
    github: "https://github.com/judithmovillat/trabajo-fin-grado"
  },
];

const Projects = () => {
  const total = projects.length;

  const firstRowCount = Math.ceil(total / 2);
  const firstRow = projects.slice(0, firstRowCount);
  const secondRow = projects.slice(firstRowCount);

  const renderRow = (row) => (
    <div
      className="grid gap-6 max-w-7xl mx-auto mb-8 font-poppins px-2 md:px-0"
      style={{ gridTemplateColumns: `repeat(${row.length}, minmax(0, 1fr))` }}
    >
      {row.map((p, i) => (
        <div
          key={i}
          className={`bg-gray-800 rounded-lg shadow-lg transition transform hover:-translate-y-2 hover:shadow-xl border-2 flex flex-col relative overflow-hidden ${
            p.current ? "border-babyPurple" : "border-primaryViolet"
          }`}
        >
          {/* Imagen */}
          {p.image && (
            <img
              src={p.image}
              alt={p.title}
              className="w-full h-36 md:h-40 object-cover rounded-t-lg"
            />
          )}

          {/* Distintivo “En progreso” */}
          {p.current && (
            <span className="absolute top-3 right-3 bg-babyPurple text-black text-[10px] font-bold px-2 py-1 rounded-full z-10">
              En progreso
            </span>
          )}

          <div className="p-4 md:p-6 flex flex-col justify-center flex-1">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-lightWhite mb-2">
              {p.title}
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-300 mb-4">
              {p.description}
            </p>

            {/* Botón GitHub centrado, pequeño y redondo */}
            {p.github && (
              <div className="flex justify-center">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-babyPurple text-black font-semibold rounded-full hover:bg-primaryBlue transition text-xs sm:text-sm"
                >
                  GitHub
                </a>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section id="projects" className="py-20 px-2 md:px-4 bg-gray-900 font-poppins">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-babyBlue mb-10 text-center ">
        Proyectos
      </h2>

      {renderRow(firstRow)}
      {secondRow.length > 0 && renderRow(secondRow)}
    </section>
  );
};

export default Projects;