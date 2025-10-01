const buscarComTimeout = require('./timeout');

describe('Testes para buscarComTimeout', () => {

  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test('deve rejeitar com "Tempo esgotado" após 1 segundo', async () => {
    console.log('EXECUTANDO: Teste de rejeição por timeout');
    
    // Chama a função, que agora retorna uma promessa
    const promessa = buscarComTimeout();

    // Avança os timers em 1 segundo e aguarda a conclusão das microtasks
    await jest.advanceTimersByTimeAsync(1000);

    // A sintaxe `.rejects.toThrow()` é a forma correta de testar promessas que devem ser rejeitadas.
    // Esperamos que a promessa seja rejeitada com a mensagem exata "Tempo esgotado".
    await expect(promessa).rejects.toBe('Tempo esgotado');

    console.log('FINALIZADO: Teste de rejeição por timeout');
  });

  test('não deve resolver, pois o timeout (rejeição) é mais rápido', async () => {
    console.log('EXECUTANDO: Teste para garantir que a busca não resolve');
    
    const promessa = buscarComTimeout();

    // Avançamos o tempo para além do timeout, mas antes da resolução da busca.
    await jest.advanceTimersByTimeAsync(1500);

    // Verificamos novamente que a promessa de fato rejeita.
    await expect(promessa).rejects.toBe('Tempo esgotado');

    // Podemos também verificar que ela não resolve com a outra mensagem.
    // `expect.not.resolves` não é um matcher padrão, então confirmamos a rejeição.

    console.log('FINALIZADO: Teste para garantir que a busca não resolve');
  });
});
