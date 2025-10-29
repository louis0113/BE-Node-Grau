const express = require("express");
const router = express.Router();
const roomController = require("../controllers/roomControllers");

const {
  authenticateToken,
  authorizedRoles,
} = require("../middlewares/authMiddleware");

router.get("/", authenticateToken, roomController.getRooms);

router.post(
  "/",
  authenticateToken,
  authorizedRoles("admin"),
  roomController.setRoom,
);

module.exports = router;
