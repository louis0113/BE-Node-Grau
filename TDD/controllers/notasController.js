const Notas = require("../models/notasModel");
const User = require("../models/userModel");

const setNotas = async (req, res) => {
  const { userId, primeiraNota, segundaNota } = req.body;

  const verifyNota = (nota) => {
    return nota > 10.0 || nota < 0.0;
  };

  if (verifyNota(primeiraNota) || verifyNota(segundaNota)) {
    return res
      .status(400)
      .json({ message: "Notas maior que 10 ou menor que 0" });
  }

  const verifyId = await User.findOne({
    where: { id: userId },
  });

  if (!verifyId) {
    return res.status(400).json({ message: "id don't exists" });
  }

  const notas = await Notas.create({
    userId: userId,
    primeiraNota: primeiraNota,
    segundaNota: segundaNota,
  });

  res.status(201).json({ message: "Notas adicionadas com sucesso", notas });
};

const getNotas = async (req, res) => {
  const user = await User.findOne({
    where: { username: req.session.username },
  });

  const notas = await Notas.findAll({
    where: { userId: user.id },
  });

  res.status(200).json({ notas: notas });
};

const getMediaByUsername = async (req, res) => {
  const username = req.params.username;

  const findMediaByUsername = await User.findOne({
    where: { username: username },
    include: Notas,
  });

  if (!findMediaByUsername) {
    return res.status(404).json("Username not found!");
  }

  const notas = findMediaByUsername.Notas;

  const medias = [];

  for (let x = 0; x < notas.length; x++) {
    medias.push({ nome: `${x + 1}º nota`, media: notas[x].media });
  }

  res.status(200).json({ medias: medias });
};

module.exports = { setNotas, getNotas, getMediaByUsername };
