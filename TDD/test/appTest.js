require("dotenv").config();
const express = require("express");
const authRoutes = require("./testRoutes/authRoutes");
const notasRoutes = require("./testRoutes/notasRoutes");
const app = express();
app.use(express.json());
app.use("/notas", notasRoutes);
app.use("/", authRoutes);

module.exports = app;
