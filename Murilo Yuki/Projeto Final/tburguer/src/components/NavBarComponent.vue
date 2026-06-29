<template>
    <div>
        <nav id="nav">
            <router-link to="/" id="logo-url">
                <img src="/img/logo_tburguer.png" id="logo">
            </router-link>
    <router-link to="/">Home</router-link>|
    <router-link to="/Menu">Menu</router-link>|
    <router-link to="/Config">Config</router-link>|
    <router-link to="/Pedido">Pedidos</router-link>|
        </nav> 
    </div>
</template>
<script>
    export default {
        name:'NavBarComponent',
    };
</script>
<style scoped>
    #logo {
        width: 60px;
        height: 60px;
    }

    #logo:hover{
        width:70px;
        height: 70px;
        rotate: 360deg;
        transition: 0.2s;
    }
    
    #logo-url {
        margin: auto;
        margin-left: 0;
    }
    #nav {
        background-color: black;
        border-bottom: orange 4px solid;
        padding: 10px 5px ;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    #nav a {
        color: orange;
        text-decoration: none;
        margin-left: 20px;
        font-size: 18px;
    }
    #nav a:hover{
        color: rgba(241, 110, 2, 0.61);
        font-size: 22px;
        transition: 0.2s;
    }
</style>