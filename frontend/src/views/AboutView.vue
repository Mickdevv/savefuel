<script setup lang="ts">
import { useCurrentPageStore } from '@/stores/current-page'
import { useRouter } from 'vue-router'

const router = useRouter()
const currentPageStore = useCurrentPageStore()

currentPageStore.setCurrentPage('about')
</script>

<template>
  <div class="page-container">
    <h2>{{ $t('pages.about.title') }}</h2>

    <div class="section-divider"></div>

    <p>{{ $t('pages.about.p1') }}</p>
    <p>{{ $t('pages.about.p2') }}</p>
    <p>{{ $t('pages.about.p3') }}</p>
    <p>{{ $t('pages.about.p4') }}</p>
    <p>{{ $t('pages.about.p5') }}</p>
    <p>{{ $t('pages.about.p6') }}</p>
    <p>{{ $t('pages.about.p7') }}</p>

    <button
      class="free-trial-button button primary-button"
      severity="warning"
      @click="router.push('/free-trial-procedure')"
    >
      {{ $t('pages.how-fo-cuts-costs.explore-a-free-trial-button') }}
    </button>
  </div>
</template>

<style scoped>
.free-trial-button {
  display: block;
  width: fit-content;
  max-width: 100%;
  margin: 2rem auto 0;
}

.right-container .left-container {
  width: 100%;
}

@media (min-width: 1080px) {
  .right-container {
    max-width: 25%;
  }

  .left-container {
    max-width: 75%;
  }
}
</style>