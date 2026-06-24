<script setup lang="ts">
defineProps<{
  cardName: string
}>()
</script>


<template>
  <div class="card">
    <h3>{{ $t(`components.advantages-cards.${cardName}.title`) }}</h3>

    <p>
      {{ $t(`components.advantages-cards.${cardName}.description`) }}
    </p>
  </div>
</template>

<style scoped>
.card {
  flex: 1 1 300px;

  background: #fff;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  padding: 8px 24px;

  display: flex;
  flex-direction: column;
}

a,
h1,
p {
  color: var(--grey)
}

h3 {
  text-align: left;
  margin-bottom: 10px;
  color: #336600;
}

p {
  font-size: 16px;
  color: #3a3a3a;
  flex: 1;
}

a {
  display: inline-flex;
  align-items: center;
  gap: 4px;

  font-size: 16px;
  font-weight: 600;
  color: #dda411;
  text-decoration: none;
}
</style>
