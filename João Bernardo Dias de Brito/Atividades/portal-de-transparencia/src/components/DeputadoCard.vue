<template>
  <div class="card-deputado">
    <img :src="deputado.urlFoto" :alt="deputado.nome" class="avatar" />
    <div class="card-info">
      <h3>{{ deputado.nome }}</h3>
      <span class="badge">{{ deputado.siglaPartido }} - {{ deputado.siglaUf }}</span>
      <p class="email">{{ deputado.email || 'E-mail não disponível' }}</p>
    </div>
  </div>
</template>

<script setup>
/* global defineProps */
defineProps({
  deputado: {
    type: Object,
    required: true
  }
});
</script>

<style scoped>
.card-deputado {
  background: var(--60-bg-card);
  border: 1px solid var(--30-border);
  border-radius: 8px;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
}

.card-deputado:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 15px -3px rgba(30, 58, 138, 0.08);
  border-color: var(--10-accent-vibrant);
}

.avatar {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--60-bg-main);
}

.card-info h3 {
  font-size: 1.1rem;
  color: var(--30-brand-blue);
  margin-bottom: 0.25rem;
}

.badge {
  display: inline-block;
  background-color: #e2e8f0;
  color: var(--30-brand-blue);
  padding: 0.2rem 0.6rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.email {
  font-size: 0.85rem;
  color: #64748b;
  word-break: break-all;
}
</style>