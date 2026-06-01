<script setup lang="ts">
import { useCurrentPageStore } from '@/stores/current-page';
import Button from 'primevue/button'
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import Card from 'primevue/card';
import FiguresCard from '@/components/FiguresCard.vue';
import LinksCard from '@/components/LinksCard.vue';
import HeroBanner from '@/components/HeroBanner.vue';
import heroBannerImage from '@/assets/hero-home.webp'

const router = useRouter()
const currentPageStore = useCurrentPageStore()

const { tm, t } = useI18n()
currentPageStore.setCurrentPage('home')

</script>



<template>

  <div class="outer-page-container">
    <HeroBanner :image="heroBannerImage" bannerName="home" />

    <div class="page-container">

      <div class="paragraphs-container">
        <p v-for="(p, i) in tm('pages.home.paragraphs')" v-html="p"></p>
      </div>

      <div class="cards-container">
        <FiguresCard cardName="min-fuel-savings" />
        <FiguresCard cardName="max-fuel-savings" />
        <FiguresCard cardName="annual-savings-per-truck" />
        <FiguresCard cardName="proven-track-record" />
      </div>
      <div class="cards-container">
        <LinksCard cardName="road-vehicles" />
        <LinksCard cardName="generators" />
        <LinksCard cardName="environment" />
      </div>

      <div class="button-container">
        <Button @click="router.push('/how-fuel-ox-cuts-costs')" class="primary-button"
          :label="$t('pages.home.learn-more-button')" severity="warning" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.outer-page-container {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.paragraphs-container {
  margin-bottom: 5rem;
}

p {
  font-size: 1rem;
  margin-top: 2rem;
  font-weight: 500;
}

.learn-more-button {
  background-color: gold;
  border: none !important;
}

.learn-more-button:hover {
  background-color: yellow !important;
  transition: 0.2s;
}

.primary-button {
  padding: 1rem 1.5rem;
}

.button-container {
  margin-top: 5rem;
  display: flex;
  justify-content: center;
}
</style>
