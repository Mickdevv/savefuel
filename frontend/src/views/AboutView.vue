<script setup lang="ts">
import { useCurrentPageStore } from '@/stores/current-page';
import Button from 'primevue/button'
import { useRouter } from 'vue-router';

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
    <!-- <div class="subtitle-card"> -->
    <!--   <h3> {{ $t('pages.about.contact.title') }} </h3> -->
    <!--   <p> {{ $t('pages.about.contact.phone.label') }}{{ $t('pages.about.contact.phone.number') }} </p> -->
    <!--   <p> contact@save-fuel.eu </p> -->
    <!-- </div> -->
  </div>
</template>
<style scoped>
.page-container {}

.right-container .left-container {
  width: 100%;
}

@media (min-width: 1080px) {
  .page-container {}

  .right-container {
    max-width: 25%;
  }

  .left-container {
    max-width: 75%;
  }
}
</style>
