<script>
export default {
  // data() guarda o estado (as variáveis)
  data() {
    return {
      novaTarefa: '',
      tarefas: [
        { id: 1, texto: 'Estudar Vue 3', concluida: false },
        { id: 2, texto: 'Fazer o dever', concluida: false }
      ]
    }
  },
  // methods guarda as funções
  methods: {
    adicionarTarefa() {
      // Evita adicionar tarefa vazia
      if (this.novaTarefa.trim() === '') return;
      
      this.tarefas.push({
        id: Date.now(),
        texto: this.novaTarefa,
        concluida: false
      });
      
      this.novaTarefa = ''; // Limpa o campo
    },
    removerTarefa(idParaRemover) {
      // Filtra a lista removendo o ID clicado
      this.tarefas = this.tarefas.filter(tarefa => tarefa.id !== idParaRemover);
    }
  }
}
</script>

<template>
  <div class="main-container">
    <h1>Minhas Tarefas</h1>

    <div class="input-area">
      <input 
        type="text" 
        v-model="novaTarefa" 
        @keyup.enter="adicionarTarefa"
        placeholder="Digite sua tarefa!"
      >
      <button @click="adicionarTarefa" id="btnAdicionar">+</button>
    </div>

    <ul id="ListaTarefa">
      <li v-for="tarefa in tarefas" :key="tarefa.id">
        <div class="item-content">
          <input type="checkbox" v-model="tarefa.concluida">
          <span :class="{ 'concluida': tarefa.concluida }">
            {{ tarefa.texto }}
          </span>
        </div>
        
        <button class="btn-excluir" @click="removerTarefa(tarefa.id)">x</button>
      </li>
    </ul>
  </div>
</template>


<style>
/* 1. O segredo da centralização absoluta está aqui */
body {
  font-family: "Gill Sans", sans-serif;
  background-color: lightcyan;
  margin: 0;
  display: flex;
  justify-content: center; /* Centraliza na horizontal */
  align-items: center;     /* Centraliza na vertical */
  min-height: 100vh;       /* Garante que o corpo tenha a altura total da tela */
}

/* 2. O container agora não precisa de margens manuais */
.main-container {
  width: 100%;
  max-width: 400px;
  padding: 20px;
}

h1 {
  color: black;
  text-align: center;
}

.input-area {
  display: flex;
  gap: 10px; /* Dá um espacinho entre o input e o botão */
  margin-bottom: 20px;
}

input[type="text"] {
  padding: 10px;
  flex-grow: 1;
  border-radius: 8px;
  border: 1px solid #ccc;
}

#btnAdicionar {
  padding: 8px 20px;
  color: azure;
  background-color: black;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
}

#btnAdicionar:hover {
  color: blue;
  background-color: red;
  transition: 0.5s;
}

ul {
  padding: 0;
  list-style: none;
}

li {
  background-color: #fff;
  margin: 10px 0;
  padding: 12px 15px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05); /* Um sombreado leve para destacar */
}

.item-content {
  display: flex;
  align-items: center;
  gap: 12px;
}

.concluida {
  text-decoration: line-through;
  color: gray;
}

.btn-excluir {
  background: none;
  border: none;
  color: red;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.1rem;
}
</style>