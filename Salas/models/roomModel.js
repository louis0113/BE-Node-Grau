const sequelize = require("../config/database");
const { DataTypes } = require("sequelize");

const roomModel = sequelize.define("Rooms", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  capacity: {
    type: DataTypes.INTEGER.UNSIGNED,
    defaultValue: 0,
  },
  hasProjector: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = roomModel;
