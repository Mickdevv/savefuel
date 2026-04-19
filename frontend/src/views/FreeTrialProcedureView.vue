<script setup lang="ts">
import Button from 'primevue/button'
import { useCurrentPageStore } from '@/stores/current-page';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';

const router = useRouter()
const currentPageStore = useCurrentPageStore()
currentPageStore.setCurrentPage("Free trial procedure")

const { tm } = useI18n()
</script>

<template>
  <div class="page-container">

    <div class="paragraphs">
      <p v-for="(p, i) in tm('pages.free-trial-procedure.paragraphs')">{{ p }}</p>
      <p>{{ $t('pages.free-trial-procedure.email-line') }}<a href="mailto:contact@save-fuel.eu">contact@save-fuel.eu</a>
      </p>
    </div>
    <div class="right-column">
      <img src="../assets/Both Fuelox bottles.png" style="border-radius: 5px; width: 100%" alt="">
      <div class="buttons-bar">
        <Button class="primary-button" @click="router.push('/vehicles')"
          :label="$t('pages.free-trial-procedure.vehicles-button')"></Button>
        <Button class="primary-button" @click="router.push('/generators')"
          :label="$t('pages.free-trial-procedure.generators-button')"></Button>
      </div>
    </div>

  </div>
</template>

<style scoped>
.right-column {
  margin-left: 1rem;
  width: 100%;
}

.buttons-bar {
  display: flex;
}

.page-container {
  display: flex
}

.paragraphs {
  max-width: 75%;
}

.primary-button {
  margin: 1rem;
}
</style>
