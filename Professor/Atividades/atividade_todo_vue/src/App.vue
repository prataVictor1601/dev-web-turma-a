<template>
  <div class="app-container">
    <h1>Lista de Tarefas</h1>
    
    <TodoForm @adicionar-tarefa="adicionarTarefa" />

    <hr>

    <ul v-if="tarefas.length > 0">
      <TodoItem 
        v-for="tarefa in tarefas" 
        :key="tarefa.id" 
        :tarefa="tarefa"
        @remover-tarefa="removerTarefa"
        @alternar-status="alternarStatus"
      />
    </ul>
    <p v-else class="sem-tarefas">Você não possui tarefas</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';


import TodoForm from './components/TodoForm.vue';
import TodoItem from './components/TodoItem.vue';


const tarefas = ref([]); 

let proximoId = 1;

const adicionarTarefa = (textoDaNovaTarefa) => {
  tarefas.value.push({
    id: proximoId++,
    texto: textoDaNovaTarefa,
    concluida: false
  });
};


const removerTarefa = (idDaTarefa) => {
  tarefas.value = tarefas.value.filter(tarefa => tarefa.id !== idDaTarefa);
};


const alternarStatus = (idDaTarefa) => {
  const tarefaEncontrada = tarefas.value.find(t => t.id === idDaTarefa);
  if (tarefaEncontrada) {
    tarefaEncontrada.concluida = !tarefaEncontrada.concluida;
  }
};
</script>
<style scoped>
.app-container {
  max-width: 500px;
  margin: 40px auto;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding: 30px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  border-radius: 10px;
  background-color: #ffffff;
}
h1 {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 25px;
}
hr {
  border: 0;
  height: 1px;
  background: #e0e0e0;
  margin: 20px 0;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.sem-tarefas {
  text-align: center;
  color: #888;
  font-style: italic;
  margin-top: 20px;
}
</style>