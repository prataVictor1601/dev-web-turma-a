<template>
    <div>
        <h1>Titulo do componente</h1>
        <p class = "subtitulo">Subtitulo do componente</p>
    </div>
</template>

<script>
    export default{
        name: "EstiloComponent"
    };
</script>
<style scoped>
    h1 {
        color: brown;
        text-align: center;
        font-family: 'Times New Roman', Times, serif;

    }
    .subtitulo{
        font-family: 'Times New Roman', Times, serif;
        text-align: left;
        color: rebeccapurple;
    }
</style>