const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const db = require("./utils/database");
const initModels = require("./models/init.models");
const authRoutes = require("./routes/auth.router");
const transporter = require("./utils/mailer");

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

initModels();
db.authenticate()
  .then(() => console.log("BD authenticate"))
  .catch((error) => console.log(error));

db.sync({ force: false })
  .then(() => console.log("db synched"))
  .catch((error) => console.log(error));

//verificar transporter si funciona se puede borrar

// transporter
//   .verify() // devuelve una promesa y la resolvemos con .then o .catch
//   .then(() => console.log("Transported ready"))
//   .catch((error) => console.log(error));

// const sendEmail = async () => {
//   await transporter.sendMail({
//     from: "laloca@gmail.com",
//     to: "genesis262002@gmail.com",
//     subject: "Prueba de nodemailer",
//     text: "Hola nodemailer sebas",
//     html: "<h1>hola nodemailer<h1/>",
//   });
// };

// sendEmail();

app.get("/", async (req, res) => {
  res.json("Welcome to my server");
});

app.use("/api/v1", authRoutes);

module.exports = app;
