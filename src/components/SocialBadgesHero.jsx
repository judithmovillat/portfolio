// src/components/SocialBadgesHero.jsx
import React from "react";

const SocialBadgesHero = () => {
  return (
    <div className="mt-10 flex flex-col md:flex-row justify-center items-center gap-6">
      {/* LinkedIn Badge */}
      <div className="linkedin-badge-container">
        <div
          className="badge-base LI-profile-badge"
          data-locale="es_ES"
          data-size="large"
          data-theme="dark"
          data-type="VERTICAL"
          data-vanity="judith-movilla-touriño"
          data-version="v1"
        >
          <a
            className="badge-base__link LI-simple-link"
            href="https://es.linkedin.com/in/judith-movilla-touri%C3%B1o"
          ></a>
        </div>
      </div>

      {/* GitHub Badge */}
      <div
        className="github-badge-container flex justify-center items-center bg-gray-800 p-4 rounded-lg shadow-lg"
      >
        <a
          href="https://github.com/judithmovillat"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-lightWhite hover:text-babyPurple transition"
        >
          <img
            src="https://github.com/judithmovilla.png"
            alt="GitHub Avatar"
            className="w-20 h-20 rounded-full mb-2"
          />
          <strong className="text-lg">Judith Movilla</strong>
          <span className="text-sm text-gray-400">GitHub Profile</span>
        </a>
      </div>
    </div>
  );
};

export default SocialBadgesHero;