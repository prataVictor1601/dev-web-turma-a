<script setup>
import { ref, onMounted } from 'vue';

const token = 'bf68e3523c3b7fa4d5e67ffe52ea1009'; 
const paises = ref([]);
const paisSelecionado = ref('');
const jogadores = ref([]);
const carregando = ref(false);

const carregarPaises = async () => {
  try {
    const response = await fetch('https://v3.football.api-sports.io/teams/countries', {
      method: 'GET',
      headers: { 'x-apisports-key': token }
    });
    const dados = await response.json();
    paises.value = dados.response; 
  } catch (erro) {
    console.error('Falha ao obter lista de países:', erro);
  }
};

onMounted(() => {
  carregarPaises(); 
});

const carregarFigurinhas = async () => {
  if (!paisSelecionado.value) return;
  carregando.value = true;
  jogadores.value = []; 

  console.log('1. Buscando o ID para o país:', paisSelecionado.value);

  try {
    
    const responseTime = await fetch(`https://v3.football.api-sports.io/teams?name=${paisSelecionado.value}`, {
      method: 'GET',
      headers: { 'x-apisports-key': token }
    });
    const dadosTime = await responseTime.json();
    console.log('2. Resposta da API (Time):', dadosTime);

    
    if (!dadosTime.response || dadosTime.response.length === 0) {
      alert(`A API não encontrou a seleção de: ${paisSelecionado.value}`);
      return;
    }

    const teamId = dadosTime.response[0].team.id; 
    console.log('3. ID numérico encontrado:', teamId);

    
    const responseElenco = await fetch(`https://v3.football.api-sports.io/players/squads?team=${teamId}`, {
      method: 'GET',
      headers: { 'x-apisports-key': token }
    });
    const dadosElenco = await responseElenco.json();
    console.log('4. Resposta da API (Elenco):', dadosElenco);

    
    if (!dadosElenco.response || dadosElenco.response.length === 0) {
      alert(`A API não tem os jogadores cadastrados para o time ID ${teamId}`);
      return;
    }
    
    
    jogadores.value = dadosElenco.response[0].players; 
    console.log('5. Sucesso! Jogadores prontos para a tela:', jogadores.value);

  } catch (erro) {
    console.error('Erro ao processar fluxo assíncrono:', erro);
  } finally {
    carregando.value = false;
  }
};


</script>

<template>
  <div class="container">
    <h1>Álbum de Figurinhas</h1>
    
    
    <select v-model="paisSelecionado" @change="carregarFigurinhas" class="dropdown">
      <option disabled value="">Selecione uma seleção...</option>
      <option v-for="pais in paises" :key="pais.name" :value="pais.name">
        {{ pais.name }}
      </option>
    </select>

    
    <p v-if="carregando" class="loading">Buscando as figurinhas dos craques...</p>

    
    <div class="album-grid" v-if="jogadores.length > 0 && !carregando">
      
      
      <div class="figurinha" v-for="jogador in jogadores" :key="jogador.id">
        <img :src="jogador.photo" :alt="jogador.name" />
        <div class="dados-jogador">
          <h3>{{ jogador.name }}</h3>
          <p>{{ jogador.position }}</p>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>

.container {
  font-family: sans-serif;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.dropdown {
  padding: 10px;
  font-size: 16px;
  margin-bottom: 20px;
  width: 100%;
  max-width: 300px;
}

.loading {
  font-weight: bold;
  color: #555;
}


.album-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.figurinha {
  border: 2px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  background-color: #fafafa;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.figurinha img {
  width: 100%;
  border-radius: 4px;
}

.dados-jogador h3 {
  font-size: 16px;
  margin: 10px 0 5px 0;
  color: #333;
}

.dados-jogador p {
  font-size: 14px;
  margin: 0;
  color: #666;
  font-weight: bold;
}
</style>