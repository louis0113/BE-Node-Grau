const session = require("express-session");

const ses = session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: false,
});

module.exports = ses;
