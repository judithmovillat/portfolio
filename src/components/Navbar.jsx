import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full flex flex-col items-center p-6 bg-darkBlack z-50 font-poppins">
      {/* Menú escritorio */}
      <ul className="hidden md:flex gap-10 justify-center w-full max-w-4xl">
        <li>
          <a href="#hero" className="text-babyBlue font-bold hover:text-primaryViolet">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="text-babyBlue font-bold hover:text-primaryViolet">
            Sobre mí
          </a>
        </li>
        <li>
          <a href="#trayectory" className="text-babyBlue font-bold hover:text-primaryViolet">
            Trayectoria
          </a>
        </li>
        <li>
          <a href="#projects" className="text-babyBlue font-bold hover:text-primaryViolet">
            Proyectos
          </a>
        </li>
        <li>
          <a href="#contact" className="text-babyBlue font-bold hover:text-primaryViolet">
            Contacto
          </a>
        </li>
      </ul>

      {/* Botón hamburguesa */}
      <div className="md:hidden flex items-center mt-2">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-babyBlue focus:outline-none text-2xl"
        >
          {isOpen ? "\u2715" : "\u2630"} {/* X o ☰ */}
        </button>
      </div>

      {/* Menú móvil */}
      {isOpen && (
        <ul className="absolute top-full left-0 w-full bg-darkBlack flex flex-col items-center gap-6 py-6 md:hidden">
          <li>
            <a
              href="#hero"
              className="text-babyBlue font-bold hover:text-primaryViolet"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-babyBlue font-bold hover:text-primaryViolet"
              onClick={() => setIsOpen(false)}
            >
              Sobre mí
            </a>
          </li>
          <li>
            <a
              href="#trayectory"
              className="text-babyBlue font-bold hover:text-primaryViolet"
              onClick={() => setIsOpen(false)}
            >
              Trayectoria
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-babyBlue font-bold hover:text-primaryViolet"
              onClick={() => setIsOpen(false)}
            >
              Proyectos
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-babyBlue font-bold hover:text-primaryViolet"
              onClick={() => setIsOpen(false)}
            >
              Contacto
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;