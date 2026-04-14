<script setup lang="ts">
import { useCurrentPageStore } from '@/stores/current-page';
import Button from 'primevue/button'

const currentPageStore = useCurrentPageStore()
currentPageStore.setCurrentPage('Four guarantees')
</script>
<template>
  <p></p>
</template>
<style scoped></style>
