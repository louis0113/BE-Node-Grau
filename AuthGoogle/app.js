require("dotenv").config();
const express = require("express");
const app = express();
const session = require("./middlewares/session");
const authRoutes = require("./routes/authRoutes");
const loginRoutes = require("./routes/loginRoutes");
app.use(session);
app.use("/auth/google", loginRoutes);
app.use("/auth", authRoutes);

module.exports = app;
