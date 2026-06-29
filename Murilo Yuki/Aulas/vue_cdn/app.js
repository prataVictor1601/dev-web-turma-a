const meuAppVue = {
    data(){
        return{
            nome : "Murilo",
            idade: 18,
            inputText:"",
        };
    }

};

Vue.createApp(meuAppVue).mount("#app");
