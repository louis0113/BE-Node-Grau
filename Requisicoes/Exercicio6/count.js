const prompt = require("prompt-sync")();

let x = 1;

function contarAte() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x++);
    }, 1000);
  });
}

async function contar(num) {
  try {
    for (let y = 1; y <= num; y++) {
      const contagem = await contarAte();
      console.log(contagem);
    }
  } catch (err) {
    console.error(err);
  }
}

function digitarNumero() {
  const num = parseInt(prompt("Digite o número: "));
  contar(num);
}

if (require.main === module) {
  digitarNumero();
}

module.exports = {
  contarAte,
  contar,
};
