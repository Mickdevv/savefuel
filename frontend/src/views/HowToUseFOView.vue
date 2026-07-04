<script setup lang="ts">
import { useCurrentPageStore } from '@/stores/current-page';
import Button from 'primevue/button'

const currentPageStore = useCurrentPageStore()
currentPageStore.setCurrentPage('how-to-use-fuel-ox')
</script>
<template>
  <div class="page-container">
    <div>
      <p>
        {{ $t('pages.how-to-use-fuel-ox.p1') }}
      </p>
      <p>
        {{ $t('pages.how-to-use-fuel-ox.p2') }}

      </p>
      <p>
        {{ $t('pages.how-to-use-fuel-ox.p3') }}

      </p>
    </div>
    <div>
      <iframe :src="$t('links.videos.how-to-add-fo-embedded')">
      </iframe>
      <!-- <button class="button primary-button watch-video-button">test</button> -->
    </div>
  </div>
</template>
<style scoped>
iframe {
  width: 100%;
  min-height: 800px;
}

.watch-video-button {
  width: 100%;
}

.page-container {
  display: grid;
  gap: 1.5rem;
}

.right-container .left-container {
  width: 100%;
}
</style>
