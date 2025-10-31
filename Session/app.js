require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());
const sequelize = require("./config/database");
const session = require("./middlewares/session");
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
app.use(session);
app.use("/products", productRoutes);
app.use("/auth", authRoutes);

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
