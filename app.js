const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const moeurJeuxRoute = require("./Routes/moeurJeuxRouter");
const pilotageRoute = require("./Routes/pilotageRouter");

// app.use("/css", express.static("./public/css"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", pilotageRoute);
app.use("/api/mj", moeurJeuxRoute);

app.set("view engine", "ejs");
app.set("View", "./Views");

module.exports = app;
