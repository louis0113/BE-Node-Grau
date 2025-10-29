require("dotenv").config();
const express = require("express");
const app = express();
require("./models/associations");
const authentication = require("./routes/authRoutes");
const rooms = require("./routes/roomsRoutes");
const bookings = require("./routes/bookingRoutes");
const sequelize = require("./config/database");
const errorHandler = require("./middlewares/errorHandler");
app.use(express.json());
app.use("/api/auth", authentication);
app.use("/api/rooms", rooms);
app.use("/api", bookings);
app.use(errorHandler);
app.use(express.json());

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
