"use client";

import React from "react";

const trajectoryData = [
  {
    date: "abril 2026 - Presente",
    title: "Consultora Funcional ERP",
    subtitle: "Plexus Tech",
    description:
      "Tras un salto evolutivo en mi carrera profesional, me dedico a analizar, estudiar y desarrollar el impacto de los cambios de software empresarial sobre el negocio, así como la integración de aplicaciones externas con el ERP de Internaco Group."
  },
  {
    date: "abril 2026 - Presente",
    title: "IBM Data Science Professional Certificate",
    subtitle: "Beca IBM - Coursera",
    description:
      "Siguiendo en el estudio de más ramas informáticas, decido aprender acerca de la ciencia y el análisis de datos de la mano de IBM con una certificación profesional oficial equivalente a 6 ECTS"
  },{
    date: "abril 2026",
    title: "Certificación Manager IT (Management 3.0)",
    subtitle: "OpenWebinars",
    description:
      "Continúo mi formación en gestión de equipos y proyectos y aprendo sobre la gestión Management 3.0, así como en inteligencia emocional aplicada a equipos de alto rendimiento, Design Thinking y Lean Change Management."
  },{
    date: "marzo 2026",
    title: "Certificación Business Analytics y Business Intelligence",
    subtitle: "ODISEA Data - FUNDAE",
    description:
      "Opto por formarme en BA y BI para poder combinarlo en un futuro con mi trabajo en bases de datos y reporting."
  },
  {
    date: "diciembre 2024",
    title: "Certificación SCRUM Master",
    subtitle: "Adentrándome en la gestión de proyectos TI",
    description:
      "Decido ampliar mis conocimientos en más ramas de la informática como puede ser en la dirección y gestión de proyectos TI. Aprendo acerca de la puesta en marcha de proyectos en base a metodologías como SCRUM, Agile, Kanban, LEAN, Leanban, etc."
  },
  {
    date: "octubre 2023 - abril 2026",
    title: "Analista-Desarrolladora de Software",
    subtitle: "Oracle, PL/SQL, Tortoise SVN (CI/CD)",
    description:
      "Desde mis prácticas del grado universitario en EDISA, diseño y desarrollo soluciones propias y empresariales combinado con análisis funcional. He trabajado en empresas como EDISA, Ayesa Advanced Technologies y Virtual Desk."
  },
  {
    date: "octubre 2023",
    title: "Certificaciones Marketing Digital, Inbound Marketing y SEO",
    subtitle: "HubSpot Academy",
    description:
      "Empiezo en el mundo de las certificaciones decidiendo aprender en marketing pero orientado a mis estudios en informática."
  },
  {
    date: "octubre 2022 - julio 2023",
    title: "Becaria de Infraestuctura en Sistemas Informáticos",
    subtitle: "Facultad de Derecho de la Universidad de Vigo (Ourense)",
    description:
      "A la vez que terminaba mis estudios, me adentré en el mundo laboral con una beca en la universidad realizando tareas de mantenimiento de dispositivos informáticos (ordenadores, pantallas, proyectores...) y llevando un inventario de ellos y su funcionamiento"
  },
  {
    date: "2021 - Presente",
    title: "Francisco Movilla - Seguros e Inversiones",
    subtitle: "Voluntariado",
    description:
      "Ayudo en la empresa de mi padre en cualquier tarea administrativa, de marketing y sobre todo en soporte IT (ordenadores, pantallas, proyectores...) en continuación a mi trabajo de becaria en la Universidad y para no perder agilidad en la parte hardware."
  },
  {
    date: "septiembre 2019 - julio 2024",
    title: "Ingeniera Informática",
    subtitle: "Universidad de Vigo (Ourense)",
    description:
      "Estudio Ingeniería Informática con la sorpresa de pasar los mejores años de estudio de mi vida (conociendo gente, aprendiendo algo que no sabía que me iba a encantar y ganando disciplina). Hago mi proyecto de fin de carrera en julio del 2024 y a la vez empiezo en el mundo laboral"
  },
  {
    date: "septiembre 2017 - mayo 2019",
    title: "Bachillerato - Ciencias Tecnológicas",
    subtitle: "I.E.S. As Lagoas (Ourense)",
    description:
      "Termino y hago selectividad sin saber muy bien qué hacer. Me matriculo en Ingeniería Informática en la Escuela Superior de Ingeniería Informática en Ourense, ya que por temas personales, debo quedarme en mi ciudad."
  }
];

export default function Trajectory() {
  return (
    <section
      id="trayectory"
      className="bg-gray-900 text-center w-full min-h-[calc(100vh-64px)] flex flex-col justify-center py-10 px-4 md:px-8 font-poppins"
    >
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-babyPurple mb-8 md:mb-10">
        Trayectoria
      </h2>

      <div className="relative max-w-4xl mx-auto">
        {/* Línea central */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-primaryBlue"></div>

        {/* Eventos */}
        <div className="flex flex-col space-y-12">
          {trajectoryData.map((item, index) => {
            const isCurrent = item.date.includes("Presente"); // detecta donde estás actualmente
            return (
              <div
                key={index}
                className={`flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
                } items-center`}
              >
                <div className="md:w-1/2 p-4">
                  <div
                    className={`p-6 rounded-lg border-2 transition transform hover:-translate-y-2 hover:shadow-xl ${
                      isCurrent ? "border-babyPurple" : "border-gray-800"
                    } bg-gray-800`}
                  >
                    <h3 className="text-xl font-bold mb-1 text-lightWhite">{item.title}</h3>
                    <h4 className="text-babyBlue mb-2">{item.subtitle}</h4>
                    <p className="text-gray-300">{item.description}</p>
                    <span
                      className={`text-sm mt-2 inline-block ${
                        isCurrent ? "text-babyPurple font-semibold" : "text-gray-400"
                      }`}
                    >
                      {item.date}
                    </span>
                  </div>
                </div>

                {/* Círculo en la línea */}
                <div className="flex justify-center items-center md:w-1/12">
                  <div
                    className={`w-6 h-6 rounded-full z-10 ${
                      isCurrent ? "bg-babyPurple" : "bg-primaryBlue"
                    }`}
                  ></div>
                </div>

                <div className="md:w-1/2"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}