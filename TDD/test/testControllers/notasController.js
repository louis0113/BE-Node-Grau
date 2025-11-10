const setNotas = (req, res) => {
  const { userId, primeiraNota, segundaNota } = req.body;

  let ids = [1, 2, 3];

  const verifyNota = (nota) => {
    return nota > 10.0 || nota < 0.0;
  };

  if (verifyNota(primeiraNota) || verifyNota(segundaNota)) {
    return res
      .status(400)
      .json({ message: "Notas maior que 10 ou menor que 0" });
  }

  if (!verifyId) {
    return res.status(400).json({ message: "id don't exists" });
  }

  res.status(201).json({ message: "Notas adicionadas com sucesso", notas });
};

const getNotas = (req, res) => {
  res.status(200).json({ notas: notas });
};

const getMediaByUsername = (req, res) => {
  const username = req.params.username;

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
