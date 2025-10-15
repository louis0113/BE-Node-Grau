const express = require("express");
const routerPet = require("./routes/petRoutes");
const sequelize = require("./model/database");
const app = express();
const PORT = 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api", routerPet);

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Conectado ao MySQL");
    
    await sequelize.sync();
    console.log("✅ Tabelas sincronizadas");
    
    app.listen(PORT, () => {
      console.log(`🚀 Servidor em http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("❌ Erro:", err);
    process.exit(1);
  }
};

startServer();
