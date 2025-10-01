// Importa as funções que serão testadas
const { primeiraVisita, segundaVisita, terceiraVisita, verificarResultados } = require('./tresvisitas');

// Agrupa todos os testes relacionados às visitas em um bloco 'describe'
describe('Testes para as funções de visita', () => {

  // Antes de cada teste, habilita o uso de timers falsos do Jest
  // Isso nos permite controlar a passagem do tempo (ex: setTimeout) manualmente
  beforeEach(() => {
    jest.useFakeTimers();
  });

  // Depois de cada teste, restaura os timers reais para não afetar outros testes
  afterEach(() => {
    jest.useRealTimers();
  });

  // Testa a função primeiraVisita
  test('primeiraVisita deve resolver com a mensagem correta após 1 segundo', () => {
    const promessa = primeiraVisita();
    // Avança o tempo dos timers em 1000ms (1 segundo)
    jest.advanceTimersByTime(1000);
    // Esperamos que a promessa seja resolvida com o valor esperado
    return expect(promessa).resolves.toBe('Primeira visita foi aceita');
  });

  // Testa a função segundaVisita
  test('segundaVisita deve rejeitar com a mensagem correta após 2 segundos', () => {
    const promessa = segundaVisita();
    // Avança o tempo dos timers em 2000ms (2 segundos)
    jest.advanceTimersByTime(2000);
    // Esperamos que a promessa seja rejeitada com o motivo esperado
    return expect(promessa).rejects.toBe('Segunda visita foi rejeitada');
  });

  // Testa a função terceiraVisita
  test('terceiraVisita deve resolver com a mensagem correta após 0.5 segundos', () => {
    const promessa = terceiraVisita();
    // Avança o tempo dos timers em 500ms (0.5 segundos)
    jest.advanceTimersByTime(500);
    // Esperamos que a promessa seja resolvida com o valor esperado
    return expect(promessa).resolves.toBe('Terceira visita foi aceita');
  });

  // Testa a função verificarResultados, que usa Promise.allSettled
  test('verificarResultados deve registrar os resultados de todas as promessas', async () => {
    // A função verificarResultados tem como efeito colateral logar no console.
    // Para testar isso, "espionamos" o console.log para capturar o que foi enviado para ele.
    const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    // Iniciamos as três promessas
    const p1 = primeiraVisita();
    const p2 = segundaVisita();
    const p3 = terceiraVisita();

    // Chamamos a função que aguarda todas as promessas serem resolvidas ou rejeitadas
    const promessaVerificacao = verificarResultados(p1, p2, p3);

    // Executa todos os timers pendentes (1s, 2s, 0.5s) de uma só vez
    jest.runAllTimers();

    // Aguarda a conclusão da função verificarResultados
    await promessaVerificacao;

    // Verificamos se o console.log foi chamado com o resultado esperado do Promise.allSettled
    expect(consoleLogSpy).toHaveBeenCalledWith([
      { status: 'fulfilled', value: 'Primeira visita foi aceita' },
      { status: 'rejected', reason: 'Segunda visita foi rejeitada' },
      { status: 'fulfilled', value: 'Terceira visita foi aceita' },
    ]);

    // Restaura a função console.log original para não interferir em outros testes
    consoleLogSpy.mockRestore();
  });
});
