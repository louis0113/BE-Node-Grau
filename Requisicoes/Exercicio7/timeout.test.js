const fazAlgo = require('./timeout');

describe('Testando a função com timeout', () => {

  // Ativa o uso de timers falsos para todo este bloco de testes
  jest.useFakeTimers();

  test('deve resolver a promessa após o timeout simulado', async () => {
    const promisePendente = fazAlgo();

    // Neste ponto, a promessa está pendente e o setTimeout está na fila.

    // Avança todos os timers pendentes (o setTimeout de 2000ms será executado imediatamente)
    jest.runAllTimers();

    // Agora que o timer "avançou", a promessa pode ser resolvida.
    // Usamos `await` e `resolves` para verificar se a promessa é resolvida com o valor esperado.
    await expect(promisePendente).resolves.toBe('Tudo certo');
  });
});
