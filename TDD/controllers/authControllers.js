const User = require("../models/userModel");

const register = async (req, res) => {
  const { username, email, password } = req.body;

  const user = await User.create({
    username: username,
    email: email,
    password: password,
  });

  res.status(201).json({ message: "Usuario criado com sucesso" });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const verifyEmail = await User.findOne({ where: { email: email } });

  if (!verifyEmail) {
    return res.status(400).json({ message: "Email not found " });
  }

  const validPassword = await User.validatePassword(password);

  if (!validPassword) {
    return res.status(400).json({ message: "Wrong password" });
  }

  req.session.userId = User.userId;
  req.session.username = User.username;
  req.session.email = email;
  req.session.isAuthenticated = true;

  res.status(200).json({ message: "Login feito com sucesso!" });
};

const logout = async (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ message: "Error on logging out" });
    }
    res.clearCookie("connect.sid");
    res.status(200).json({ message: "Logout feito com sucesso" });
  });
};

module.exports = { register, login, logout };
