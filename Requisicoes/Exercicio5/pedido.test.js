// Importa as funções que serão testadas
const { getUsuario, getPedidos } = require("./pedido");

// Agrupa todos os testes relacionados ao sistema de pedidos
describe('Testes para o sistema de pedidos', () => {

  // Habilita timers falsos do Jest para controlar setTimeout
  beforeEach(() => {
    jest.useFakeTimers();
  });

  // Restaura os timers reais após cada teste
  afterEach(() => {
    jest.useRealTimers();
  });

  // --- Testes para a função getUsuario ---
  describe('getUsuario', () => {
    test('deve retornar um objeto de usuário com id e nome após 1s', async () => {
      const promessaUsuario = getUsuario();
      jest.advanceTimersByTime(1000); // Avança o tempo em 1 segundo
      const usuario = await promessaUsuario;

      // Verifica se o usuário retornado tem o formato e os tipos corretos
      expect(usuario).toEqual({
        id: expect.any(Number),   // Espera que o id seja um número
        nome: expect.any(String), // Espera que o nome seja uma string
      });

      // Opcionalmente, pode-se verificar os valores exatos se eles forem estáveis
      expect(usuario).toEqual({ id: 5, nome: 'João' });
    });
  });

  // --- Testes para a função getPedidos ---
  describe('getPedidos', () => {
    test('deve retornar uma lista de pedidos em formato de array de strings após 1.5s', async () => {
      // Não precisamos de um usuário real para este teste, apenas um ID simulado
      const idUsuarioSimulado = 5;
      const promessaPedidos = getPedidos(idUsuarioSimulado);
      jest.advanceTimersByTime(1500); // Avança o tempo em 1.5 segundos
      const pedidos = await promessaPedidos;

      // Verifica se o resultado é um array
      expect(Array.isArray(pedidos)).toBe(true);

      // Verifica se o array não está vazio
      expect(pedidos.length).toBeGreaterThan(0);

      // Verifica se todos os itens no array são strings
      pedidos.forEach(pedido => {
        expect(typeof pedido).toBe('string');
      });

      // Verificação exata para garantir que o resultado corresponde ao esperado
      expect(pedidos).toEqual(['Salgadinho', 'Maça', 'Banana', 'Iogurte']);
    });

    test('deve aceitar qualquer id de usuário, pois a lógica atual não o utiliza', async () => {
        // Este teste garante que, mesmo com a lógica atual, a função não quebra
        // com diferentes IDs, já que o ID não é usado na implementação.
        const promessa1 = getPedidos(1);
        const promessa2 = getPedidos('abc');
        jest.runAllTimers(); // Executa todos os timers pendentes
        
        const resultado1 = await promessa1;
        const resultado2 = await promessa2;

        const resultadoEsperado = ['Salgadinho', 'Maça', 'Banana', 'Iogurte'];

        expect(resultado1).toEqual(resultadoEsperado);
        expect(resultado2).toEqual(resultadoEsperado);
    });
  });
});
