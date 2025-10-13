const {body, validationResult} = require("express-validator");

let users = [];
let x = 0;
let getUserWithId = (req, res) => {

  const errors = validationResult(req);
  if (!errors.isEmpty()){
    return res.status(400).json({errors: errors.array()})
  }

  const id = req.params.id;

  for (const user of users){
    if( parseInt(user.id) === parseInt(id)){
      res.json(user);
    } else {
      x++;
    }
  }

  if (x != 0){
    return res.status(404).json({"message" : `O id ${id} não existe`});
    x = 0;
  }
};

let getUserWithQuery = (req, res) => {

  const name = req.query.name;
  const url = req.protocol + '://' + req.get('host') + req.originalUrl;

  if (url === "http://localhost:3000/api/users"){
    res.json(users);
  } else {
    for (const user of users){
      if (user.name  === name ){
        res.json(user);
      }  
    }
  }
};

let setUser = (req, res) => {

  const newUser = req.body;

  const errors = validationResult(req);

  if (!errors.isEmpty()){
    return res.status(400).json({errors: errors.array()})
  }

  users.push(newUser)
  res.status(201).json({"message" : "Usuário criado com sucesso!", "user" : newUser});
};

module.exports = {getUserWithId, getUserWithQuery, setUser};
