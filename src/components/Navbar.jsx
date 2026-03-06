import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed w-full flex justify-between items-center p-6 bg-darkBlack z-50">
      <h1 className="text-2xl font-bold text-primaryViolet">Mi Portfolio</h1>
      <ul className="flex gap-6">
        <li><a href="#about" className="text-primaryBlue hover:text-primaryViolet">Sobre mí</a></li>
        <li><a href="#projects" className="text-primaryBlue hover:text-primaryViolet">Proyectos</a></li>
        <li><a href="#contact" className="text-primaryBlue hover:text-primaryViolet">Contacto</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;