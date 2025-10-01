const info = {
  id: 5,
  nome: "João"
};

function getUsuario() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(info);
    }, 1000);
  });
}

function getPedidos(idUsuario) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["Salgadinho", "Maça", "Banana", "Iogurte"]);
    }, 1500);
  });
}

// Função refatorada para ser testável e reutilizável
async function buscarPedidosDoUsuario() {
  const usuario = await getUsuario();
  const pedidos = await getPedidos(usuario.id);
  // A função agora retorna os dados em vez de logar no console
  return {
    usuario,
    pedidos
  };
}

// Esta parte só é executada quando o script é rodado diretamente
if (require.main === module) {
  async function mostrarPedidos() {
    try {
      const { usuario, pedidos } = await buscarPedidosDoUsuario();
      console.log(`O usuário de ID ${usuario.id} chamado ${usuario.nome}`);
      console.log("Tem os pedidos abaixo:");
      for (const pedido of pedidos) {
        console.log(`Pedido : ${pedido}`);
      }
    } catch (err) {
      console.log("Ocorreu um erro:", err);
    }
  }
  mostrarPedidos();
}

module.exports = {
  getUsuario,
  getPedidos,
  buscarPedidosDoUsuario
};
