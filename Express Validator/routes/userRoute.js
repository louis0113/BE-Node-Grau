const {body, validation} = require("express-validator");
const express = require("express");
const router = express.Router();
const {getUserWithIdValidation, setUserValidation} = require("../validators/userValidator");
const controller = require("../controllers/userController");

router.get("/users", controller.getUserWithQuery);
router.get("/users/:id", controller.getUserWithId);
router.post("/users", setUserValidation, controller.setUser);

module.exports = router;
