const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use("/css", express.static("./public/css"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("<h1> BACKEND PROJET POIN : CYBERSECURITE CHALLENGE</h1>");
});

app.get("/test", (req, res) => {
  res.status(200).json({
    status_code: 200,
    data: {
      user: "amine",
      company: "EPSI",
      project: "CYBER SECURITE CHALLENGE BACKEND",
      date: new Date(),
    },
    message: "Salut Romain c'est un test pour toi",
  });
});

module.exports = app;
