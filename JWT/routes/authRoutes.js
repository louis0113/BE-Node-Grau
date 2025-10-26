const express = require("express");

const router = express.Router();
const userValidations = require("../validators/authValidator");
const authController = require("../controllers/authController");
const validateRequest = require("../middlewares/validateMiddleware");
router.post(
  "/login",
  userValidations.setLoginValidation,
  validateRequest,
  authController.login,
);
router.post(
  "/register",
  userValidations.setRegisterValidation,
  validateRequest,
  authController.register,
);

module.exports = router;
