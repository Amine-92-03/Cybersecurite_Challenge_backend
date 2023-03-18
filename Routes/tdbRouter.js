const homeController = require("../Controllers/homeController");
const router = require("express").Router();

router.get("/", homeController.getHomedata);
router.get("/getlistUsers", homeController.getListViews);

module.exports = router;
