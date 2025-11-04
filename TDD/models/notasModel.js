const database = require("../config/database");
const { DataTypes } = require("sequelize");

const notasModel = database.sequelize.define(
  "Notas",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    primeiraNota: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    segundaNota: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    media: {
      type: DataTypes.FLOAT,
    },
  },
  {
    hooks: {
      beforeCreate: (notas) => {
        const media = (notas.primeiraNota + notas.segundaNota) / 2;
        notas.media = media.toFixed(2);
      },
    },
  },
);

module.exports = notasModel;
