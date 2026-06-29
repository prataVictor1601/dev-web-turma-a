<template>
  <div class="view-detalhes">
    <button @click="$emit('voltar')" class="btn-voltar">
      ← Voltar para a lista
    </button>

    <div class="perfil-header" v-if="deputado">
      <img :src="deputado.urlFoto" :alt="deputado.nome" class="perfil-avatar" />
      <div class="perfil-info">
        <h2>{{ deputado.nome }}</h2>
        <span class="partido-badge">{{ deputado.siglaPartido }} - {{ deputado.siglaUf }}</span>
        <p class="perfil-email">✉ {{ deputado.email || 'E-mail não informado' }}</p>
      </div>
    </div>

    <div class="secao-titulo">
      <h3>Últimas Despesas Declaradas</h3>
      <div class="linha-decorativa"></div>
    </div>

    <div v-if="carregandoGastos && paginaGastos === 1" class="loading">Buscando despesas...</div>
    
    <div v-else>
      <div class="grid-gastos">
        <DespesaCard 
          v-for="(gasto, index) in despesas" 
          :key="index" 
          :despesa="gasto" 
        />
      </div>

      <div class="pagination-container" v-if="despesas.length >= 15">
        <button class="btn-carregar" :disabled="carregandoGastos" @click="carregarMaisGastos">
          {{ carregandoGastos ? 'Buscando...' : 'Carregar Próximas Despesas' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
/* global defineProps */
import { ref, onMounted } from 'vue';
import DespesaCard from '../components/DespesaCard.vue';

const props = defineProps({
  deputado: {
    type: Object,
    required: true
  }
});

const despesas = ref([]);
const carregandoGastos = ref(false);
const paginaGastos = ref(1);

const carregarDespesas = async (acumular = false) => {
  if (!props.deputado?.id) return;
  carregandoGastos.value = true;
  try {
    const url = `https://dadosabertos.camara.leg.br/api/v2/deputados/${props.deputado.id}/despesas?pagina=${paginaGastos.value}&itens=15&ordem=DESC&ordenarPor=ano`;
    const resposta = await fetch(url);
    const dados = await resposta.json();
    
    if (acumular) {
      despesas.value = [...despesas.value, ...dados.dados];
    } else {
      despesas.value = dados.dados;
    }
  } catch (erro) {
    console.error("Erro ao carregar despesas:", erro);
  } finally {
    carregandoGastos.value = false;
  }
};

const carregarMaisGastos = () => {
  paginaGastos.value++;
  carregarDespesas(true);
};

onMounted(() => carregarDespesas(false));
</script>

<style scoped>
.btn-voltar {
  background: none;
  border: none;
  color: var(--10-accent-vibrant);
  font-weight: 600;
  cursor: pointer;
  font-size: 1rem;
  margin-bottom: 1.5rem;
}

.btn-voltar:hover {
  text-decoration: underline;
}

.perfil-header {
  background: var(--60-bg-card);
  border: 1px solid var(--30-border);
  border-radius: 12px;
  padding: 2rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02);
  margin-bottom: 2.5rem;
}

.perfil-avatar {
  width: 110px;
  height: 110px;
  border-radius: 8px;
  object-fit: cover;
  border: 1px solid var(--30-border);
}

.perfil-info h2 {
  font-size: 1.8rem;
  color: var(--30-brand-blue);
  margin-bottom: 0.5rem;
}

.partido-badge {
  display: inline-block;
  background-color: #e0f2fe;
  color: var(--30-brand-blue);
  font-weight: 700;
  padding: 0.35rem 0.8rem;
  border-radius: 6px;
  font-size: 0.9rem;
  margin-bottom: 0.75rem;
}

.perfil-email {
  color: #475569;
  font-size: 0.95rem;
}

.secao-titulo {
  margin-bottom: 1.5rem;
}

.secao-titulo h3 {
  font-size: 1.4rem;
  color: var(--30-text-dark);
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.linha-decorativa {
  height: 3px;
  width: 180px;
  background-color: var(--30-brand-blue);
  border-radius: 2px;
}

.grid-gastos {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 1.5rem;
}

.pagination-container {
  display: flex;
  justify-content: center;
  margin-top: 2.5rem;
  margin-bottom: 2rem;
}

.btn-carregar {
  background-color: transparent;
  border: 2px solid var(--30-brand-blue);
  color: var(--30-brand-blue);
  padding: 0.75rem 2rem;
  border-radius: 6px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-carregar:hover:not(:disabled) {
  background-color: var(--30-brand-blue);
  color: white;
}

.btn-carregar:disabled {
  border-color: var(--30-border);
  color: #64748b;
  cursor: not-allowed;
}

.loading {
  text-align: center;
  margin-top: 3rem;
  font-weight: 600;
  color: var(--30-brand-blue);
}

@media(max-width: 600px) {
  .perfil-header {
    flex-direction: column;
    text-align: center;
    padding: 1.5rem;
  }
}
</style>