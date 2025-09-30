function baixarMidia(tempo, midia){
  let status;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (midia === "Imagem"){
        status = "baixada";
      } else {
        status = "baixado";
      }
      resolve(midia + " " + status);
    }, tempo);
  })
} 
let resultado;

async function baixarImagem() {
  try{
    resultado = await baixarMidia(2000, "Imagem")
    console.log(resultado);
  }catch (err){
    console.log(err);
  }
}

async function baixarVideo() {
  try{
    resultado = await baixarMidia(3000, "Video")
    console.log(resultado);
  }catch (err){
    console.log(err);
  }
}

function baixarMidias(){
  baixarImagem();
  baixarVideo();
}

baixarMidias();

module.exports =  baixarMidia
