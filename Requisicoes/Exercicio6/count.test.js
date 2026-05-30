let contarAte;

beforeEach(() => {
  delete require.cache[require.resolve("./count")];
  contarAte = require("./count");
});
