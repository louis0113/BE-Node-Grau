const express = require("express");
const winston = require("winston");
const router = express.Router();
const {combine, timestamp, json} = winston.format;

let books = [];
let msg;
let x = 1, y = 1;

const logger = winston.createLogger({
  level : "info",
  format : combine(timestamp(), json()),
  transports : [new winston.transports.File({
    filename : "app.log",
  })]
});

router.get("/exibirLivros", (req, res) => {

  msg = res.json(books)
  msg;

  logger.info(`${x}º log de exibição de livros feito com sucessso`, {
    book : `${msg.req.body.book}`,
    author : `${msg.req.body.author}`,
    code : `${msg.statusCode}`,
  });
  x++;
});

router.post("/criarLivros", (req,res) => {
  const newBooks = req.body;
  books.push(newBooks);
  msg = res.status(201).json({ message: "Livro criado com sucesso!", books: newBooks });
  msg;


  logger.info(`${y}º log de criação de livro feito com sucesso`, {
    book : `${msg.req.body.book}`,
    author : `${msg.req.body.author}`,
    code : `${msg.statusCode}`
  });
  y++;
})

module.exports = router;
