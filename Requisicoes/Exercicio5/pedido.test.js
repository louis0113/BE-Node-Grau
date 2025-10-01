const { buscarPedidosDoUsuario } = require("./pedido");

describe('Testes da lógica de pedidos de usuário', () => {

  // Aumenta o timeout padrão do Jest para este conjunto de testes
  // para evitar falhas em testes assíncronos mais longos.
  jest.setTimeout(10000);

  test('deve buscar o usuário e seus pedidos corretamente', async () => {
    // Executa a função e espera pela resolução da Promise
    const resultado = await buscarPedidosDoUsuario();

    // Valida a parte do usuário no resultado
    expect(resultado.usuario).toEqual({
      id: 5,
      nome: "João"
    });

    // Valida a parte dos pedidos no resultado
    expect(resultado.pedidos).toEqual(["Salgadinho", "Maça", "Banana", "Iogurte"]);
  });

});
