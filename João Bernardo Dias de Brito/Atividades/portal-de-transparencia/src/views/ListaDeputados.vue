<template>
  <div class="view-lista">
    <header class="main-header">
      <h1>Portal de Transparência Parlamentar</h1>
      <p>Acompanhe os gastos e dados oficiais direto da Câmara dos Deputados</p>
    </header>

    <div class="search-container">
      <input 
        v-model="nomeBusca" 
        @keyup.enter="novaBusca"
        type="text" 
        placeholder="Pesquise um deputado pelo nome..." 
      />
      <button @click="novaBusca">Buscar</button>
    </div>

    <div v-if="carregando && pagina === 1" class="loading">Buscando parlamentares...</div>
    
    <div v-else>
      <div class="grid-deputados">
        <DeputadoCard 
          v-for="deputado in deputados" 
          :key="deputado.id" 
          :deputado="deputado"
          @click="$emit('selecionar-deputado', deputado)"
        />
      </div>

      <div class="pagination-container" v-if="deputados.length >= 12">
        <button class="btn-carregar" :disabled="carregando" @click="carregarMais">
          {{ carregando ? 'Carregando...' : 'Carregar Mais Deputados' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import DeputadoCard from '../components/DeputadoCard.vue';

const deputados = ref([]);
const nomeBusca = ref('');
const carregando = ref(false);
const pagina = ref(1);

const buscarDeputados = async (acumular = false) => {
  carregando.value = true;
  try {
    const url = `https://dadosabertos.camara.leg.br/api/v2/deputados?nome=${nomeBusca.value}&pagina=${pagina.value}&itens=12&ordem=ASC&ordenarPor=nome`;
    const resposta = await fetch(url);
    const dados = await resposta.json();
    
    if (acumular) {
      deputados.value = [...deputados.value, ...dados.dados];
    } else {
      deputados.value = dados.dados;
    }
  } catch (erro) {
    console.error("Erro ao buscar deputados:", erro);
  } finally {
    carregando.value = false;
  }
};

const novaBusca = () => {
  pagina.value = 1;
  buscarDeputados(false);
};

const carregarMais = () => {
  pagina.value++;
  buscarDeputados(true);
};

onMounted(() => buscarDeputados(false));
</script>

<style scoped>
.main-header {
  text-align: center;
  margin-bottom: 2rem;
}

.main-header h1 {
  color: var(--30-brand-blue);
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.main-header p {
  color: #64748b;
}

.search-container {
  display: flex;
  gap: 0.5rem;
  max-width: 600px;
  margin: 0 auto 2.5rem auto;
}

.search-container input {
  flex: 1;
  padding: 0.75rem 1rem;
  border: 1px solid var(--30-border);
  border-radius: 6px;
  font-size: 1rem;
  outline: none;
}

.search-container input:focus {
  border-color: var(--10-accent-vibrant);
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
}

.search-container button {
  background-color: var(--30-brand-blue);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
}

.search-container button:hover {
  background-color: var(--10-accent-vibrant);
}

.grid-deputados {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
}

.pagination-container {
  display: flex;
  justify-content: center;
  margin-top: 2.5rem;
}

.btn-carregar {
  background-color: transparent;
  border: 2px solid var(--10-accent-vibrant);
  color: var(--10-accent-vibrant);
  padding: 0.75rem 2rem;
  border-radius: 6px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-carregar:hover:not(:disabled) {
  background-color: var(--10-accent-vibrant);
  color: white;
}

.btn-carregar:disabled {
  border-color: var(--30-border);
  color: #64748b;
  cursor: not-allowed;
}

.loading {
  text-align: center;
  color: var(--30-brand-blue);
  font-weight: 600;
}
</style>