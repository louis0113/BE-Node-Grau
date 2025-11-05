const request = require("supertest");
const app = require("../app");

describe("POST /login", () => {
  test("Login feito com sucesso ", async () => {
    const res = await request(app).post("/login").send({
      email: "anaximenes@gmail.com",
      password: "12345678",
    });
    expect(res.statusCode).toEqual(200);
  });

  test("Senha errada no login", async () => {
    const res = await request(app).post("/login").send({
      email: "anaximenes@gmail.com",
      password: "jfeqfweqhofewqoihewf",
    });
    expect(res.statusCode).toEqual(400);
  });
});

describe("Registro aceito com sucesso", () => {
  test("POST /register sucessfull", async () => {
    const res = await request(app).post("/register").send({
      username: "Teste",
      email:
        "beiefwhfwifefwqwqewfibhquewfiqhewhqbfwewnfweiofqqfejljvnwsnioewo@teste123.com",
      password: "testeewfwjqioef",
    });
    expect(res.statusCode).toEqual(201);
  });

  test("Email duplicado no registro, erro ao registrar", async () => {
    const res = await request(app).post("/register").send({
      username: "Teste",
      email: "luizhenrique011304@gmail.com",
      password: "khoewhowqfihwfhio",
    });
    expect(res.statusCode).toEqual(400);
  });
});
