const Room = require("../models/roomModel");
const User = require("../models/userModel");
const Booking = require("../models/bookingModel");

Room.hasMany(Booking, { foreignKey: "roomId" });
Booking.belongsTo(Room, { foreignKey: "roomId" });

User.hasMany(Booking, { foreignKey: "userId" });
Booking.belongsTo(User, { foreignKey: "userId" });

module.exports = { Room, User, Booking };
