<template>
  <div>
    <h1>Tarefas</h1>
    <lista-component />
  </div>
</template>

<script>
import ListaComponent from './components/ListaComponent.vue';

export default {
  name: 'App',
  components: {
    ListaComponent,
  },
}
</script>

<style>
body {
  font-family: "Gill Sans";
  background: #cdcdcd;
  padding: 16px;
  margin: 0;
}
h1 {
  color: rgb(2, 93, 96);
  text-align: center;
}
</style>