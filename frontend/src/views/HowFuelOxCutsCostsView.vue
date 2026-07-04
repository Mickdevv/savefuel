<script setup lang="ts">
import CostBenefitCalculator from '@/components/CostBenefitCalculator.vue';
import { useCurrentPageStore } from '@/stores/current-page';
import Button from 'primevue/button'
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';

const { tm } = useI18n()
const router = useRouter()
const { tm } = useI18n()

const currentPageStore = useCurrentPageStore()
currentPageStore.setCurrentPage('how-fo-cuts-costs')
</script>



<template>

  <div class="page-container">
    <div class="sub-page-container">

      <div class="text-container">
        <p>{{ $t('pages.how-fo-cuts-costs.p1') }}</p>


        <div class="steps" style="margin-bottom: 1rem;">
          <div class="step">
            <div class="step-number">1</div>
            <div class="step-content">
              <div class="step-description">{{ $t('pages.how-fo-cuts-costs.p3') }}</div>
            </div>
          </div>
          <div class="step">
            <div class="step-number">2</div>
            <div class="step-content">
              <div class="step-description">{{ $t('pages.how-fo-cuts-costs.p4') }}</div>
            </div>
          </div>
        </div>

        <p>{{ $t('pages.how-fo-cuts-costs.p2') }}</p>
        <p>{{ $t('pages.how-fo-cuts-costs.p5') }}</p>
        <p>{{ $t('pages.how-fo-cuts-costs.p6_1') }}<a target="_blank"
            :href="$t('links.documents.land-cruiser-22pc-report')">{{
              $t('pages.how-fo-cuts-costs.p6_2') }}</a></p>
        <p>{{ $t('pages.how-fo-cuts-costs.p7') }}</p>
        <p>{{ $t('pages.how-fo-cuts-costs.p8') }}</p>
        <p>{{ $t('pages.how-fo-cuts-costs.p9_1') }}<a target="_blank" :href="$t('links.documents.fo-white-paper')">{{
          $t('pages.how-fo-cuts-costs.p9_2') }}</a></p>
      </div>

      <div class="cost-calculator-container">
        <CostBenefitCalculator class="cost-benefit-calculator" />
        <button @click="router.push('/free-trial-procedure')" class="free-trial-button button primary-button"
          severity="warning">{{ $t('pages.how-fo-cuts-costs.explore-a-free-trial-button') }}</button>
      </div>
    </div>

  </div>
</template>

<style scoped>
.page-container {
  gap: 1rem;
  display: block;
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

.free-trial-button {
  width: 100%;
}

.sub-page-container {
  gap: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
}

p {
  font-size: 1rem;
  margin-bottom: 2rem;
}

.cost-benefit-calculator {
  margin-bottom: 1rem;
}

.cost-calculator-container {
  margin-top: 1rem;
  justify-content: center;
  width: 100%
}
</style>
