const moteurJeuxController = require("../Controllers/moteurJeuxController");
const router = require("express").Router();

router.get("/getContacts", moteurJeuxController.testApi);
router.post("/saveContact", moteurJeuxController.saveUser);
router.get("/test", moteurJeuxController.testApi);
router.get("/getAllUsers", moteurJeuxController.getAllUsers);

module.exports = router;
