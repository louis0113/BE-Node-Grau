// A função `require` é usada para importar o módulo `contarAte`.
const contarAte = require('./count');

// `describe` agrupa testes relacionados. Neste caso, para a função `contarAte`.
describe('Testes para a função contarAte', () => {

  // `beforeEach` é executado antes de cada teste (`test`) dentro deste bloco `describe`.
  beforeEach(() => {
    // Isso reseta todos os módulos que foram importados. É CRUCIAL aqui.
    // Como `count.js` tem uma variável global (`let x`), precisamos garantir que
    // cada teste comece com uma lousa limpa, como se estivéssemos rodando o arquivo pela primeira vez.
    jest.resetModules();

    // Habilita o uso de timers "falsos", permitindo-nos controlar `setTimeout` manualmente.
    jest.useFakeTimers();
  });

  // `afterEach` é executado depois de cada teste.
  afterEach(() => {
    // Restaura os timers reais para não interferir com outros arquivos de teste.
    jest.useRealTimers();
  });

  test('deve resolver com 1 na primeira chamada', async () => {
    console.log('EXECUTANDO: Teste de primeira chamada');
    // Importamos a função AQUI DENTRO do teste, depois do `resetModules`.
    const contarAte = require('./count'); 
    
    const promessa = contarAte();

    // Avançamos o tempo em 1 segundo e aguardamos a conclusão da promessa.
    await jest.advanceTimersByTimeAsync(1000);

    // Verificamos se a promessa resolveu para o valor 1.
    await expect(promessa).resolves.toBe(1);
    console.log('FINALIZADO: Teste de primeira chamada');
  });

  test('deve resolver com 2 na segunda chamada consecutiva', async () => {
    console.log('EXECUTANDO: Teste de segunda chamada');
    // Novamente, importamos uma cópia "limpa" do módulo.
    const contarAte = require('./count');

    // --- Primeira chamada ---
    const primeiraPromessa = contarAte();
    await jest.advanceTimersByTimeAsync(1000);
    await primeiraPromessa; // Apenas garantimos que ela termine.

    // --- Segunda chamada ---
    const segundaPromessa = contarAte();
    await jest.advanceTimersByTimeAsync(1000);

    // Verificamos se a segunda promessa resolveu para o valor 2.
    await expect(segundaPromessa).resolves.toBe(2);
    console.log('FINALIZADO: Teste de segunda chamada');
  });
});
