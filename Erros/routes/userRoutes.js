const express = require("express");
const router = express.Router()
const {getUserById, createUser} = require("../controller/userController");

router.get("/:id", getUserById);
router.post("/", createUser);

module.exports = router;
