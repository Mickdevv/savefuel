<script setup lang="ts">
import CostBenefitCalculator from '@/components/CostBenefitCalculator.vue';
import { useCurrentPageStore } from '@/stores/current-page';
import Button from 'primevue/button'
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';

const { tm } = useI18n()
const router = useRouter()

const currentPageStore = useCurrentPageStore()
currentPageStore.setCurrentPage('how-fo-cuts-costs')
</script>



<template>

  <div class="page-container">

    <div class="text-container">
      <p>{{ $t('pages.how-fo-cuts-costs.p1') }}</p>
      <p>{{ $t('pages.how-fo-cuts-costs.p2') }}</p>
      <div>
      </div>
      <div class="steps" style="margin-bottom: 1rem;">
        <div class="step" v-for="(p, i) in tm('pages.how-fo-cuts-costs.steps')">
          <div class="step-content">
            <div class="step-number">{{ i + 1 }}</div>
            <div class="step-description">{{ p }}</div>
          </div>
        </div>
      </div>
      <p>{{ $t('pages.how-fo-cuts-costs.p3') }}</p>
      <p>{{ $t('pages.how-fo-cuts-costs.p4_1') }}<a target="_blank"
          :href="$t('links.documents.land-cruiser-22pc-report')">{{
            $t('pages.how-fo-cuts-costs.p4_2') }}</a></p>
      <p>{{ $t('pages.how-fo-cuts-costs.p5') }}</p>
      <p>{{ $t('pages.how-fo-cuts-costs.p6') }}</p>
      <p>{{ $t('pages.how-fo-cuts-costs.p7') }}</p>
      <p>{{ $t('pages.how-fo-cuts-costs.p8_1') }}<a target="_blank" :href="$t('links.documents.fo-white-paper')">{{
        $t('pages.how-fo-cuts-costs.p8_2') }}</a></p>
    </div>

    <div class="cost-calculator-container">
      <CostBenefitCalculator class="cost-benefit-calculator" />
      <Button @click="router.push('/free-trial-procedure')" class="primary-button"
        :label="$t('pages.how-fo-cuts-costs.explore-a-free-trial-button')" severity="warning" />
    </div>
  </div>
</template>

<style scoped>
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
  margin-right: 15px;

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
  display: flex;
  align-items: center;
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

.page-container {
  gap: 1rem;
  display: block;
}

@media (min-width: 1080px) {
  .page-container {
    display: flex;
  }
}

p {
  font-size: 1rem;
  margin-top: 2rem;
}

.learn-more-button {
  background-color: gold;
  border: none !important;
  width: fit-content;
}

.learn-more-button:hover {
  background-color: yellow !important;
  transition: 0.2s;
}

.cost-benefit-calculator {
  margin-bottom: 1rem;
  border-radius: 5px;
  border: solid;
}

.cost-calculator-container {
  margin: 1rem, 0rem;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 45%;
}
</style>
