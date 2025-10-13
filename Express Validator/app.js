const express = require("express");
const routerUsers = require("./routes/userRoute")
const app = express();

const port = 3000;
app.use(express.json());
app.use("/api", routerUsers);

app.listen(port, () => {
  console.log("O servidor está rodando em \"http://localhost:3000\"")
});



