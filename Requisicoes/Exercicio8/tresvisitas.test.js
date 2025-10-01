// Importa as funções que serão testadas
const { primeiraVisita, segundaVisita, terceiraVisita, verificarResultados } = require('./tresvisitas');

describe('Testes para as funções de visita', () => {

  beforeEach(() => {
    jest.useFakeTimers();
    // Espiona console.log para poder verificar suas chamadas nos testes
    jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    // Restaura o console.log e os timers para não afetar outros testes
    jest.restoreAllMocks();
    jest.useRealTimers();
  });

  test('primeiraVisita deve resolver com a mensagem correta', async () => {
    console.log('EXECUTANDO: Teste para primeiraVisita');
    const promessa = primeiraVisita();
    // Avança o tempo e permite que micro-tarefas (como a resolução da promessa) sejam executadas
    await jest.advanceTimersByTimeAsync(1000);
    await expect(promessa).resolves.toBe('Primeira visita foi aceita');
    console.log('FINALIZADO: Teste para primeiraVisita');
  });

  test('segundaVisita deve rejeitar com a mensagem correta', async () => {
    console.log('EXECUTANDO: Teste para segundaVisita');
    const promessa = segundaVisita();
    // Avança o tempo e permite que micro-tarefas (como a rejeição da promessa) sejam executadas
    await jest.advanceTimersByTimeAsync(2000);
    await expect(promessa).rejects.toBe('Segunda visita foi rejeitada');
    console.log('FINALIZADO: Teste para segundaVisita');
  });

  test('terceiraVisita deve resolver com a mensagem correta', async () => {
    console.log('EXECUTANDO: Teste para terceiraVisita');
    const promessa = terceiraVisita();
    await jest.advanceTimersByTimeAsync(500);
    await expect(promessa).resolves.toBe('Terceira visita foi aceita');
    console.log('FINALIZADO: Teste para terceiraVisita');
  });

  test('verificarResultados deve retornar os resultados de todas as promessas', async () => {
    console.log('EXECUTANDO: Teste para verificarResultados');
    
    const p1 = primeiraVisita();
    const p2 = segundaVisita();
    const p3 = terceiraVisita();

    // Inicia a verificação e armazena a promessa de resultado
    const promessaResultados = verificarResultados(p1, p2, p3);

    // Avança os timers para garantir que todas as promessas dentro de verificarResultados sejam concluídas
    await jest.runAllTimersAsync();

    // Aguarda a resolução da promessa principal e verifica o valor
    await expect(promessaResultados).resolves.toEqual([
      { status: 'fulfilled', value: 'Primeira visita foi aceita' },
      { status: 'rejected', reason: 'Segunda visita foi rejeitada' },
      { status: 'fulfilled', value: 'Terceira visita foi aceita' },
    ]);

    // Verifica também o efeito colateral (log no console)
    expect(console.log).toHaveBeenCalledWith([
      { status: 'fulfilled', value: 'Primeira visita foi aceita' },
      { status: 'rejected', reason: 'Segunda visita foi rejeitada' },
      { status: 'fulfilled', value: 'Terceira visita foi aceita' },
    ]);
    console.log('FINALIZADO: Teste para verificarResultados');
  });
});
