const express = require("express");
const routerPet = require("./routes/petRoutes")
const app = express();
const PORT = 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api", routerPet);

app.listen(PORT, () => {
  console.log("O servidor está rodando em http://localhost:3000");
})
