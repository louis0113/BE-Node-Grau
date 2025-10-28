const sequelize = require("../config/database");
const bcrypt = require("bcryptjs");
const { DataTypes } = require("sequelize");

const userModel = sequelize.define(
  "Users",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    hooks: {
      beforeCreate: async (user) => {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
      },
    },
  },
);

userModel.prototype.validatePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

module.exports = userModel;
