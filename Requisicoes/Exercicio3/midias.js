// Função auxiliar que simula o download de uma mídia e resolve após um tempo.
function baixarMidia(tempo, midia) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const status = (midia === "Imagem") ? "baixada" : "baixado";
      resolve(`${midia} ${status}`);
    }, tempo);
  });
}

// Função assíncrona para baixar a imagem e logar o resultado.
async function baixarImagem() {
  try {
    const resultado = await baixarMidia(2000, "Imagem"); // Imagem leva 2s
    console.log(resultado);
  } catch (err) {
    console.log(err);
  }
}

// Função assíncrona para baixar o vídeo e logar o resultado.
async function baixarVideo() {
  try {
    const resultado = await baixarMidia(3000, "Video"); // Vídeo leva 3s
    console.log(resultado);
  } catch (err) {
    console.log(err);
  }
}

/**
 * Inicia o download concorrente de imagem e vídeo.
 * As funções são chamadas sem `await`, então elas rodam em paralelo.
 */
function baixarMidias() {
  baixarImagem();
  baixarVideo();
}

// Executa a função se o script for chamado diretamente pelo Node.
if (require.main === module) {
  baixarMidias();
}

// Exportamos as funções para que possam ser testadas individualmente.
module.exports = { baixarMidia, baixarImagem, baixarVideo, baixarMidias };
