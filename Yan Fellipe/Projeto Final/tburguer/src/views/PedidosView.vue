<template>
    <div>
        <h1>Pedido</h1>
        <lista-pedido-component-vue/>
    </div>
</template>
<script>
import ListaPedidoComponentVue from '@/components/ListaPedidoComponent.vue';

    export default {
        name: 'PedidoView',
         components: {
            ListaPedidoComponentVue,
        },  
    }
</script>
<style scoped></style>