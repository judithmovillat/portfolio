import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed w-full flex justify-center items-center p-6 bg-darkBlack z-50 font-poppins">
  <ul className="flex gap-10">
    <li><a href="#hero" className="text-babyBlue bold hover:text-primaryViolet">Home</a></li>
    <li><a href="#about" className="text-babyBlue bold hover:text-primaryViolet">Sobre mí</a></li>
    <li><a href="#trayectory" className="text-babyBlue bold hover:text-primaryViolet">Trayectoria</a></li>
    <li><a href="#projects" className="text-babyBlue bold hover:text-primaryViolet">Proyectos</a></li>
    <li><a href="#contact" className="text-babyBlue bold hover:text-primaryViolet">Contacto</a></li>
  </ul>
</nav>
  );
};

export default Navbar;