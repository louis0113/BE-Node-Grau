function buscarComTimeout(){
  const busca = 
    new Promise((resolve, reject) => {
      setTimeout(() =>{
        resolve("Buscando dados...");
      }, 2000)
    });

  const tm = 
    new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("Tempo esgotado")
      }, 1000)
    })

  Promise.race([tm, busca]). 
    then((value) => {
      console.log(`${value}`)
    })
    .catch((error) => {
      console.log(`${error}`)
    })

}

buscarComTimeout()

module.exports = buscarComTimeout;
