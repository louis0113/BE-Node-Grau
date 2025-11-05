const express = require("express");

const router = express.Router();

const notasController = require("../controllers/notasController");
const authenticate = require("../middlewares/authSession");

router.post("/", authenticate, notasController.setNotas);

router.get("/", authenticate, notasController.getNotas);

router.get(
  "/:username/media",
  authenticate,
  notasController.getMediaByUsername,
);

module.exports = router;
