<script setup lang="ts">
import { useCurrentPageStore } from '@/stores/current-page'
import Button from 'primevue/button'
import { useRouter } from 'vue-router'

const router = useRouter()
const currentPageStore = useCurrentPageStore()
currentPageStore.setCurrentPage('vehicles')
</script>

<template>
  <div class="page-container">
    <div class="paragraphs-column">
      <div>
        <h2>{{ $t('pages.vehicles.direct-cost-benefit.title') }}</h2>
        <p>{{ $t('pages.vehicles.direct-cost-benefit.p1') }}</p>
        <p>{{ $t('pages.vehicles.direct-cost-benefit.p2') }}</p>

        <h2>{{ $t('pages.vehicles.other-benefits.title') }}</h2>
        <p>
          {{ $t('pages.vehicles.other-benefits.p1_1') }}
          <a target="_blank" :href="$t('links.documents.fo-white-paper')">
            {{ $t('pages.vehicles.other-benefits.p1_2') }}
          </a>
          {{ $t('pages.vehicles.other-benefits.p1_3') }}
        </p>
        <p>{{ $t('pages.vehicles.other-benefits.p3') }}</p>

        <ul class="custom-list">
          <li
            v-for="(p, i) in $tm('pages.vehicles.other-benefits.bullet-points')"
            :key="i"
            v-html="String(p)"
          ></li>
        </ul>
      </div>

      <div class="documents-container">
        <div class="left-column">
          <h2>{{ $t('pages.vehicles.trial-reports.title') }}</h2>
          <ul class="custom-list">
            <li
              v-for="(p, i) in $tm('pages.vehicles.trial-reports.bullet-points')"
              :key="i"
              v-html="String(p)"
            ></li>
          </ul>
        </div>

        <div class="right-column">
          <h2>{{ $t('pages.vehicles.other-vehicle-documents.title') }}</h2>
          <ul class="custom-list">
            <li
              v-for="(p, i) in $tm('pages.vehicles.other-vehicle-documents.bullet-points')"
              :key="i"
              v-html="String(p)"
            ></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="images-column-container">
      <div class="images">
        <img src="@/assets/shutterstock_Trucks_cropped.jpg" alt="" />
        <img src="@/assets/LAND_ROVER_DISCOVERY.png" alt="" />
        <img src="@/assets/Laguilhon_van.png" alt="" />
      </div>

      <Button
        class="primary-button"
        @click="router.push('/four-guarantees')"
        :label="$t('pages.vehicles.four-guarantees-button')"
      />
    </div>
  </div>
</template>

<style scoped>
.page-container {
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
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

Button {
  background-color: gold;
  border: none !important;
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