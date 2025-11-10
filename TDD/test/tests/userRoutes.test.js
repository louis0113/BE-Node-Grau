const request = require("supertest");
const app = require("../appTest");
const { users } = require("../config/database");

beforeEach(() => {
  users.length = 3;
});

describe("POST /login", () => {
  test("Login feito com sucesso", async () => {
    const res = await request(app).post("/login").send({
      email: "carlinhos@gmail.com",
      password: "12345678",
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toEqual("Login feito com sucesso!");
  });

  test("Senha errada no login", async () => {
    const res = await request(app).post("/login").send({
      email: "anaximenes@gmail.com",
      password: "senha_errada",
    });
    expect(res.statusCode).toEqual(400);
    expect(res.body.message).toEqual("Wrong password");
  });

  test("Email não encontrado no login", async () => {
    const res = await request(app).post("/login").send({
      email: "emailinexistente@gmail.com",
      password: "12345678",
    });
    expect(res.statusCode).toEqual(400);
    expect(res.body.message).toEqual("Email not found");
  });
});

describe("POST /register", () => {
  test("Registro aceito com sucesso", async () => {
    const res = await request(app).post("/register").send({
      username: "Teste",
      email: "teste@gmail.com",
      password: "senhateste",
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body.message).toEqual("Usuario criado com sucesso");
  });

  test("Email duplicado no registro, erro ao registrar", async () => {
    const res = await request(app).post("/register").send({
      username: "anaximenes",
      email: "anaximenes@gmail.com",
      password: "12345678",
    });
    expect(res.statusCode).toEqual(400);
    expect(res.body.message).toEqual("Emails exists, try register again");
  });
});
