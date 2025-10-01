const info = {
  id : 5,
  nome : "João"
}

function getUsuario(){
  return new Promise((resolve, reject) => {
      setTimeout(() => {
        return resolve(info)
      }, 1000)
  })
}

function getPedidos(idUsuario){
    return new Promise((resolve,reject) => {
      setTimeout(() => {
      return resolve(["Salgadinho", "Maça", "Banana", "Iogurte"]);
    }, 1500)
    })
}

async function mostrarPedidos(){
      try{
        const user = await getUsuario();
        console.log(`O usuário de ID ${user.id} chamado ${user.nome}`);
        console.log("Tem os pedidos abaixo:");
        const pedidos = await getPedidos(getUsuario());
        for (const pedido of pedidos){
            console.log(`Pedido : ${pedido}`);
        }
      } catch (err){
          console.log(err);
      }

}

mostrarPedidos();

module.exports = {getUsuario, getPedidos}
