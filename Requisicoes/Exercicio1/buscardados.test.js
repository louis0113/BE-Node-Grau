const { buscarDadosDoServidor } = require("./buscardados");

// O teste foi reescrito para ser mais robusto e direto.
// Em vez de comparar a saída de console.log, o que é uma má prática,
// agora verificamos diretamente as propriedades do objeto retornado pela Promise.

test("deve retornar um objeto com status 200 e dados 'OK'", () => {
  // A asserção 'resolves' do Jest aguarda a Promise ser resolvida
  // e então permite verificar o valor resultante.
  return expect(buscarDadosDoServidor()).resolves.toEqual({
    status: 200,
    dados: "OK"
  });
});
