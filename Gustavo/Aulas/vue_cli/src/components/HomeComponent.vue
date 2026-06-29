<template>
   <div>
    <footer id="foorter">
        <p>Bem vindo: {{ nome }} mundo do <b>VUE com CLI</b></p>
    </footer>
   </div>
</template>

<script>
   export default{
     name: "HomeComponent",
     data() {
        return{
           nome: "Gustavo",
        };
        
     }
   }
</script>