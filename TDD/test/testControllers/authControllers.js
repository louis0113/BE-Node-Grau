const { users, notas } = require("../config/database");

const register = (req, res) => {
  const { username, email, password } = req.body;

  if (findEmail) {
    return res
      .status(400)
      .json({ message: "Emails exists, try register again" });
  }

  res.status(201).json({ message: "Usuario criado com sucesso" });
};

const login = (req, res) => {
  const { email, password } = req.body;

  if (!user) {
    return res.status(400).json({ message: "Email not found " });
  }

  if (!validPassword) {
    return res.status(400).json({ message: "Wrong password" });
  }

  req.session.username = user.username;
  req.session.email = email;
  req.session.isAuthenticated = true;

  res.status(200).json({ message: "Login feito com sucesso!" });
};

module.exports = { register, login, logout };
