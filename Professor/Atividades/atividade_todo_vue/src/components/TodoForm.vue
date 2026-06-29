<template>
  <div class="todo-form">
    <input 
      type="text" 
      v-model="novaTarefa" 
      placeholder="O que precisa ser feito?"
      @keyup.enter="enviarTarefa"
    >
    
    <button @click="enviarTarefa">Adicionar</button>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';

const novaTarefa = ref('');

const emit = defineEmits(['adicionar-tarefa']);

const enviarTarefa = () => {
  if (novaTarefa.value.trim() !== '') {
    emit('adicionar-tarefa', novaTarefa.value);
    
    novaTarefa.value = '';
  }
};
</script>

<style scoped>
.todo-form {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

input {
  flex: 1;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 10px 20px;
  background-color: #42b983; 
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}

button:hover {
  background-color: #33a06f;
}
</style>