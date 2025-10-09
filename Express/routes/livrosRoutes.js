const express = require("express");
const router = express.Router();

let books = [];

router.get("/exibirLivros", (req, res) => {
    res.json(books)
});

router.post("/criarLivros", (req,res) => {
    const newBooks = req.body;
    books.push(newBooks);
    res.status(201).json({ message: "Livro criado com sucesso!", books: newBooks });
})

module.exports = router;