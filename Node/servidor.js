const http = require("http");
const winston = require("winston");
const {combine, timestamp, json} = winston.format;

const logger = winston.createLogger({
  level : 'info',
  format : combine(timestamp(), json()),
  transports : [new winston.transports.File({
    filename : "servidor.log",
  })
  ],
})

let msg;
let x = 1;
const server = http.createServer((req, res) => {

  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.setHeader("Content-Language", "pt-BR")

  if (req.url === "/"){
    res.statusCode = 200;
    msg = "Bem-vindo ao meu servidor\n";
    res.end(msg);
  } else if (req.url === "/contato"){
    res.statusCode = 200;
    msg = "Página de Contato\n";
    res.end(msg);
  } else if (req.url === "/servicos") {
    res.statusCode = 200;
    msg = "Nossos serviços estão em construção\n";
    res.end(msg);
  } else {
    res.statusCode = 404;
    msg = "Página não encontrada\n";
    res.end(msg);
  }


  logger.info(`${x}º log feito com sucesso`, {
    th : x,
    texto : msg,
    code : res.statusCode
  });

  x++;
})

server.listen((3000), () => {
  console.log("O servidor está rodando na porta 3000 \n(http://localhost:3000/)");
})
