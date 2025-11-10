const { notas, users } = require("../config/database");

const setNotas = (req, res) => {
  const { userId, primeiraNota, segundaNota } = req.body;

  const verifyNota = (nota) => {
    return nota > 10.0 || nota < 0.0;
  };

  if (verifyNota(primeiraNota) || verifyNota(segundaNota)) {
    return res
      .status(400)
      .json({ message: "Notas maior que 10 ou menor que 0" });
  }

  const userExists = users.some((user) => user.id === userId);

  if (!userExists) {
    return res.status(400).json({ message: "id don't exists" });
  }

  const media = (primeiraNota + segundaNota) / 2;

  notas.push({
    userId,
    primeiraNota,
    segundaNota,
    media,
  });

  res.status(201).json({ message: "Notas adicionadas com sucesso", notas });
};

const getNotas = (req, res) => {
  res.status(200).json({ notas: notas });
};

const getMediaByUsername = (req, res) => {
  const username = req.params.username;

  const user = users.find((u) => u.username === username);

  if (!user) {
    return res.status(404).json({ message: "Username not found!" });
  }

  const notasDoUsuario = notas.filter((nota) => nota.userId === user.id);

  const medias = notasDoUsuario.map((nota, index) => ({
    nome: `${index + 1}º nota`,
    media: nota.media,
  }));

  res.status(200).json({ medias: medias });
};

module.exports = { setNotas, getNotas, getMediaByUsername };
