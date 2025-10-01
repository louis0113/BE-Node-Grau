let prompt = require("prompt-sync")();
let x = 1;
function contarAte(num){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(x++); 
    }, 1000)
  })

}

async function contar(n){
  try{
    for (let y = 1; y <= num; y++){
      const contagem = await contarAte(n);
      console.log(contagem);
    }
  }catch (err){
    console.error(err);
  }
}

function digitarNumero(){
  num = parseInt(prompt("Digite o número: "));
  contar(num);
}

digitarNumero();

module.exports = contarAte;
