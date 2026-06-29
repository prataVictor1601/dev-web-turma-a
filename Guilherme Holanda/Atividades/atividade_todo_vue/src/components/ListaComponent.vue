<template>
  <div>
    <div class="input-area">
      <input
        type="text"
        placeholder="Digite sua Tarefa!"
        v-model="novaTarefa"
      />
      <button id="btnAdicionar" @click="adicionarTarefa">+</button>
    </div>

    <ul>
      <li
        v-for="(tarefa, index) in tarefas"
        :key="index"
        :class="{ concluida: tarefa.concluida }"
        @click="tarefa.concluida = !tarefa.concluida"
      >
        {{ tarefa.texto }}
        <button class="fechar" @click.stop="removerTarefa(index)">x</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ListaComponent',
  data() {
    return {
      novaTarefa: "",
      tarefas: [],
    };
  },
  methods: {
    adicionarTarefa() {
      const texto = this.novaTarefa.trim();
      if (texto === "") return;
      this.tarefas.push({
        texto: texto,
        concluida: false,
      });
      this.novaTarefa = "";
    },
    removerTarefa(index) {
      this.tarefas.splice(index, 1);
    },
  },
}
</script>

<style scoped>
.input-area {
  text-align: center;
  margin-bottom: 20px;
}
input {
  padding: 8px;
  width: 160px;
  border-radius: 8px;
  border: 1px solid #999;
}
#btnAdicionar {
  padding: 8px 12px;
  margin-left: 5px;
  color: white;
  background-color: brown;
  border: #16c416 0px solid;
  border-radius: 8px;
  cursor: pointer;
}
#btnAdicionar:hover {
  color: rgb(184, 183, 183);
  background-color: rgb(99, 21, 21);
  transition: 0.5s;
}
ul {
  padding: 0px;
  list-style: none;
}
li {
  background: #fff;
  margin: 16px 16px;
  padding: 10px;
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}
.fechar {
  background-color: darkred;
  border-radius: 100px;
  color: white;
  border: none;
  cursor: pointer;
  width: 24px;
  height: 24px;
}
li.concluida {
  text-decoration: line-through;
  color: gray;
}
</style>