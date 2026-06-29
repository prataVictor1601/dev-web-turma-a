<template>
    <div>
        <img 
         v-show="isImgVisivel" :src="urlImg" :width="larg">
        <br />
        <button @click= "apareceEsconde(), trocaLabel()"> {{ nomeBotao }}</button>
    </div>
</template>

<script>
    export default{
        name:  "ImagemComponent",
        data() {
            return {
                isImgVisivel: false,
                nomeBotao: "Aparecer",
            }
        },
       methods: {
        apareceEsconde(){
            this.isImgVisivel = !this.isImgVisivel;
            this.$emit("visiblidadeImg", this.isImgVisivel);
        },
        trocaLabel() {
            if(this.isImgVisivel){
                this.nomeBotao = "Esconder";
            } else {
                this.nomeBotao = "Aparecer";
            }
        },
        emit: ["visibilidadeImg"],
       },
       props : {
        urlImg: String,
        larg: String
       },
    };

</script>


<style scoped>
    img {
        border: 10px solid rgb(107, 59, 1);
        border-radius: 130px;
    }

</style>>

