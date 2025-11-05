const User = require("./userModel");
const Notas = require("./notasModel");

Notas.belongsTo(User, { foreignKey: "userId" });
User.hasMany(Notas, { foreignKey: "userId" });

module.exports = { User, Notas };
