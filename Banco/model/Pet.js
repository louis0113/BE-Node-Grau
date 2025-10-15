const sequelize = require("./database");
const {DataTypes, Models} = require("sequelize")
const Pet = sequelize.define(
'Pet', 
  {
  id : {
    type : DataTypes.INTEGER,
    autoIncrement : true,
    primaryKey : true
  },
  namePet : DataTypes.STRING,
  typePet : DataTypes.STRING,
  age : DataTypes.INTEGER,
  adopted : {
    type: DataTypes.BOOLEAN,
    defaultValue : false,
  }
},
  {



  });

module.exports = Pet;
