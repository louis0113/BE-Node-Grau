require("dotenv").config();
const express = require("express");
const app = express();
const authentication = require("./routes/authRoutes.js");
const products = require("./routes/productsRoutes");
const sequelize = require("./config/database");
const errorHandler = require("./middlewares/errorHandler");
app.use(express.json());
app.use("/api/auth", authentication);
app.use("/api/products", products);
app.use(errorHandler);

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

startServer();

module.exports = app;
