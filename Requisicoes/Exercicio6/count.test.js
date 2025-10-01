// Define a variável que receberá a função a ser testada
let contarAte;

// Ativa os timers falsos do Jest para controlar o setTimeout
jest.useFakeTimers();

// Bloco que executa ANTES de CADA teste
beforeEach(() => {
  // Limpa o cache de módulos do Jest. Isso garante que o `count.js` 
  // seja recarregado a cada teste, resetando a variável global `x` para 1.
  jest.resetModules();
  
  // Re-importa a função `contarAte` após resetar o módulo.
  // Agora temos uma versão "limpa" da função para cada teste.
  contarAte = require("./count");
});

describe("Testando a função de contagem com estado compartilhado", () => {

  test("deve resolver a promessa com o valor 1 na primeira chamada", async () => {
    const promise = contarAte(); // Chama a função, que retorna uma promessa
    
    // Avança os timers para que o setTimeout dentro da promessa execute
    jest.runAllTimers();
    
    // Verifica se a promessa resolve com o valor esperado (1)
    await expect(promise).resolves.toBe(1);
  });

  test("deve resolver a promessa com o valor 1 novamente em um teste separado", async () => {
    // Graças ao beforeEach com jest.resetModules(), 'x' é 1 novamente.
    const promise = contarAte();
    
    jest.runAllTimers();
    
    await expect(promise).resolves.toBe(1);
  });

  test("deve incrementar o valor em chamadas sequenciais dentro do mesmo teste", async () => {
    // Primeira chamada no mesmo teste
    const promise1 = contarAte();
    jest.runAllTimers();
    await expect(promise1).resolves.toBe(1);

    // Segunda chamada no mesmo teste. Como o módulo não foi resetado AINDA,
    // 'x' foi incrementado e o próximo valor deve ser 2.
    const promise2 = contarAte();
    jest.runAllTimers();
    await expect(promise2).resolves.toBe(2);
  });
});
