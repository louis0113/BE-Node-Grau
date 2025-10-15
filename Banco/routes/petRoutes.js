const express = require("express");
const  petsValidation = require("../validators/petValidator");
const {getPets, setPets, deletePetsById} = require("../controller/petController")
const router = express.Router();

router.get("/pets", getPets);
router.post("/pets",petsValidation ,setPets);
router.delete("/pets/:id", deletePetsById);

module.exports = router;
