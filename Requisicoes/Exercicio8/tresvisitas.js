
function primeiraVisita() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Primeira visita foi aceita");
    }, 1000);
  });
}

function segundaVisita() {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject("Segunda visita foi rejeitada");
    }, 2000);
  });
}

function terceiraVisita() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Terceira visita foi aceita");
    }, 500);
  });
}

/**
 * Recebe três promessas e usa Promise.allSettled para aguardar a conclusão de todas.
 * @returns {Promise<Array<PromiseSettledResult>>} Uma promessa que resolve com um array de objetos de resultado.
 */
async function verificarResultados(pv, sv, tv) {
  const results = await Promise.allSettled([pv, sv, tv]);
  console.log(results);
  return results; // Retorna o array de resultados
}

// Bloco para execução direta via `node tresvisitas.js`
if (require.main === module) {
  verificarResultados(primeiraVisita(), segundaVisita(), terceiraVisita());
}

module.exports = { primeiraVisita, segundaVisita, terceiraVisita, verificarResultados };
