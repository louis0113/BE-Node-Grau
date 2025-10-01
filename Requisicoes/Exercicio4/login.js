let prompt = require("prompt-sync")();

function fazerLogin(usuario, senha){

  return new Promise((resolve,reject) => {
    if(usuario === "admin" && senha === "1234"){
      resolve("Login bem-sucedido");
    } else {
      reject("Credenciais inválidas");
    }
  })
}

async function entrar(user, pass){
  try{
    let resultado = await fazerLogin(user, pass);
    console.log(resultado);
  } catch (err) {
    console.error("Erro: ", err);
  }
}

function telaDeLogin(){
  let usuario = prompt("Digite seu login: ");
  let senha = prompt("Digite sua senha: ");
  entrar(usuario, senha);
}

telaDeLogin();

module.exports = fazerLogin
