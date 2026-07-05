<script setup lang="ts">
import { useCurrentPageStore } from '@/stores/current-page';
import Button from 'primevue/button'

const currentPageStore = useCurrentPageStore()
currentPageStore.setCurrentPage('Four guarantees')
</script>
<template>
  <div class="page-container">
    <div class="left-container">testleft</div>
    <div class="right-container">testright</div>
  </div>
</template>
<style scoped>
.page-container {
  border-style: solid;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
}

.right-container .left-container {
  width: 100%;
}
</style>
