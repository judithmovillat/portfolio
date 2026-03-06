import React from "react";

const projects = [
  { title: "Proyecto 1", description: "Descripción breve del proyecto." },
  { title: "Proyecto 2", description: "Descripción breve del proyecto." },
  { title: "Proyecto 3", description: "Descripción breve del proyecto." }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 text-center px-4 bg-darkBlack">
      <h2 className="text-4xl font-bold text-primaryBlue mb-8">Proyectos</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <div key={i} className="bg-black border-2 border-primaryViolet p-6 rounded-lg hover:border-primaryBlue transform hover:-translate-y-2 transition">
            <h3 className="text-2xl font-bold text-lightWhite">{p.title}</h3>
            <p className="text-lightWhite mt-2">{p.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;