function buscarComTimeout(){
  const busca = 
    new Promise((resolve) => {
      setTimeout(() => {
        resolve("Buscando dados...");
      }, 2000);
    });

  const tm = 
    new Promise((_, reject) => {
      setTimeout(() => {
        reject("Tempo esgotado");
      }, 1000);
    });

  // Retorna a Promise.race para que o chamador possa lidar com o resultado.
  return Promise.race([tm, busca]);
}

// Este bloco só será executado se o arquivo for rodado diretamente com `node timeout.js`
if (require.main === module) {
  buscarComTimeout()
    .then(value => console.log(value)) // Saída em caso de sucesso
    .catch(error => console.log(error)); // Saída em caso de erro (o que acontecerá aqui)
}

module.exports = buscarComTimeout;
