const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const usersController = require("./Controllers/usersController");
const mainController = require("./Controllers/mainController");
app.use("/css", express.static("./public/css"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", mainController.main);

app.post("/saveContact", usersController.saveUser);

app.get("/test", usersController.testApi);

module.exports = app;
