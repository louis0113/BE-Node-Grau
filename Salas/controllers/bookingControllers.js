const Booking = require("../models/bookingModel");
const User = require("../models/userModel");

const getBooking = async (req, res, next) => {
  const username = req.params.username;
  try {
    const isOwnProfile = req.user.username === username;
    const isAdmin = req.user.role === "admin";

    if (!isOwnProfile && !isAdmin) {
      return res.status(403).json({ message: "Access denied" });
    }

    const findBookingByUsername = await Booking.findAll({
      where: { username: username },
      include: User,
    });

    res.status(200).json(findBookingByUsername);
  } catch (err) {
    next(err);
  }
};

const setBooking = async (req, res, next) => {
  const roomId = req.params.id;
  try {
    const { userId, date, start, end } = req.body;

    const bookingFind = await Booking.findOne({
      where: {
        roomId: roomId,
      },
    });

    if (bookingFind) {
      return res.status(409).json({ message: "Conflict" });
    }

    const booking = await Booking.create({
      roomId: parseInt(roomId),
      userId: userId,
      date: date,
      start: start,
      end: end,
    });

    res.status(200).json({ message: "Booking created successfully", booking });
  } catch (err) {
    next(err);
  }
};

const deleteBooking = async (req, res, next) => {
  const bookingId = req.params.id;
  try {
    const booking = await Booking.findOne({
      where: { id: bookingId },
      include: User,
    });

    if (!booking) {
      return res.status(404).json({ message: "Booking doesn't exist" });
    }

    const isOwner = booking.userId === req.user.id;
    const isAdmin = req.user.role === "admin";

    if (!isOwner && !isAdmin) {
      return res.status(403).json({ message: "Access denied" });
    }

    await Booking.destroy({
      where: { id: bookingId },
    });

    res.status(200).json({ message: "Booking has been deleted" });
  } catch (err) {
    next(err);
  }
};

module.exports = { getBooking, setBooking, deleteBooking };
