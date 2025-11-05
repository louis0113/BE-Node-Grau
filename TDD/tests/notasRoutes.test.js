const request = require("supertest");
const app = require("../app");

describe("Sessão inativa", () => {
  test("Não é possível acessar rotas de /notas", async () => {
    const res = await request(app).get("/notas");
    expect(res.statusCode).toEqual(401);
  });
});

describe("POST /notas", () => {
  test("Adição nota com sessão ativa", async () => {
    const login = await request(app).post("/login").send({
      email: "anaximenes@gmail.com",
      password: "12345678",
    });

    const cookies = login.headers["set-cookie"];

    const res = await request(app).post("/notas").set("Cookie", cookies).send({
      userId: 3,
      primeiraNota: 8.0,
      segundaNota: 5.0,
    });

    expect(res.statusCode).toEqual(201);
  });

  test("Valor fora do intervalo de notas", async () => {
    const login = await request(app).post("/login").send({
      email: "anaximenes@gmail.com",
      password: "12345678",
    });

    const cookies = login.headers["set-cookie"];

    const res = await request(app).post("/notas").set("Cookie", cookies).send({
      userId: 3,
      primeiraNota: 10.5,
      segundaNota: 5.0,
    });

    expect(res.statusCode).toEqual(400);
  });
});

describe("GET /notas", () => {
  test("Notas listadas corretamente para o usuário atual", async () => {
    const login = await request(app).post("/login").send({
      email: "anaximenes@gmail.com",
      password: "12345678",
    });

    const cookies = login.headers["set-cookie"];

    const res = await request(app).get("/notas").set("Cookie", cookies);

    expect(res.statusCode).toEqual(200);
  });
});

describe("GET /notas/:username/media", () => {
  test("users found sucessfull", async () => {
    const login = await request(app).post("/login").send({
      email: "anaximenes@gmail.com",
      password: "12345678",
    });

    const cookies = login.headers["set-cookie"];

    const res = await request(app)
      .get("/notas/Louis/media")
      .set("Cookie", cookies);

    expect(res.statusCode).toEqual(200);
  });

  test("User not found", async () => {
    const login = await request(app).post("/login").send({
      email: "anaximenes@gmail.com",
      password: "12345678",
    });

    const cookies = login.headers["set-cookie"];

    const res = await request(app)
      .get("/notas/kaio/media")
      .set("Cookie", cookies);

    expect(res.statusCode).toEqual(404);
  });
});
