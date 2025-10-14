const {body} = require("express-validator");

const setUserValidation = [
  body("id").exists().isNumeric().isInt({min : 1}).not().isString().withMessage("Please, enter an integer greater than 1"),
  body("name").exists().isLength({min : 3}).withMessage("Enter a name with at least 3 characters"),
  body("email").exists().isEmail().withMessage("Enter a valid email :)")
]

module.exports = {setUserValidation};
