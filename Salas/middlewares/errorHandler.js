const {
  getBooking,
  deleteBookin,
} = require("../controllers/bookingControllers");
const {
  getRooms,
  setRoom,
  setBookingByRooom,
} = require("../controllers/roomControllers");

module.exports = (err, req, res, next) => {
  console.error(err.stack);

  const statusCode = err.statusCode || 500;
  const message = err.message;
  return res.status(statusCode).json({ error: message });
};
