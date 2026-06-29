<template>
  <div class="card-gasto">
    <div class="card-content">
      <div class="header-gasto">
        <h4 class="tipo-despesa">{{ despesa.tipoDespesa }}</h4>
        <span class="data-badge">{{ formatarData(despesa.dataDocumento) }}</span>
      </div>
      <div class="body-gasto">
        <h2 class="valor">{{ formatarMoeda(despesa.valorDocumento) }}</h2>
      </div>
    </div>
    <a 
      :href="despesa.urlDocumento || '#'" 
      target="_blank" 
      rel="noopener noreferrer"
      class="btn-documento" 
      :class="{ disabled: !despesa.urlDocumento }"
    >
      Ver Documento Original
    </a>
  </div>
</template>

<script setup>
/* global defineProps */
defineProps({
  despesa: {
    type: Object,
    required: true
  }
});

const formatarData = (dataString) => {
  if (!dataString) return 'N/A';
  const data = new Date(dataString);
  return data.toLocaleDateString('pt-BR', { timeZone: 'UTC' });
};

const formatarMoeda = (valor) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(valor);
};
</script>

<style scoped>
.card-gasto {
  background: var(--60-bg-card);
  border: 2px solid var(--30-brand-blue);
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  height: 100%;
}

.card-content {
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.header-gasto {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.5rem;
}

.tipo-despesa {
  font-size: 0.85rem;
  text-transform: uppercase;
  color: var(--30-text-dark);
  font-weight: 700;
  line-height: 1.3;
}

.data-badge {
  background-color: #f1f5f9;
  color: #64748b;
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  white-space: nowrap;
}

.body-gasto .valor {
  font-size: 1.6rem;
  color: var(--10-expense-value);
  font-weight: 800;
}

.btn-documento {
  background-color: var(--30-brand-blue);
  color: #ffffff;
  text-decoration: none;
  text-align: center;
  padding: 0.75rem;
  font-size: 0.9rem;
  font-weight: 600;
  transition: background-color 0.2s;
  border-top: 1px solid var(--30-brand-blue);
}

.btn-documento:hover:not(.disabled) {
  background-color: var(--10-accent-vibrant);
}

.btn-documento.disabled {
  background-color: #cbd5e1;
  border-color: #cbd5e1;
  cursor: not-allowed;
}
</style>