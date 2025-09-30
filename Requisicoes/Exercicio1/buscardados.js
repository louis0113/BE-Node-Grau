function buscarDadosDoServidor() {
  const sucess = {
    status : 200,
    dados : "OK"
  }

  return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(sucess)
      }, 2000);
  })
}

async function dadosDoServidor() {
  try {
    const resultado = await buscarDadosDoServidor();
    console.log(`Sucesso!\nStatus: ${resultado.status}\nDados: ${resultado.dados}`);
  } catch (erro){
    console.error(`Erro ${erro}`);
  }
}

dadosDoServidor();

module.exports = {buscarDadosDoServidor};
