const mainController = require("../Controllers/mainController");
const router = require("express").Router();

router.get("/", mainController.main);

module.exports = router;
