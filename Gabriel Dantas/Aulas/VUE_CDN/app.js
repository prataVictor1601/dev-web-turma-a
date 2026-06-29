const meuAppVue ={
    data(){
        return{
            nome: 'Gabriel Dantas',
            idade: '19',
            inputText: "",
        };
    },
};


Vue.createApp(meuAppVue).mount("#app");