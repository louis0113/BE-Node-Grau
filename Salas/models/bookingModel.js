const sequelize = require("../config/database");
const { DataTypes } = require("sequelize");

const bookingModel = sequelize.define("Bookings", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  roomId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATEONLY,
    defaultValue: DataTypes.NOW,
  },
  start: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  end: {
    type: DataTypes.TIME,
    allowNull: false,
  },
});

module.exports = bookingModel;
