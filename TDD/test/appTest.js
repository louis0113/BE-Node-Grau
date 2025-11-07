require("dotenv").config();
const express = require("express");
const authRoutes = require("./routes/authRoutes");
const notasRoutes = require("./routes/notasRoutes");
const app = express();
app.use(express.json());
app.use("/notas", notasRoutes);
app.use("/", authRoutes);

module.exports = app;
