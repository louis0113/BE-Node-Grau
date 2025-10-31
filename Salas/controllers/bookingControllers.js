const Booking = require("../models/bookingModel");

const getBooking = async (req, res, next) => {
  const role = req.user.role;
  try {
    const findBookings = await Booking.findAll();

    res.status(200).json(findBookings);
  } catch (err) {
    next(err);
  }
};

const deleteBooking = async (req, res, next) => {
  const bookingId = req.params.id;
  try {
    const booking = await Booking.findOne({
      where: { id: bookingId },
    });

    if (!booking) {
      return res.status(404).json({ message: "Booking doesn't exist" });
    }

    const deleteBooking = await Booking.destroy({
      where: { id: bookingId },
    });

    res
      .status(200)
      .json({ message: "Booking has been deleted", deleteBooking });
  } catch (err) {
    next(err);
  }
};

module.exports = { getBooking, deleteBooking };
