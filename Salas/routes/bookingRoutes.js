const express = require("express");
const router = express.Router();
const bookingController = require("../controllers/bookingControllers");

const {
  authenticateToken,
  authorizedRoles,
} = require("../middlewares/authMiddleware");

router.get(
  "/",
  authenticateToken,
  authorizedRoles("admin"),
  bookingController.getBooking,
);

router.delete(
  "/:id",
  authenticateToken,
  authorizedRoles("admin"),
  bookingController.deleteBooking,
);

module.exports = router;
