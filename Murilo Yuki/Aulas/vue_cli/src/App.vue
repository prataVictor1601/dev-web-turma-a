<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>Meu App Vue</h1>
    <p class="subtitulo">Meu subtitulo</p>
    <br />
    <home-component />
    <hr />
    <br />
    <usuario-component v-show="isUsuarioVisivel" />
    <hr />
    <br />
    <estilo-component/>
    <hr />
    <br />
    <imagem-component 
    @visibilidade-img ="escutarVisibilidadeImg"
    urlImg="https://super.abril.com.br/wp-content/uploads/2018/05/humanidade-causa-cc3a2ncer-em-animais-selvagens.png?crop=1&resize=1212,909" larg="500"/>
  </div>
</template>

<script>
import HomeComponent from './components/HomeComponent.vue';
import UsuarioComponent from './components/UsuarioComponent.vue';
import EstiloComponent from './components/EstiloComponent.vue';
import ImagemComponent from './components/ImagemComponent.vue';

export default {
  name: 'App',
  components: {
    HomeComponent,
    UsuarioComponent,
    EstiloComponent,
    ImagemComponent,
  },

  data() {
    return {
      isUsuarioVisivel: false,
    };
  },
  methods:{
    escutarVisibilidadeImg(isImgComponentVisivel){
      this.isUsuarioVisivel = !isImgComponentVisivel;
    }
  },
created(){
  console.log("created")
  },
mounted(){
  console.log("mouted")
  },
updated(){
  console.log("updated")
  },
errorCaptured(){
  console.log("erro")
  },
};


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  color: darkblue;
  text-align: center;
}
.subtitulo{
  color: chocolate;
  font-family: "Gill Sans";
  text-align: center;
}
</style>
