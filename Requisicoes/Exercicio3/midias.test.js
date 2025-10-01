// Importa a função principal que queremos testar
const { baixarMidias } = require("./midias");

describe('Testes para o download concorrente de mídias', () => {
  let consoleLogSpy;

  // Antes de cada teste, preparamos o ambiente
  beforeEach(() => {
    // Habilita o uso de timers falsos para controlar o tempo manualmente
    jest.useFakeTimers();
    // Espiona `console.log` para verificar o que está sendo impresso
    consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  // Depois de cada teste, limpamos o ambiente
  afterEach(() => {
    // Restaura a função `console.log` original
    consoleLogSpy.mockRestore();
    // Restaura os timers reais
    jest.useRealTimers();
  });

  test('deve logar "Imagem baixada" após 2s e "Video baixado" após 3s', async () => {
    // Inicia a execução concorrente dos downloads
    baixarMidias();

    // Imediatamente após a chamada, nada deve ter sido logado
    expect(consoleLogSpy).not.toHaveBeenCalled();

    // 1. Avança o tempo em 2 segundos
    await jest.advanceTimersByTimeAsync(2000);

    // Após 2 segundos, a mensagem do download da imagem deve aparecer
    expect(consoleLogSpy).toHaveBeenCalledWith('Imagem baixada');
    // A mensagem do vídeo ainda não deve ter aparecido
    expect(consoleLogSpy).not.toHaveBeenCalledWith('Video baixado');
    // O console.log deve ter sido chamado exatamente uma vez até agora
    expect(consoleLogSpy).toHaveBeenCalledTimes(1);

    // 2. Avança o tempo em mais 1 segundo (totalizando 3s desde o início)
    await jest.advanceTimersByTimeAsync(1000);

    // Agora, a mensagem do download do vídeo também deve ter aparecido
    expect(consoleLogSpy).toHaveBeenCalledWith('Video baixado');
    // O console.log deve ter sido chamado um total de duas vezes
    expect(consoleLogSpy).toHaveBeenCalledTimes(2);
  });
});
