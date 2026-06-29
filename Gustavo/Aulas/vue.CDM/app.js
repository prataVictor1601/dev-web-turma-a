const meuAppVue = {
    data() {
        return{
          nome: "Gustavo Guimaraes",
          idade: 19,
          inputText: "",
        };
         
    },
};

Vue.createApp(meuAppVue).mount("#app");