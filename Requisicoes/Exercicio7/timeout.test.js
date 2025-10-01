const buscarComTimeout = require('./timeout');

describe('Testes do script de timeout', () => {
  let consoleLogSpy;

  // Antes de cada teste, preparamos o ambiente
  beforeEach(() => {
    // Reinicia os módulos para isolar os testes
    jest.resetModules();
    // Espiona a função console.log para verificar suas chamadas
    consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    // Usa timers falsos do Jest para controlar o tempo
    jest.useFakeTimers();
  });

  // Depois de cada teste, limpamos o ambiente
  afterEach(() => {
    // Restaura a função console.log original
    consoleLogSpy.mockRestore();
    // Volta a usar os timers reais
    jest.useRealTimers();
  });

  // Teste para verificar se a mensagem de tempo esgotado é exibida
  test('deve exibir "Tempo esgotado" após 1 segundo', () => {
    // Executa o script que agenda o timeout
    require('./timeout');

    // No início, nada deve ser logado
    expect(consoleLogSpy).not.toHaveBeenCalled();

    // Avança o tempo em 1000 milissegundos (1 segundo)
    jest.advanceTimersByTime(1000);

    // Usamos uma Promise resolvida para garantir que o microtask queue do Jest seja processado
    return Promise.resolve().then(() => {
      // Agora, a mensagem de tempo esgotado deve ter sido logada
      expect(consoleLogSpy).toHaveBeenCalledWith('Tempo esgotado');
      // E deve ter sido chamada exatamente uma vez
      expect(consoleLogSpy).toHaveBeenCalledTimes(1);
    });
  });

  // Teste para garantir que outras mensagens não sejam exibidas
  test('não deve exibir "Buscando dados..."', () => {
    // Executa o script
    require('./timeout');

    // Avança o tempo em 2 segundos para garantir que todos os timers tenham rodado
    jest.advanceTimersByTime(2000);

    return Promise.resolve().then(() => {
      // A mensagem "Tempo esgotado" deve estar presente
      expect(consoleLogSpy).toHaveBeenCalledWith('Tempo esgotado');
      // Mas a mensagem "Buscando dados..." não deve ter sido logada
      expect(consoleLogSpy).not.toHaveBeenCalledWith('Buscando dados...');
      // O log deve ter sido chamado apenas uma vez
      expect(consoleLogSpy).toHaveBeenCalledTimes(1);
    });
  });
});
