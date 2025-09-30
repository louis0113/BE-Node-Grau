const {buscarDadosDoServidor} = require("./buscardados");

sucess = {
  status : 200,
  dados : "OK"
}

function out(obj){
  console.log(`Status: ${obj.status}\nDados: ${obj.dados}`);
}

test("O Status deve ser 200 e o info deve ser OK ", () => {
  return buscarDadosDoServidor().then( data => {
    expect(out(data)).toBe(out(sucess));
  })
});
