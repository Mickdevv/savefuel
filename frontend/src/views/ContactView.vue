<script setup lang="ts">
import { useCurrentPageStore } from '@/stores/current-page';
import Button from 'primevue/button'

const currentPageStore = useCurrentPageStore()
currentPageStore.setCurrentPage('contact')
</script>
<template>
  <div class="outer-page-container">
    <div class="page-container">
      <div class="left-container">testleft</div>
      <div class="right-container">testright</div>
    </div>
  </div>
</template>
<style scoped>
.page-container {
  border-style: solid;
  display: block;
}

.right-container .left-container {
  width: 100%;
}

@media (min-width: 1080px) {
  .page-container {
    display: flex;
  }

  .right-container {
    max-width: 25%;
  }

  .left-container {
    max-width: 75%;
  }
}
</style>
