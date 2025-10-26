const { body } = require("express-validator");

const setProductValidation = [
  body("name")
    .exists()
    .isLength({ min: 4 })
    .withMessage("Enter a username with at least 4 characters"),
  body("price")
    .exists()
    .isFloat({ min: 0.1 })
    .not()
    .isString()
    .withMessage("Hit a valid price, otherwise more than 0.10"),
];

module.exports = { setProductValidation };
