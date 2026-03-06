import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post("/api/contact", form);
      setStatus("Mensaje enviado correctamente");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("Error al enviar el mensaje");
    }
  };

  return (
    <section id="contact" className="py-20 text-center px-4">
      <h2 className="text-4xl font-bold text-primaryBlue mb-4">Contacto</h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto flex flex-col gap-4">
        <input type="text" name="name" placeholder="Nombre" value={form.name} onChange={handleChange} className="p-3 rounded border border-primaryViolet bg-black text-lightWhite"/>
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} className="p-3 rounded border border-primaryViolet bg-black text-lightWhite"/>
        <textarea name="message" placeholder="Mensaje" value={form.message} onChange={handleChange} className="p-3 rounded border border-primaryViolet bg-black text-lightWhite"/>
        <button type="submit" className="px-6 py-3 bg-primaryViolet text-lightWhite font-bold rounded hover:bg-primaryBlue transition">Enviar</button>
      </form>
      {status && <p className="mt-4 text-lightWhite">{status}</p>}
    </section>
  );
};

export default Contact;