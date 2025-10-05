const http = require("http");
const server = http.createServer((req, res) => {

  res.setHeader("Content-Type", "text/plain; charset=utf-8");

  if (req.url === "/"){
    res.statusCode = 200;
    res.end("Bem-vindo ao meu servidor!\n");
  } else if (req.url === "/contato"){
    res.statusCode = 200;
    res.end("Página de Contato\n");
  } else if (req.url === "/servicos") {
    res.statusCode = 200;
    res.end("Nossos serviços estão em construção\n");
  } else {
    res.statusCode = 404;
    res.end("Página não encontrada\n");
  }
})

server.listen((3000), () => {
  console.log("O servidor está rodando na porta 3000 \n(http://localhost:3000/)");
})
