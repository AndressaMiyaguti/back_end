const mongoose = require('mongoose');

const TarefasService = require('./../services/tarefas.service');

const tarefasService = new TarefasService();

class TarefasController {

  getTarefas = async (req, res) => {
    const tarefas = await tarefasService.findAll();
    res.send(tarefas);
  }

  getTarefasById = async (req, res) => {
    const id = req.params.id;

    if(!mongoose.Types.ObjectId.isValid(id)) {
      res.status(404).send( alert('Id não existente na Lista'));
      return;      
    }

    const tarefa = await tarefasService.findById(id); 

    if(!tarefa) {
      res.status(404).send( alert('Tarefa não encontradado'));
      return;
    }
    
    res.status(200).send(tarefa);
  }

  createTarefas = async (req, res) => {
    const tarefa = req.body;
    const tarefaCriada = await tarefasService.createTarefas(tarefa)   
      res.status(200).send({ message:`Tarefa ${tarefaCriada.titulo} criada com sucesso` })    
  }

  upDateTarefa = async (req, res) => {
    const id = req.params.id;
    const tarefa = req.body;
    await tarefasService.upDateTarefa(id, tarefa)
    .then( () =>{
      res.status(200).send({message:"Tarefa editada com sucesso"})
    })
    .catch( (err) => res.status(500).send({message: "Erro no servidor."}))
  }

  deleteTarefa = async (req, res) => {
    const id = req.params.id;
    await tarefasService.deleteTarefa(id)
    .then( () => res.status(200).send({message:'Tarefa excluída com sucesso'}))
    .catch( (err) => res.status(500).send({messagem:"Erro ao deletar. Tarefa não foi localizada"})) 
  }
}

module.exports = TarefasController;
