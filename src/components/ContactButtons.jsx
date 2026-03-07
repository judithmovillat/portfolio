import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaShareAlt } from "react-icons/fa";

const ContactButtons = () => {
  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("URL copiada al portapapeles");
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 mt-8">
      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/judith-movilla-touriño/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-lightWhite bg-primaryBlue hover:bg-babyBlue transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
      >
        <FaLinkedin />
        LinkedIn
      </a>

      {/* Email */}
      <a
        href="mailto:judith@example.com"
        className="flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-black bg-babyBlue hover:bg-primaryBlue transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
      >
        <FaEnvelope />
        Email
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/judithmovillaT"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-lightWhite bg-primaryViolet hover:bg-babyPurple transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
      >
        <FaGithub />
        GitHub
      </a>

      {/* Compartir */}
      <button
        onClick={handleShare}
        className="flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-black bg-babyGreen hover:bg-primaryBlue transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
      >
        <FaShareAlt />
        Compartir
      </button>
    </div>
  );
};

export default ContactButtons;