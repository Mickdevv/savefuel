<script setup lang="ts">
import { useCurrentPageStore } from '@/stores/current-page'
import { useRouter } from 'vue-router'

const router = useRouter()
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
      <iframe
        :src="$t('links.videos.how-to-add-fo-embedded')"
        title="Comment ajouter Fuel Ox"
      >
      </iframe>

      <div class="button-container">
        <button
           class="button primary-button"
           @click="router.push('/how-fuel-ox-cuts-costs')"
          >
          {{ $t('menubar.how-fo-cuts-costs') }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>

iframe {
  display: block;
  width: 100%;
  max-width: 960px;
  aspect-ratio: 16 / 9;
  height: auto;
  margin: 0 auto;
  border: none;
}

p {
  font-size: 1rem;
  margin-top: 2rem;
}

.page-container {
  display: grid;
  gap: 1.5rem;
}

.button-container {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
}

.primary-button {
  max-width: 100%;
}

.right-container .left-container {
  width: 100%;
}
</style>