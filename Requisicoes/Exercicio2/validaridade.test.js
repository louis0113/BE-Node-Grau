const validar = require("./validaridade");

test("O resultado deve dar Acesso permitido", () => {
  return expect(validar(19)).resolves.toBe("Acesso permitido");
});

test("O resultado deve dar Acesso negado", () => {
  return expect(validar(11)).rejects.toBe("Acesso negado");
});
