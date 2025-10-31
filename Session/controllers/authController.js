const User = require("../models/userModel");

const register = async (req, res) => {
  const { username, password, role } = req.body;

  const user = await User.create({
    username: username,
    password: password,
    role: role,
  });

  res.status(201).json({ message: "Usuario criado com sucesso" });
};

const login = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ where: { username: username } });

  if (!user) {
    return res.status(400).json({ message: "User not found " });
  }

  const validPassword = await user.validatePassword(password);

  if (!validPassword) {
    return res.status(400).json({ message: "Wrong passowrd" });
  }

  req.session.userId = user.userId;
  req.session.username = username;
  req.session.role = user.role;
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
