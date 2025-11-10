const request = require("supertest");
const app = require("../appTest");
const { notas } = require("../config/database");

beforeEach(() => {
  notas.length = 0;
});

describe("POST /notas", () => {
  test("Adição nota com sessão ativa", async () => {
    const res = await request(app).post("/notas").send({
      userId: 3,
      primeiraNota: 8.0,
      segundaNota: 5.0,
    });

    expect(res.statusCode).toEqual(201);
    expect(res.body.message).toEqual("Notas adicionadas com sucesso");
    expect(res.body.notas).toHaveLength(1);
    expect(res.body.notas[0].media).toEqual(6.5);
  });

  test("Valor fora do intervalo de notas (acima de 10)", async () => {
    const res = await request(app).post("/notas").send({
      userId: 3,
      primeiraNota: 10.5,
      segundaNota: 5.0,
    });

    expect(res.statusCode).toEqual(400);
    expect(res.body.message).toEqual("Notas maior que 10 ou menor que 0");
  });

  test("Valor fora do intervalo de notas (abaixo de 0)", async () => {
    const res = await request(app).post("/notas").send({
      userId: 3,
      primeiraNota: 8.0,
      segundaNota: -1.0,
    });

    expect(res.statusCode).toEqual(400);
    expect(res.body.message).toEqual("Notas maior que 10 ou menor que 0");
  });

  test("Usuário inexistente", async () => {
    const res = await request(app).post("/notas").send({
      userId: 999,
      primeiraNota: 8.0,
      segundaNota: 5.0,
    });

    expect(res.statusCode).toEqual(400);
    expect(res.body.message).toEqual("id don't exists");
  });
});

describe("GET /notas", () => {
  test("Notas listadas corretamente", async () => {
    await request(app).post("/notas").send({
      userId: 3,
      primeiraNota: 8.0,
      segundaNota: 5.0,
    });

    await request(app).post("/notas").send({
      userId: 1,
      primeiraNota: 7.0,
      segundaNota: 9.0,
    });

    const res = await request(app).get("/notas");

    expect(res.statusCode).toEqual(200);
    expect(res.body.notas).toHaveLength(2);
  });

  test("Lista vazia quando não há notas", async () => {
    const res = await request(app).get("/notas");

    expect(res.statusCode).toEqual(200);
    expect(res.body.notas).toHaveLength(0);
  });
});

describe("GET /notas/:username/media", () => {
  beforeEach(async () => {
    await request(app).post("/notas").send({
      userId: 3,
      primeiraNota: 8.0,
      segundaNota: 6.0,
    });

    await request(app).post("/notas").send({
      userId: 3,
      primeiraNota: 9.0,
      segundaNota: 7.0,
    });
  });

  test("Usuário encontrado com médias calculadas", async () => {
    const res = await request(app).get("/notas/anaximenes/media");

    expect(res.statusCode).toEqual(200);
    expect(res.body.medias).toHaveLength(2);
    expect(res.body.medias[0].nome).toEqual("1º nota");
    expect(res.body.medias[0].media).toEqual(7.0);
    expect(res.body.medias[1].nome).toEqual("2º nota");
    expect(res.body.medias[1].media).toEqual(8.0);
  });

  test("Usuário não encontrado", async () => {
    const res = await request(app).get("/notas/kaio/media");

    expect(res.statusCode).toEqual(404);
    expect(res.body.message).toEqual("Username not found!");
  });

  test("Usuário sem notas cadastradas", async () => {
    const res = await request(app).get("/notas/carlinhos/media");

    expect(res.statusCode).toEqual(200);
    expect(res.body.medias).toHaveLength(0);
  });
});
