<script setup lang="ts">
import { useCurrentPageStore } from '@/stores/current-page'
import Button from 'primevue/button'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import DocumentCard from '@/components/DocumentCard.vue'
import FiguresCard from '@/components/FiguresCard.vue';
import heroBannerImage from '@/assets/vehicles-banner.webp'
import HeroBanner from '@/components/HeroBanner.vue';
import LinksCard from '@/components/LinksCard.vue'
import AdvantagesCard from '@/components/AdvantagesCard.vue'

const { tm, t } = useI18n()
const router = useRouter()
const currentPageStore = useCurrentPageStore()
currentPageStore.setCurrentPage('vehicles')
</script>

<template>
  <div class="outer-page-container">
    <!-- <HeroBanner :image="heroBannerImage" bannerName="" /> -->
    <img class="hero-banner-image" :src="heroBannerImage" alt="">

    <div class="page-container">

      <div class="paragraphs-column">
        <div>
          <h2>{{ $t('pages.vehicles.direct-cost-benefit.title') }}</h2>
          <div class="section-divider"></div>

          <div class="subtitle-card">
            <p v-for="p in $tm('pages.vehicles.direct-cost-benefit.description')">
              {{ p }}
            </p>
          </div>

          <h2>{{ $t('pages.vehicles.other-benefits.title') }}</h2>
          <div class="card-container">
            <AdvantagesCard cardName="optimised-combustion" />
            <AdvantagesCard cardName="adblue-saving" />
            <AdvantagesCard cardName="dpf-filters" />
            <AdvantagesCard cardName="filters-and-injectors" />
            <AdvantagesCard cardName="antibacterial-protection" />
            <AdvantagesCard cardName="emissions-reduction" />
            <AdvantagesCard cardName="long-term-storage" />
          </div>
          <h2>{{ $t('pages.vehicles.trial-reports.title') }}</h2>
          <p>
            {{ $t('pages.vehicles.other-benefits.p1_1') }}
            <a target="_blank" :href="$t('links.documents.fo-white-paper')">
              {{ $t('pages.vehicles.other-benefits.p1_2') }}
            </a>
          </p>
        </div>
      </div>
      <div class="technical-documents">
        <div class="document-links">
          <DocumentCard :properties="d" v-for="d in tm('pages.vehicles.document-cards')" />
        </div>
      </div>

      <div class="button-container">
        <button class="primary-button button" @click="router.push('/four-guarantees')">{{
          $t('pages.vehicles.four-guarantees-button') }}</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
}


.card-container {
  display: grid;
  gap: 16px;
  margin-bottom: 40px;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr))
}

.advantage-card {
  margin-top: 1rem;
  border-radius: 8px;
  background-color: var(--card-background-color-grey);
  padding: 24px;
  border-left: 4px solid var(--primary-color-gold);
  margin-bottom: 48px
}

.subtitle-card {
  margin-top: 1rem;
  border-radius: 8px;
  background-color: var(--card-background-color-grey);
  padding: 24px;
  border-left: 4px solid var(--primary-color-gold);
  margin-bottom: 48px
}

.outer-page-container {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.hero-banner-image {
  object-fit: cover;
  max-height: 320px;
  width: 100%;
}

.document-links {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
  margin-bottom: 40px;
}

.page-container {
  flex-wrap: wrap;
  justify-content: center;
}

.paragraphs-column {
  width: 100%;
}

.documents-container {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  min-width: 200px;
}

.left-column,
.right-column {
  flex: 1 1 300px;
}

.images-column-container {
  margin-left: 1rem;
}

.images {
  display: none;
}

img {
  width: 100%;
  height: auto;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
}

.custom-list {
  list-style: none;
  padding-left: 0;
}

.custom-list li {
  position: relative;
  padding-left: 2rem;
  margin-bottom: 0.5rem;
}

.custom-list li::before {
  content: "";
  padding: 0;
  position: absolute;
  left: 0;
  width: 1.5rem;
  height: 1.5rem;
  background-image: url('@/assets/SFE_Logo.png');
  background-size: contain;
  background-repeat: no-repeat;
}

@media (min-width: 1080px) {
  .page-container {
    flex-wrap: nowrap;
  }

  .paragraphs-column {
    flex: 1;
    min-width: 0;
  }

  .documents-container {
    flex-wrap: nowrap;
  }

  .images-column-container {
    width: 260px;
    flex-shrink: 0;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
  }

  .images {
    display: block;
  }
}
</style>
