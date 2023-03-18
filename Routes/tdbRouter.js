const homeController = require("../Controllers/homeController");
const userTbdController = require("../Controllers/userTbdController");
const router = require("express").Router();

router.get("/", homeController.getHomedata);
router.get("/getlistUsers", homeController.getListViews);
router.get("/addUser", userTbdController.addUserView);
router.post("/addUser", userTbdController.addUser);

module.exports = router;
