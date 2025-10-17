const express = require("express");
const app = express();
const PORT = 3000;
const userRoutes = require("./routes/userRoutes")
const errorHandler = require("./middlewares/errors")
app.use(express.json());
app.use("/users", userRoutes);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log("Servidor em http://localhost:3000/api/users")
})
