<template>
  <li class="todo-item">
    <input 
      type="checkbox" 
      :checked="tarefa.concluida"
      @change="$emit('alternar-status', tarefa.id)"
    >

    <span :class="{ concluida: tarefa.concluida }" class="texto-tarefa">
      {{ tarefa.texto }}
    </span>

    <button class="btn-remover" @click="$emit('remover-tarefa', tarefa.id)">
      Remover
    </button>
  </li>
</template>

<script setup>
/* eslint-disable */
import { defineProps, defineEmits } from 'vue';

defineProps({
  tarefa: {
    type: Object,
    required: true
  }
});

defineEmits(['remover-tarefa', 'alternar-status']);
</script>

<style scoped>
.todo-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  border-bottom: 1px solid #eee;
  background-color: #f9f9f9;
  border-radius: 4px;
  margin-bottom: 8px;
}

input[type="checkbox"] {
  width: 18px;
  height: 18px;
  cursor: pointer;
}

.texto-tarefa {
  flex: 1;
  font-size: 16px;
  transition: color 0.3s;
}

.concluida {
  text-decoration: line-through;
  color: #aaa;
}

.btn-remover {
  background-color: #d70505;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

.btn-remover:hover {
  background-color: #ee0404;
}
</style>