const { body } = require("express-validator");

const setRegisterValidation = [
  body("username")
    .exists()
    .isLength({ min: 3 })
    .withMessage("Enter a username with at least 3 characters"),
  body("password")
    .exists()
    .isLength({ min: 8 })
    .withMessage("Enter a password with at least 8 characters"),
  body("role")
    .exists()
    .isLength({ min: 4 })
    .withMessage("Enter a role with at least 4 characters"),
];

const setLoginValidation = [
  body("username")
    .exists()
    .isLength({ min: 3 })
    .withMessage("Enter a username with at least 3 characters"),
  body("password")
    .exists()
    .isLength({ min: 8 })
    .withMessage("Enter a password with at least 8 characters"),
];

module.exports = { setRegisterValidation, setLoginValidation };
