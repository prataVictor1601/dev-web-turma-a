const meuAppVue = {
  data() {
    return {
      nome: "João Bernardo Dias de Brito",
      idade: 23,
      inputText: "",
    };
  },
};

Vue.createApp(meuAppVue).mount("#app");
