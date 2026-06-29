const meuAppVue = {
    data() {
        return {
            nome: "Ian Pimenta",
            idade: 38,
            inputText: "",
        };
    },
};

Vue.createApp(meuAppVue).mount("#app");

