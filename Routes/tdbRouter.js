const mainController = require("../Controllers/mainController");
const homeController = require("../Controllers/homeController");
const router = require("express").Router();

router.get("/", homeController.getHomedata);

module.exports = router;
