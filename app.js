const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const dataRoute = require("./Routes/dataRoute");
const tdbRoute = require("./Routes/tdbRouter");

// app.use("/css", express.static("./public/css"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", tdbRoute);
app.use("/api/data", dataRoute);

app.set("view engine", "ejs");
app.set("View", "./Views");

module.exports = app;
