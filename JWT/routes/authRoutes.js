const express = require("express");

const router = express.Router();
const userValidations = require("../validators/authValidator");
const authController = require("../controllers/authController");

router.post("/login", userValidations.setLoginValidation, authController.login);
router.post(
  "/register",
  userValidations.setRegisterValidation,
  authController.register,
);

module.exports = router;
