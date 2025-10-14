const {validationResult} = require("express-validator");
let users = [];

function searchData(prop, func, param) {
  for (const user of users) {
    if (func(user[prop]) === func(param)) {
      return user;
    }
  }
}

const getUserWithId = (req, res) => {
  const userid = req.params.id;
  const searchId = searchData("id", parseInt, userid);
  if (!searchId) {
    return res.status(404).json({"message": `The id ${userid} does not exist`})
  }
  res.json(searchId);
};

const getUserWithQuery = (req, res) => {
  const username = req.query.name;
  if (!username) {
    return res.json(users);
  }

  const searchUser = searchData("name", (val) => val.toLowerCase(), username.toLowerCase());

  if(!searchUser){
    return res.status(404).json({"message" : `The user ${username} does not exist`})
  }
  res.json(searchUser);
};

const setUser = (req, res) => {
  const newUser = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({errors: errors.array()});
  }
  users.push(newUser);
  res.status(201).json({"message": "User created successfully!", "user": newUser});
};

module.exports = {getUserWithId, getUserWithQuery, setUser};

