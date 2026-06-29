<template>
    <div>
        <footer id="footer">
            <p>Bem Vindo: {{ nome }} Olá mundo do <b>VUE com CLI</b></p>
            <p>Testando todos os componentes dentro da Vue</p>
            <p>Criando mais um componente: {{ idade }} essa é minha idade</p>
            <p>E esse é meu curso {{ curso }}</p>
        </footer>
    </div>
</template>

<script>
    export default{
        name: "HomeComponent",
        data() {
            return {
                nome:"Murilo",
                idade:18,
                curso:"Engenharia de software"
            };
        }
    }
</script>