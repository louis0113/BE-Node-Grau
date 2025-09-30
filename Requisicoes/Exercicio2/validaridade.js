let prompt = require("prompt-sync")();

function validarIdade(idade){
    return new Promise((resolve, reject) => {
      if(idade >= 18){
          resolve("Acesso permitido");
      } else {
        reject("Acesso negado");
        }
    })
}

async function verificar(idade){
      try{
        const verificacao = await validarIdade(idade);
        console.log("Status(OK):", verificacao);
      } catch (erro){
        console.error("Status(Erro):", erro);
      }
}


function digitarInformacoes(){
  const nome = prompt("Digite seu nome: ");
  const idade = parseInt(prompt("Digite sua idade: "));
  const verificacao = verificar(idade);
  console.log(`${nome}, sua idade é ${idade}.`);
}

digitarInformacoes();

module.exports = validarIdade

