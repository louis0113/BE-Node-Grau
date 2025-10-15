const petModel = require("../model/Pet");
const {validationResult} = require("express-validator")

async function getPets(req, res){
  try{
    const petsListados = await petModel.findAll();
    petsListados;
    res.status(200).json({"message" : "Listando todos os pets!", "listaPets" : petsListados});
  }catch(err){
    res.status(404).json({"message" : "Não foi encontrado os pets!", "erro" : err});
  }
}

async function setPets(req, res){

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({errors: errors.array()});
  }

  const {name, type, age, adopted} = req.body;

  try {
    const petInserido = await petModel.create({
      namePet : name,
      typePet : type,
      age : age,
      adopted:  adopted
    }); 
    petInserido;
    res.status(201).json({"message" : "Os dados do pet foram adicionados com sucesso", "dadosPet" : petInserido})

  } catch (err){
    res.status(400).json({"message" : "Não foi possível adicionar os dados do Pet do banco de dados", "erro" : err})
  }
}

async function deletePetsById(req, res){
  const petId = req.params.id;

  try{
    const dadosDeletado = await petModel.destroy({
      where: {
        id : petId,
      },
    })
    dadosDeletado;
    res.status(200).json({message : `O pet de id ${petId} foi deletado do banco de dados!`, "status" : dadosDeletado});
  }catch(err){
    res.status(400).json({message : "O pet não foi achado para deletar do banco de dados!", "erro" : err})
  }
}

module.exports = {getPets, setPets, deletePetsById};
