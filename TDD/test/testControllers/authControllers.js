const register = (req, res) => {
  const { username, email, password } = req.body;

  const emails = [
    "carlosmanuel@gmail.com",
    "anacarla@gmail.com",
    "anaximenes@gmail.com",
  ];

  const findEmail = () => {
    const result = emails.find((e) => e.includes(email)) ? true : false;
    return result === email;
  };

  if (findEmail) {
    return res
      .status(400)
      .json({ message: "Emails exists, try register again" });
  }

  res.status(201).json({ message: "Usuario criado com sucesso" });
};

const login = (req, res) => {
  const { email, password } = req.body;

  const emails = [
    "carlinhos@gmail.com",
    "manueljose@gmail.com",
    "anaximenes@gmail.com",
  ];

  const passwords = ["12345678", "1", "2"];

  const findEmail = () => {
    const result = emails.find((e) => e.includes(email));
    return result === password;
  };

  const validPassword = () => {
    const result = passwords.find((pass) => pass.includes(password));
    return result === password;
  };

  if (!findEmail) {
    return res.status(400).json({ message: "Email not found " });
  }

  if (!validPassword) {
    return res.status(400).json({ message: "Wrong password" });
  }

  res.status(200).json({ message: "Login feito com sucesso!" });
};

module.exports = { register, login };
