<script setup lang="ts">
import Button from 'primevue/button'
import { useCurrentPageStore } from '@/stores/current-page';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import LinksCard from '@/components/LinksCard.vue';
import FiguresCard from '@/components/FiguresCard.vue';

const router = useRouter()
const currentPageStore = useCurrentPageStore()
currentPageStore.setCurrentPage("free-trial-procedure")

const { tm } = useI18n()
</script>

<template>
  <div class="page-container">

    <div class="paragraphs">
      <h2>{{ $t('pages.free-trial-procedure.intro.title') }}</h2>
      <p>{{ $t('pages.free-trial-procedure.intro.p1') }}</p>
      <p>{{ $t('pages.free-trial-procedure.intro.p2') }}</p>

      <h2>{{ $t('pages.free-trial-procedure.steps.title') }}</h2>
      <p>{{ $t('pages.free-trial-procedure.steps.subtitle') }}</p>
      <div class="steps" style="margin-bottom: 1rem;">
        <div class="step" v-for="(p, i) in tm('pages.free-trial-procedure.steps.steps')">
          <div class="step-number">{{ i + 1 }}</div>
          <div class="step-content">
            <div class="step-title">{{ p[0] }}</div>
            <div class="step-description">{{ p[1] }}</div>
          </div>
          <!-- <p style="font-weight: bold;"> {{ p[0] }}</p> -->
          <!-- <p>{{ p[1] }}</p> -->
        </div>
      </div>

      <div class="conditions-container">
        <h2 style="margin-top: 2rem;">{{ $t('pages.free-trial-procedure.test-conditions.title') }}</h2>
        <h4>{{ $t('pages.free-trial-procedure.test-conditions.sub-title') }}</h4>
        <ol class="conditions">
          <li class="condition" v-for="(p, i) in tm('pages.free-trial-procedure.test-conditions.conditions')">
            {{ p }}
          </li>
        </ol>
      </div>

      <h3 v-html="($t('pages.free-trial-procedure.email-title'))"></h3>

      <button class="button primary-button vehicles-link">{{ $t('pages.free-trial-procedure.vehicles-button')
        }}</button>
      <button class="button secondary-button generators-link">{{ $t('pages.free-trial-procedure.generators-button')
        }}</button>
    </div>



    <div class="right-column">
      <div class="images">
        <img class="truck-image" src="@/assets/ai-trucks.webp" style="border-radius: 5px; width: 100%" alt="">
      </div>
      <FiguresCard cardName="free-trial-no-obligation" />
    </div>

  </div>
</template>

<style scoped>
.conditions-container {
  background: rgb(244, 244, 244);
  border-radius: 8px;
  border-left: 4px solid rgb(51, 102, 0);
  padding: 12px 24px;
  margin-top: 3rem;
  margin-bottom: 3rem;
}

.button {
  padding: 1rem 3rem
}

.condition {
  display: flex;
  align-items: center;
  margin: 5px;
}

.steps {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 32px;
}

.step {
  display: flex;
  gap: 16px;
}

.step-number {
  width: 40px;
  height: 40px;
  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background: #dda411;
  color: #1c1c1c;

  font-size: 18px;
  font-weight: 700;
}

.step-content {
  flex: 1;
}

.step-title {
  margin: 0 0 6px;
  font-size: 18px;
  font-weight: 600;
}

.step-description {
  margin: 0;
  font-size: 16px;
  color: #3a3a3a;
  line-height: 1.5;
}

.section-title {
  margin-top: 2rem;
  margin-bottom: 0.5rem;
}

.section-subtitle {
  margin-bottom: 1.5rem;
}

h2 {
  margin-top: 0;
  margin-bottom: 20px;
  color: #336600;
}

ol {
  margin-bottom: 2rem;
}

.right-column {
  margin-left: 1rem;
}

.buttons-bar {
  display: flex;
}

.page-container {
  max-width: 1280px;

  display: grid;
  grid-template-columns: 1fr minmax(280px, 380px);
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 48px;
  align-items: start;
  padding: 40px 24px;
}

@media (max-width: 1080px) {
  .page-container {
    grid-template-columns: 1fr;
  }
}

.paragraphs {
  width: 100%;
}

.primary-button {
  margin: 1rem;
}

.images {
  margin-bottom: 1rem;
  width: 100%;
}

.truck-image {
  width: 100%;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 20px;
  object-fit: cover;
  aspect-ratio: 4 / 3;
}
</style>
