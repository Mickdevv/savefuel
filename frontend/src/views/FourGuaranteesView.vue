<script setup lang="ts">
import { useCurrentPageStore } from '@/stores/current-page';
import Button from 'primevue/button'
import { useRouter } from 'vue-router';
import { ShieldCheck } from 'lucide-vue-next'

const router = useRouter()
const currentPageStore = useCurrentPageStore()
currentPageStore.setCurrentPage('four-guarantees')
</script>
<template>
  <div class="page-container">
    <div class="left-container">
      <div class="paragraph-container">
        <div class="shield-check">
          <ShieldCheck :size="22" color="#DDA411" />

        </div>
        <div>

          <h2>1. {{ $t('pages.four-guarantees.manufacturers-guarantee.title') }}</h2>
          <div class="section-divider"></div>
          <p>{{ $t('pages.four-guarantees.manufacturers-guarantee.p1_1') }}
          </p>
          <a :href="$t('links.documents.fo-guarantee')" target="_blank">{{
            $t('pages.four-guarantees.manufacturers-guarantee.p1_2') }}</a>
        </div>
      </div>

      <div class="paragraph-container">
        <div class="shield-check">
          <ShieldCheck :size="22" color="#DDA411" />
        </div>
        <div>
          <h2>2. {{ $t('pages.four-guarantees.EN590-ASTM-950.title') }}</h2>
          <div class="section-divider"></div>
          <p>{{ $t('pages.four-guarantees.EN590-ASTM-950.p1_1') }}
          </p>
          <p>{{ $t('pages.four-guarantees.EN590-ASTM-950.p2') }}</p>

          <a target="_blank" :href="$t('links.documents.intertek-EN590-test')">{{
            $t('pages.four-guarantees.EN590-ASTM-950.p1_2') }}</a>
        </div>
      </div>

      <div class="paragraph-container">
        <div class="shield-check">
          <ShieldCheck :size="22" color="#DDA411" />
        </div>
        <div>
          <h2>3. {{ $t('pages.four-guarantees.save-fuel-europe-guarantee.title') }}</h2>
          <div class="section-divider"></div>
          <p>{{ $t('pages.four-guarantees.save-fuel-europe-guarantee.p1') }} </p>
        </div>
      </div>

      <div class="paragraph-container">
        <div class="shield-check">
          <ShieldCheck :size="22" color="#DDA411" />
        </div>
        <div>
          <h2>4. {{ $t('pages.four-guarantees.historical-guarantee.title') }}</h2>
          <div class="section-divider"></div>
          <p>{{ $t('pages.four-guarantees.historical-guarantee.p1') }} </p>
        </div>
      </div>

      <div class="bottom-button-container">

        <button class="button primary-button" @click="router.push('/technical')">{{
          $t('pages.four-guarantees.technical-button') }}</button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.bottom-button-container {
  display: flex;
  justify-content: center;
}

.shield-check {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(221, 164, 17, 0.12);
  border: 2px solid rgb(221, 164, 17);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 4px;
}

.paragraph-container {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  margin-bottom: 5rem;
}

.section-divider {
  background: var(--primary-color-green);
  width: 48px;
  height: 3px;
  border-radius: 1.5px;
}

h2 {
  color: var(--primary-color-green);
  margin-top: 0;
}

.page-container {
  display: flex;
  justify-content: center;
}

.primary-button {
  margin: 1rem 0
}

.img-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

img {
  object-fit: contain;
  max-width: 100%;
}

.right-container .left-container {
  flex-direction: row;
  width: 100%;
}

.right-container {
  display: flex;
  justify-content: space-around;
}

@media (min-width: 1080px) {
  .page-container {
    display: flex;
  }

  .right-container {
    max-width: 15%;
    flex-direction: column;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .left-container {
    max-width: 85%;
  }
}
</style>
