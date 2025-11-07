const express = require("express");

const router = express.Router();

const notasController = require("../testControllers/notasController");

router.post("/", notasController.setNotas);

router.get("/", notasController.getNotas);

router.get("/:username/media", notasController.getMediaByUsername);

module.exports = router;
