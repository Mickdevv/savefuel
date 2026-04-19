<script setup lang="ts">
import MenuBar from './components/MenuBar.vue';
import Footer from './components/Footer.vue';



</script>


<template>
  <MenuBar />
  <div class="router-view">
    <RouterView />
  </div>
  <Footer />
</template>

<style scoped>
.router-view {
  padding: 2rem
}
</style>

<style>
.p-menubar {
  max-width: 1280px;
  border: none;
  display: flex;
  justify-content: space-between;
}


.p-menubar-end {
  margin-left: 0 !important;
  margin: 0;
}
</style>
