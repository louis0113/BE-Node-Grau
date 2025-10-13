const {body} = require("express-validator");

const setUserValidation = [
  body("id").exists().isNumeric().isInt({min : 1}).not().isString().withMessage("Porfavor, coloque um inteiro maior que 1"),
  body("name").exists().isLength({min : 3}).withMessage("Coloque o nome com no mínimo 3 caracteres"),
  body("email").exists().isEmail().withMessage("Coloque um e-mail válido :)")
]

module.exports = {setUserValidation};
