const express = require("express");
const router = express.Router();
const authenticateSession = require("../middlewares/authSession");
router.get("/profile", authenticateSession);
router.post("/logout");

module.exports = router;
