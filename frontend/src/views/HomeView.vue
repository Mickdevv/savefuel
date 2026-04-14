<script setup lang="ts">
import { useCurrentPageStore } from '@/stores/current-page';
import Button from 'primevue/button'

const currentPageStore = useCurrentPageStore()
currentPageStore.setCurrentPage('Home')
</script>



<template>
  <p>Do you watch fuel costs eat into your margins every month?</p>
  <p>Save Fuel Europe is the exclusive Fuel Ox distributor in France. We help transport companies, ski resorts,
    delivery
    and logistics companies cut fuel bills with a simple, effective treatment which is safe for engines.</p>
  <p>Test today, save tomorrow</p>
  <div class="button-container">

    <Button class="learn-more-button" label="Learn more" severity="warning" />
  </div>
</template>

<style scoped>
p {
  font-size: 2rem;
  margin-top: 4rem;
  font-weight: bold;
}

.learn-more-button {
  background-color: gold;
  border: none !important;
}

.learn-more-button:hover {
  background-color: yellow !important;
  transition: 0.2s;
}


.button-container {
  margin-top: 10rem;
  display: flex;
  justify-content: center;
}
</style>
