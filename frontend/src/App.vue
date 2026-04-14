<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import MenuBar from './components/MenuBar.vue';
import { ref } from "vue";
import Footer from './components/Footer.vue';



const items = ref([
  {
    label: 'Home',
    icon: 'pi pi-home'
  },
  {
    label: 'Projects',
    icon: 'pi pi-search',
    badge: 3,
    items: [
      {
        label: 'Core',
        icon: 'pi pi-bolt',
        shortcut: '⌘+S'
      },
      {
        label: 'Blocks',
        icon: 'pi pi-server',
        shortcut: '⌘+B'
      },
      {
        separator: true
      },
      {
        label: 'UI Kit',
        icon: 'pi pi-pencil',
        shortcut: '⌘+U'
      }
    ]
  }
]);
</script>


<template>
  <MenuBar />
  <div class="router-view">
    <RouterView />
  </div>
  <Footer />
</template>

<style scoped></style>

<style>
.p-menubar {
  max-width: 2000px;
  border: none;
  display: flex;
  justify-content: space-between;
}


.p-menubar-end {
  margin-left: 0 !important;
  margin: 0;
}
</style>
