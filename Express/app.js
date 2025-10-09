const express = require("express");
const app = express();

app.use(express.json());

const livrosRoutes = require("./routes/livrosRoutes");

app.use("/api", livrosRoutes);

app.listen(3000, ()=> {
    console.log("Servidor rodando na porta 3000");
})

