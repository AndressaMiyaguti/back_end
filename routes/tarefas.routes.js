const express = require('express');
const TarefasController = require('./../controllers/tarefas.controller');
const router = express.Router();
const tarefasController = new TarefasController();

router.get('/', tarefasController.getTarefas); //Lista de tarefas

router.get('/:id', tarefasController.getTarefasById); // Tarefa por id

router.post('/', tarefasController.createTarefas); // Criar tarefa

router.put('/:id', tarefasController.upDateTarefa); // Atualização de tarefa.

router.delete('/:id', tarefasController.deleteTarefa); // Exclusão.

module.exports = router;