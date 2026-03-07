"use client";

import React, { useState } from "react";
import axios from "axios"; // asegúrate de tener axios instalado: npm install axios
import ContactButtons from "./ContactButtons";
import SocialBadgesHero from "./SocialBadgesHero";

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    // Creamos objeto con los datos del formulario
    const formData = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    try {
      const response = await axios.post(
        "https://formspree.io/f/xzdjzbwl", // reemplaza con tu Formspree ID
        formData,
        {
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.status === 200) {
        setStatus("Mensaje enviado correctamente");
        form.reset();
      } else {
        setStatus("Error al enviar el mensaje");
      }
    } catch (err) {
      setStatus("Error al enviar el mensaje");
      console.error(err);
    }
  };

  return (
    <section
      id="contact"
      className="bg-gray-900 text-center py-20 px-4 md:px-8 min-h-[calc(100vh-64px)] flex flex-col justify-center font-poppins"
    >
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-babyPurple mb-4">
        Contacto
      </h2>
      <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-10 max-w-3xl mx-auto">
        ¿TNecesitas más información sobre mí? Escríbeme y te respondo lo antes posible.
      </p>

      {/* Formulario */}
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto flex flex-col gap-4 w-full"
      >
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          required
          className="p-3 md:p-4 rounded border border-babyPurple bg-gray-800 text-lightWhite placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-babyPurple transition"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="p-3 md:p-4 rounded border border-babyPurple bg-gray-800 text-lightWhite placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-babyPurple transition"
        />
        <textarea
          name="message"
          placeholder="Mensaje"
          required
          className="p-3 md:p-4 rounded border border-babyPurple bg-gray-800 text-lightWhite placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-babyPurple transition resize-none h-40 md:h-48"
        />
        <button
          type="submit"
          className="px-6 py-3 md:px-8 md:py-4 bg-babyPurple text-black font-bold rounded hover:bg-primaryBlue transition w-fit mx-auto mt-2"
        >
          Enviar
        </button>
      </form>

      {/* Estado */}
      {status && <p className="mt-4 text-lightWhite">{status}</p>}

      {/* Botones sociales */}
      <ContactButtons />

      {/* Badges opcionales */}
      <SocialBadgesHero />
    </section>
  );
};

export default Contact;