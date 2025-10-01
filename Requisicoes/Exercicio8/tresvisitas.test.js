const {
  primeiraVisita,
  segundaVisita,
  terceiraVisita,
  verificarResultados,
} = require("./tresvisitas");

describe("Testando o resultado de múltiplas promessas com Promise.allSettled", () => {
  // Ativa os timers falsos do Jest para controlar o tempo (setTimeout)
  beforeAll(() => {
    jest.useFakeTimers();
  });

  // Limpa os timers após os testes
  afterAll(() => {
    jest.useRealTimers();
  });

  test("deve retornar o status de cada promessa corretamente", async () => {
    // Inicia a execução das promessas. Elas ficam pendentes, aguardando os timers.
    const promisePendente = verificarResultados(
      primeiraVisita(),
      segundaVisita(),
      terceiraVisita()
    );

    // Avança todos os timers de uma vez (1000ms, 2000ms, 500ms)
    jest.runAllTimers();

    // Espera a resolução da função `verificarResultados` e verifica o array de resultados
    await expect(promisePendente).resolves.toEqual([
      {
        status: "fulfilled",
        value: "Primeira visita foi aceita",
      },
      {
        status: "rejected",
        reason: "Segunda visita foi rejeitada",
      },
      {
        status: "fulfilled",
        value: "Terceira visita foi aceita",
      },
    ]);
  });
});
