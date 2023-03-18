// const homeController = require("../Controllers/homeController");
const pilotageController = require("../Controllers/pilotageController");
const router = require("express").Router();

router.get("/", pilotageController.getHomedata);
router.get("/getlistUsers", pilotageController.getListViews);
router.get("/addUser", pilotageController.addUserView);
router.post("/addUser", pilotageController.addUser);

module.exports = router;
