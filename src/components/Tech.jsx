"use client"

import React from "react";
import oracleLogo from "../assets/oracle.png";
import plsqlLogo from "../assets/plsql.png";
import pbiLogo from "../assets/powerbi.png";
import scrumLogo from "../assets/scrummanager.png";

const tech = [
  { icon: <img src={oracleLogo} className="w-12" />, name: "Oracle" },
  { icon: <img src={plsqlLogo} className="w-12" />, name: "PL/SQL" },
  { icon: <img src={pbiLogo} className="w-12" />, name: "Power BI" },
  { icon: <img src={scrumLogo} className="w-12" />, name: "SCRUM" }
];

export default function Tech() {
  return (
    <section id="tech" className="py-20 text-center px-4 bg-gray-900">

      <h2 className="text-4xl font-bold text-babyBlue mb-8">
        Tecnologías
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-5xl mx-auto">
        {tech.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-black border-2 border-primaryViolet p-6 rounded-lg hover:border-primaryBlue hover:scale-105 transform transition duration-300"
          >
            <div className="text-6xl mb-4">
              {skill.icon}
            </div>

            <p className="text-xl font-semibold">
              {skill.name}
            </p>

          </div>
        ))}
      </div>

    </section>
  );
}