const users = [];

const getUserById = (req, res, next) => {
  try {
    const id = req.params.id;
    const user = users.find((u) => u.id === parseInt(id));

    if (!user) {
      const error = new Error("User not found");
      error.statusCode = 404;
      throw error;
    }
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

const createUser = (req, res, next) => {
  try {
    const { id, name, email } = req.body;

    if (!name || !email) {
      const error = new Error("Invalid input data");
      error.statusCode = 422;
      throw error;
    }

    const emailExists = users.find((u) => u.email == email);
    if (emailExists) {
      const error = new Error("Email already exists");
      error.statusCode = 400;
      throw error;
    }
    const newUser = { id, name, email };

    users.push(newUser);

    res.status(201).json(newUser);
  } catch (err) {
    next(err);
  }
};

module.exports = { getUserById, createUser };
