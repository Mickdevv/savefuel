<script setup lang="ts">
defineProps<{
  cardName: string
}>()
</script>


<template>
  <div class="card">
    <h2>{{ $t(`components.links-cards.${cardName}.title`) }}</h2>

    <p>
      {{ $t(`components.links-cards.${cardName}.description`) }}
    </p>

    <a v-if="$t(`components.links-cards.${cardName}.href`) != ''" :href="$t(`components.links-cards.${cardName}.href`)">
      {{ $t(`components.links-cards.link-label`) }}
      <span>→</span>
    </a>
  </div>
</template>

<style scoped>
.card {
  flex: 1 1 300px;

  background: #fff;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  padding: 28px 24px;

  display: flex;
  flex-direction: column;
}

a,
h1,
p {
  text-align: left;
}

h2 {
  text-align: left;
  margin-bottom: 10px;
  color: #336600;
}

p {
  font-size: 16px;
  color: #3a3a3a;
  margin-bottom: 20px;
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
