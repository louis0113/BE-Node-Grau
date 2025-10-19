const petModel = require("../model/Pet");
const { validationResult } = require("express-validator");

let status, url;

const urls = [
  "http.dog",
  "http.cat",
  "httpducks.com",
  "http.fish",
  "httpcats.com",
  "httpgoats.com",
  "http.garden",
  "http.pizza",
];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function animalRedirect(animal, status) {
  switch (animal) {
    case "dog":
      return `https://${urls[0]}/${status}.jpg`;
      break;
    case "cat":
      return `https://${urls[1]}/${status}.jpg`;
      break;
    case "duck":
      return `https://${urls[2]}/${status}.jpg`;
      break;
    case "goat":
      return `https://${urls[5]}/${status}.jpg`;
      break;
    case "fish":
      return `https://${urls[3]}/${status}.jpg`;
      break;
    default:
      return `https://${urls[7]}/${status}.jpg`;
      break;
  }
}

async function getPets(req, res) {
  const length = urls.length - 1;
  const num = getRandomInt(0, length);
  url = urls[num];
  try {
    const petsListados = await petModel.findAll();
    status = 200;
    res.status(status).redirect(`https://${url}/${status}.jpg`);
  } catch (err) {
    status = 404;
    res.status(status).redirect(`https://${url}/${status}.jpg`);
  }
}

async function setPets(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, type, age, adopted } = req.body;
  try {
    const petRepetido = await petModel.findOne({ where: { namePet: name } });

    if (petRepetido) {
      status = 400;
      url = animalRedirect(type, status);
      return res.status(status).redirect(url);
    }

    const petInserido = await petModel.create({
      namePet: name,
      typePet: type,
      age: age,
      adopted: adopted,
    });
    statls = 201;
    url = animalRedirect(type, status);
    res.status(status).redirect(url);
  } catch (err) {
    status = 400;
    url = animalRedirect(type, status);
    res.status(status).redirect(url);
  }
}

async function deletePetsById(req, res) {
  const petId = req.params.id;

  const animal = await petModel.findByPk(petId);
  const type = animal.typePet;
  try {
    const dadosDeletado = await petModel.destroy({
      where: {
        id: petId,
      },
    });
    status = 200;
    url = animalRedirect(type, status);
    res.status(status).redirect(url);
  } catch (err) {
    status = 400;
    url = animalRedirect(type, status);
    res.status(status).redirect(url);
  }
}

module.exports = { getPets, setPets, deletePetsById };
