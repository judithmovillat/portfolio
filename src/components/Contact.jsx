import React, { useState } from "react";
import axios from "axios";
import ContactButtons from "./ContactButtons";

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      await axios.post("https://formspree.io/f/xzdjzbwl", formData, {
        headers: { Accept: "application/json" },
      });
      setStatus("Mensaje enviado correctamente");
      form.reset();
    } catch (err) {
      setStatus("Error al enviar el mensaje");
    }
  };

  return (
    <section className="bg-gray-900 text-center py-20 px-4 md:px-8 min-h-[calc(100vh-64px)] flex flex-col justify-center font-poppins">
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-babyPurple mb-2">
        Contacto
      </h2>
      <p className="text-gray-300 text-base md:text-lg mb-10 max-w-3xl mx-auto">
        ¿Te encaja mi perfil? Escríbeme y te respondo lo antes posible.
      </p>

      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto flex flex-col gap-4 w-full">
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          required
          className="p-4 rounded border border-babyPurple bg-gray-800 text-lightWhite placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-babyPurple transition"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="p-4 rounded border border-babyPurple bg-gray-800 text-lightWhite placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-babyPurple transition"
        />
        <textarea
          name="message"
          placeholder="Mensaje"
          required
          className="p-4 rounded border border-babyPurple bg-gray-800 text-lightWhite placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-babyPurple transition resize-none h-48"
        />
        <button
          type="submit"
          className="px-8 py-4 bg-babyPurple text-black font-bold rounded hover:bg-primaryBlue transition w-fit mx-auto mt-2"
        >
          Enviar
        </button>
      </form>

      {status && <p className="mt-4 text-lightWhite">{status}</p>}

      <ContactButtons />
    </section>
  );
};

export default Contact;