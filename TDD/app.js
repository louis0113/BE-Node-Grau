require("dotenv").config();
const express = require("express");
const database = require("./config/database");
const session = require("./middlewares/session");
const authRoutes = require("./routes/authRoutes");
const notasRoutes = require("./routes/notasRoutes");
const app = express();
database.startServer();
app.use(express.json());
app.use(session);
app.use("/notas", notasRoutes);
app.use("/", authRoutes);

module.exports = app;
