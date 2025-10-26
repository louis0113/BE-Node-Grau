const sequelize = require("../config/database");
const {DataTypes, Models} = require("sequelize")
const Pet = sequelize.define(
'Pet', 
  {
  id : {
    type : DataTypes.INTEGER,
    autoIncrement : true,
    primaryKey : true
  },
    namePet : {
      type: DataTypes.STRING,
      allowNull : false
    },
    typePet : {
      type: DataTypes.STRING,
      allowNull : false
    },
    age : {
      type : DataTypes.INTEGER,
      allowNull : false
    },
  adopted : {
    type: DataTypes.BOOLEAN,
    defaultValue : false,
  }
},
  {



  });

module.exports = Pet;
