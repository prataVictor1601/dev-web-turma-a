<template>
    <div>
        <p>Nome: {{ nome }}</p>
        <p>Email: {{ email }}</p>
        <hr />
        <h1 v-show="isBrasaCampeao">Brasil Campeão</h1>
        <img :src="urlimg" width="300" height="200">
    </div>
</template>

<script>

    export default{
        name: "UsuarioComponent",
        data() {
            return {
                nome:"Morilo Suki",
                email:"muriloyukisukiyama21@sempreceub.com",
                isBrasaCampeao: false,
                urlimg:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSnlqmoclGTRWaLnMylj4--6OGzfJV0aVZtw&s"
            }
        },
        mounted(){
            setTimeout(() => {
                this.isBrasaCampeao = true;
                this.urlimg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSnlqmoclGTRWaLnMylj4--6OGzfJV0aVZtw&s" 
            }, 4 * 1000);

        setTimeout(() => {
            this.isBrasaCampeao = false;
            this.urlimg = "https://conteudo.imguol.com.br/c/esporte/b7/2022/12/10/vinicius-jr-lamenta-eliminacao-do-brasil-contra-a-croacia-na-copa-do-mundo-1670692571320_v2_450x600.jpg"
        }, 8 * 1000);
        }
    }
</script>

<style>


</style>