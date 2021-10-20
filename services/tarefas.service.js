const Tarefas = require('../models/tarefas.model');

//Retorno das tarefas
class TarefasService{
  findAll = async () => {
    return await Tarefas.find();
  }

  findById = async (id) => {
    return await Tarefas.findById(id);
  }

  createTarefas = async (tarefas) => {
    return await Tarefas.create(tarefas);
  }

  upDateTarefa = async (id, tarefas) => {
    return await Tarefas.updateOne({ _id: id}, tarefas);
  }

  deleteTarefa = async (id) =>{
    return await Tarefas.deleteOne({ _id: id});
  }
}

module.exports = TarefasService;