const { users } = require("../config/database");

const register = (req, res) => {
  const { username, email, password } = req.body;

  const emailExists = users.some((user) => user.email === email);

  if (emailExists) {
    return res
      .status(400)
      .json({ message: "Emails exists, try register again" });
  }

  users.push({ username, email, password });

  res.status(201).json({ message: "Usuario criado com sucesso" });
};

const login = (req, res) => {
  const { email, password } = req.body;

  const user = users.find((u) => u.email === email);

  if (!user) {
    return res.status(400).json({ message: "Email not found" });
  }

  if (user.password !== password) {
    return res.status(400).json({ message: "Wrong password" });
  }

  res.status(200).json({ message: "Login feito com sucesso!" });
};

module.exports = { register, login };
