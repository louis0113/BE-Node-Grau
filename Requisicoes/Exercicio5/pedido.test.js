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
      console.log('EXECUTANDO: Teste para getUsuario');
      const promessaUsuario = getUsuario();
      // Avança o tempo e aguarda a conclusão das promessas pendentes
      await jest.advanceTimersByTimeAsync(1000);

      await expect(promessaUsuario).resolves.toEqual({
        id: 5,
        nome: 'João',
      });
      console.log('FINALIZADO: Teste para getUsuario');
    });
  });

  // --- Testes para a função getPedidos ---
  describe('getPedidos', () => {
    test('deve retornar uma lista de pedidos em formato de array de strings após 1.5s', async () => {
      console.log('EXECUTANDO: Teste para getPedidos (lista de strings)');
      const idUsuarioSimulado = 5;
      const promessaPedidos = getPedidos(idUsuarioSimulado);
      // Avança o tempo e aguarda a conclusão das promessas pendentes
      await jest.advanceTimersByTimeAsync(1500);

      const pedidos = await promessaPedidos;
      
      expect(Array.isArray(pedidos)).toBe(true);
      expect(pedidos).toEqual(['Salgadinho', 'Maça', 'Banana', 'Iogurte']);
      console.log('FINALIZADO: Teste para getPedidos (lista de strings)');
    });

    test('deve aceitar qualquer id de usuário, pois a lógica atual não o utiliza', async () => {
      console.log('EXECUTANDO: Teste para getPedidos (qualquer ID)');
      const promessa1 = getPedidos(1);
      const promessa2 = getPedidos('abc');
      
      // Executa todos os timers e aguarda a conclusão das promessas
      await jest.runAllTimersAsync();
        
      const resultado1 = await promessa1;
      const resultado2 = await promessa2;

      const resultadoEsperado = ['Salgadinho', 'Maça', 'Banana', 'Iogurte'];

      expect(resultado1).toEqual(resultadoEsperado);
      expect(resultado2).toEqual(resultadoEsperado);
      console.log('FINALIZADO: Teste para getPedidos (qualquer ID)');
    });
  });
});
