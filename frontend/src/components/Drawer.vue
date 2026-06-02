<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const props = defineProps<{
  menuOpen: boolean
  menuItems: { command: string; label: any }[]
}>()

const emit = defineEmits<{
  (e: 'update:menuOpen', value: boolean): void
}>()

const route = useRoute()
const router = useRouter()

const closeMenu = () => {
  emit('update:menuOpen', false)
}

const currentPath = computed(() => route.path)

function navigate(path: string) {
  router.push(path)
  closeMenu()
}
</script>

<template>
  <!-- Overlay Menu -->
  <div v-if="menuOpen" class="overlay-menu" role="dialog" aria-modal="true" aria-label="Navigation menu">
    <!-- Backdrop -->
    <div class="overlay-menu-backdrop" @click="closeMenu">X</div>

    <!-- Panel -->
    <nav class="overlay-menu-panel">

      <!-- Close button -->
      <div class="overlay-menu-header">
        <button class="close-button" @click="closeMenu" aria-label="Close menu">
          <X :size="24" />
        </button>
      </div>

      <!-- Menu items -->
      <ul class="menu-list">
        <li v-for="item in menuItems" :key="item.command">
          <a :href="item.command" @click.prevent="navigate(item.command)" class="menu-link" :class="{
            active: currentPath === item.command
          }">
            {{ item.label }}
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>
<style scoped>
.overlay-menu {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
}

/* backdrop */
.overlay-menu-backdrop {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
}

/* panel */
.overlay-menu-panel {
  position: relative;
  margin-left: auto;
  width: 360px;
  max-width: 90vw;
  height: 100%;
  background: white;
  display: flex;
  flex-direction: column;
  box-shadow: -10px 0 30px rgba(0, 0, 0, 0.15);
}

/* header */
.overlay-menu-header {
  display: flex;
  justify-content: flex-end;
  padding: 16px 20px 8px;
  border-bottom: 1px solid #e8e8e8;
}

/* close button */
.close-button {
  background: none;
  border: none;
  cursor: pointer;
  color: #1c1c1c;
  padding: 4px;
}

/* menu list */
.menu-list {
  list-style: none;
  margin: 0;
  padding: 8px 0;
}

/* links */
.menu-link {
  display: block;
  padding: 12px 24px;
  font-size: 17px;
  font-weight: 400;
  color: #1c1c1c;
  text-decoration: none;
  border-left: 3px solid transparent;
  transition: all 150ms ease;
}

/* active state */
.menu-link.active {
  font-weight: 600;
  color: #dda411;
  border-left: 3px solid #dda411;
  background: rgba(221, 164, 17, 0.06);
}
</style>
