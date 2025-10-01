const buscarComTimeout = require('./timeout');

describe('Testando a função com Promise.race e timeout', () => {

  // Ativa o uso de timers falsos para todo este bloco de testes
  jest.useFakeTimers();

  test('deve rejeitar a promessa porque o timeout de 1000ms é mais rápido', async () => {
    const promisePendente = buscarComTimeout();

    // Avança os timers. O timer de 1000ms (rejeição) será executado primeiro.
    jest.runAllTimers();

    // Esperamos que a promessa seja REJEITADA com a mensagem de tempo esgotado.
    // Usamos `await` e `rejects` para verificar o motivo da rejeição.
    await expect(promisePendente).rejects.toBe('Tempo esgotado');
  });
});
