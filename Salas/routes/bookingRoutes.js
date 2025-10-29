const express = require("express");
const router = express.Router();
const bookingController = require("../controllers/bookingControllers");

const {
  authenticateToken,
  authorizedRoles,
} = require("../middlewares/authMiddleware");

router.post(
  "/rooms/:id/bookings",
  authenticateToken,
  authorizedRoles("member"),
  bookingController.setBooking,
);

router.get(
  "/members/:username/bookings",
  authenticateToken,
  authorizedRoles("admin", "member"),
  bookingController.getBooking,
);

router.delete(
  "/bookings/:id",
  authenticateToken,
  authorizedRoles("admin", "member"),
  bookingController.deleteBooking,
);

module.exports = router;
