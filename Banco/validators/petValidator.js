const {body} = require("express-validator");

const setPetsValidation = [
  body("name").exists().isString().isLength({min : 3}).withMessage("Digite o  nome do animal entre aspas. Mínimo de caracteres é 3"),
  body("type").exists().isString().isLength({min : 3}).withMessage("Digite o tipo do animal entre aspas. Mínimo de caracteres é 3"),
  body("age").exists().isInt({min : 1, max : 20}).not().isString().withMessage("Digite a idade do animal como inteiro. 1 a 20"),
  body("adopted").optional({nullable : true}).isBoolean().not().isString().withMessage("Digite apenas true ou false sem aspas")
]

module.exports = setPetsValidation
