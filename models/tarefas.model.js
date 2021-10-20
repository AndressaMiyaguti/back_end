const mongoose = require('mongoose');

//Estrutura dos dados
const tarefasModel = new mongoose.Schema({
  titulo:{type: 'string', require:true},
  descricao:{type: 'string', require:true},
  prioridade:{type: 'string', require:true},
  status:{type: 'string', require:true},
  prazo:{type: 'string', default:Date},
  dataCriacao:{type:Date, default:Date.now}
})

const Tarefas = mongoose.model("tarefas", tarefasModel);

module.exports = Tarefas;