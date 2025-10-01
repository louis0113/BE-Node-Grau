
function primeiraVisita() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Primeira visita foi aceita");
    }, 1000)
  })
}

function segundaVisita() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Segunda visita foi rejeitada");
    }, 2000)
  })
}

function terceiraVisita() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Terceira visita foi aceita");
    }, 500)
  })
}

function verificarResultados(pv,sv,tv){
  Promise.allSettled([pv, sv, tv])
    .then((results) => {
      console.log(results);
    })
}

verificarResultados(primeiraVisita(), segundaVisita(), terceiraVisita());

module.exports = {primeiraVisita, segundaVisita, terceiraVisita}
