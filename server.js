const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "dist")));

// Endpoint de contacto
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Configura tu correo SMTP (ejemplo con Gmail)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "tucorreo@gmail.com",
        pass: "tucontraseña"
      }
    });

    await transporter.sendMail({
      from: email,
      to: "tucorreo@gmail.com",
      subject: `Nuevo mensaje de ${name}`,
      text: message
    });

    res.status(200).json({ message: "Mensaje enviado correctamente" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error enviando el mensaje" });
  }
});

// Todas las demás rutas cargan React
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));