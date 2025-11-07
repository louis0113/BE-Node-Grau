const request = require("supertest");
const app = require("../appTest");

beforeAll(async () => {
  const res = await request(app).post("/register").send({
    username: "anaximenes",
    email: "anaximenes@gmail.com",
    password: "12345678",
  });
});

beforeEach(async () => {
  const login = await request(app).post("/login").send({
    email: "anaximenes@gmail.com",
    password: "12345678",
  });
});

describe("POST /notas", () => {
  test("Adição nota com sessão ativa", async () => {
    const res = await request(app).post("/notas").send({
      userId: 3,
      primeiraNota: 8.0,
      segundaNota: 5.0,
    });

    expect(res.statusCode).toEqual(201);
  });

  test("Valor fora do intervalo de notas", async () => {
    const res = await request(app).post("/notas").send({
      userId: 3,
      primeiraNota: 10.5,
      segundaNota: 5.0,
    });

    expect(res.statusCode).toEqual(400);
  });
});

describe("GET /notas", () => {
  test("Notas listadas corretamente para o usuário atual", async () => {
    const res = await request(app).get("/notas");

    expect(res.statusCode).toEqual(200);
  });
});

describe("GET /notas/:username/media", () => {
  test("Usuário encontrado", async () => {
    const res = await request(app).get("/notas/anaximenes/media");

    expect(res.statusCode).toEqual(200);
  });

  test("User not found", async () => {
    const res = await request(app).get("/notas/kaio/media");

    expect(res.statusCode).toEqual(404);
  });
});
