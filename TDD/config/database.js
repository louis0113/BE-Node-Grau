const { Sequelize } = require("sequelize");

const password = process.env.DATABASE_PASS;
const user = process.env.DATABASE_USER;
const database = process.env.DATABASE_NAME;
const URI = `mysql://${user}:${password}@127.0.0.1:3306/${database}`;
const sequelize = new Sequelize(URI);

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Conectado ao MySQL");

    await sequelize.sync();
    console.log("✅ Tabelas sincronizadas");
  } catch (err) {
    console.error("❌ Erro:", err);
    process.exit(1);
  }
};

module.exports = { sequelize, startServer };
