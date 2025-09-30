const {getUsuario, getPedidos} = require("./pedido");

let user = { id: 5, nome: 'João' };
let pedidos = [ 'Salgadinho', 'Maça', 'Banana', 'Iogurte' ];


test("Deveria dar um output abaixo:\n 5JoãoSalgadinhoMaçaBananaIogurte", async () => {
  const dados = await getUsuario();
  const comidas = await getPedidos(getUsuario());
  
  let lista = '',user = '';

  for (let dado in dados){
    user += dados[dado];
  }

  for(let comida of comidas){
    lista += comida;
  }

  const msg = user + lista;
  expect(msg).toBe("5JoãoSalgadinhoMaçaBananaIogurte");
});

