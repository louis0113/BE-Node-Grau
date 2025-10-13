const {body, validationResult} = require("express-validator");

let users = [];

function buscarDados(prop, func, param) {
  for (const user of users) {
    if (func(user[prop]) === func(param)) {
      return user;
    }
  }
  return null;
};

const getUserWithId = (req, res) => {

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({errors: errors.array()});
  }

  const userid = req.params.id;

  const buscar = buscarDados("id", parseInt, userid);

  if (!buscar) {
    return res.status(404).json({"message": `O id ${userid} não existe`})
  }

  res.json(buscar);
};

const getUserWithQuery = (req, res) => {
  const username = req.query.name;
  const url = req.protocol + '://' + req.get('host') + req.originalUrl;
  const expectedUrl = "http://localhost:3000/api/users";
  if (url === expectedUrl || url === expectedUrl + "/") {
    res.json(users);
  } else {
    const buscar = buscarDados("name", (val) => val.toLowerCase(), username.toLowerCase());

    if (!buscar) {
      return res.status(404).json({"message": `Usuário ${username} não encontrado`});
    }

    res.json(buscar);
  }
};

const setUser = (req, res) => {
  const newUser = req.body;
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({errors: errors.array()});
  }

  users.push(newUser);
  res.status(201).json({"message": "Usuário criado com sucesso!", "user": newUser});
};

module.exports = {getUserWithId, getUserWithQuery, setUser};
