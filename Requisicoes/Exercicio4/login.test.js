const login = require("./login");


test("É preciso dar Login bem-sucedido", () => {
  return expect(login("admin", "1234")).resolves.toBe("Login bem-sucedido")
})

test("É preciso dar Credenciais inválidas", () => {
  return expect(login("louis", "1234")).rejects.toBe("Credenciais inválidas")
})

test("É preciso dar Credenciais inválidas", () => {
  return expect(login("admin", "132441263")).rejects.toBe("Credenciais inválidas")
})

test("É preciso dar Credenciais inválidas", () => {
  return expect(login("louis", "123431443")).rejects.toBe("Credenciais inválidas")
})
