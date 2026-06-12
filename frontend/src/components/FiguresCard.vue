<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { tm, t } = useI18n()
defineProps<{
  cardName: string
}>()


</script>


<template>
  <div class="card">
    <h1 v-if="$t(`components.figures-cards.${cardName}.title`)">
      {{ $t(`components.figures-cards.${cardName}.title`) }}
    </h1>


    <p v-if="typeof ($tm(`components.figures-cards.${cardName}.description`)) == 'string'">
      {{ $tm(`components.figures-cards.${cardName}.description`) }}
    </p>

    <p v-if="typeof ($tm(`components.figures-cards.${cardName}.description`)) != 'string'"
      v-for="p in $tm(`components.figures-cards.${cardName}.description`)">
      {{ p }}
    </p>

  </div>
</template>

<style scoped>
.card {
  flex: 1 1 250px;
  background: #f4f4f4;
  border-radius: 8px;
  padding: 24px 20px;
  border-top: 3px solid #dda411;
  color: #dda411;
}


h1 {
  text-align: left;
  margin-bottom: 10px;
  color: var(--primary-color-gold)
}

p {
  text-align: left;
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
