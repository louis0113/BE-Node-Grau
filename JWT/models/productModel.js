const sequelize = require("../config/database.js");

const { DataTypes } = require("sequelize");

const productModel = sequelize.define("Products", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

module.exports = productModel;
