const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const dataRoute = require("./Routes/dataRoute");
const tdbRoute = require("./Routes/tdbRouter");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use("/css", express.static("./public/css"));

app.use("/", tdbRoute);
app.use("/api/data", dataRoute);

module.exports = app;
