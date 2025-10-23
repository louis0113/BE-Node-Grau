const app = require("./app");
require("dotenv").config();
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("Server running on 'https://localhost:3000' ");
});
