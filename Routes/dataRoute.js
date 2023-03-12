const usersController = require("../Controllers/usersController");
const router = require("express").Router();

router.get("/getContacts", usersController.testApi);
router.post("/saveContact", usersController.saveUser);
router.get("/test", usersController.testApi);
router.get("/getAllUsers", usersController.getAllUsers);

module.exports = router;
