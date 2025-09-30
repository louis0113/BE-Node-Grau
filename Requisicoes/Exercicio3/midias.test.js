const baixar = require("./midias");

let msg;

jest.setTimeout(10000);

test("É preciso dar Imagem baixada e Video Baixado", async () => {
  msg1 = await baixar(2000, "Imagem");
  msg2 = await baixar(3000, "Video");
  
  expect(`${msg1}\n${msg2}`).toBe("Imagem baixada\nVideo baixado");
})

