const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const register = async (req, res, next) => {
  try {
    const { username, password, role } = req.body;
    const user = await User.create({
      username: username,
      password: password,
      role: role,
    });
    res.status(201).json({ message: "Usuario criado com sucessso" });
  } catch (err) {
    next(err);
  }
};

const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ where: { username: username } });

    if (!user) {
      return res.status(400).json({ message: "Usuário não encontrado" });
    }

    const validatePassword = await user.validatePassword(password);

    if (!validatePassword) {
      return res.status(400).json({ message: "Senha inválida" });
    }

    const token = jwt.sign(
      {
        id: user.id,
        role: user.role,
      },
      process.env.SECRET_KEY,
      { expiresIn: "1h" },
    );

    res.status(200).json({ token });
  } catch (err) {
    next(err);
  }
};

module.exports = { register, login };

