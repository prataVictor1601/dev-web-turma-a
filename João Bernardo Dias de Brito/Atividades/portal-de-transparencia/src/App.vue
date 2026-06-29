<template>
  <div class="app-container">
    <ListaDeputados 
      v-if="!deputadoSelecionado" 
      @selecionar-deputado="definirDeputado" 
    />
    
    <DetalhesDeputado 
      v-else 
      :deputado="deputadoSelecionado" 
      @voltar="deputadoSelecionado = null" 
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ListaDeputados from './views/ListaDeputados.vue';
import DetalhesDeputado from './views/DetalhesDeputado.vue';

const diputadoSelecionado = ref(null);
const deputadoSelecionado = diputadoSelecionado;

const definirDeputado = (deputado) => {
  deputadoSelecionado.value = deputado;
};
</script>

<style>
:root {
  --60-bg-main: #f8fafc;     
  --60-bg-card: #ffffff;      
  
  --30-text-dark: #0f172a;    
  --30-brand-blue: #1e3a8a;   
  --30-border: #cbd5e1;       
  
  --10-accent-vibrant: #2563eb; 
  --10-expense-value: #1d4ed8;  
  
  --font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: var(--60-bg-main);
  font-family: var(--font-family);
  color: var(--30-text-dark);
  -webkit-font-smoothing: antialiased;
}

.app-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
}
</style>