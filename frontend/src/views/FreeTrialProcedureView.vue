<script setup lang="ts">
import Button from 'primevue/button'
import { useCurrentPageStore } from '@/stores/current-page';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import LinksCard from '@/components/LinksCard.vue';

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
          <li class=" condition" v-for="(p, i) in tm('pages.free-trial-procedure.test-conditions.conditions')">
            {{ p }}
          </li>
        </ol>
      </div>

      <h3>{{ $t('pages.free-trial-procedure.email-title') }}</h3>
      <p>{{ $t('pages.free-trial-procedure.email-line') }}
        <a href="mailto:contact@save-fuel.eu?subject=Free%20trial%20enquiry">contact@save-fuel.eu</a>
      </p>


      <button class="primary-button vehicles-link">{{ $t('pages.free-trial-procedure.vehicles-button') }}</button>
      <button class="secondary-button generators-link">{{ $t('pages.free-trial-procedure.generators-button') }}</button>
    </div>



    <div class="right-column">
      <div class="images">
        <img src="../assets/Both Fuelox bottles.png" style="border-radius: 5px; width: 100%" alt="">
      </div>
      <div class="buttons-bar">
        <Button class="primary-button" @click="router.push('/vehicles')"
          :label="$t('pages.free-trial-procedure.vehicles-button')"></Button>
        <Button class="primary-button" @click="router.push('/generators')"
          :label="$t('pages.free-trial-procedure.generators-button')"></Button>
      </div>
    </div>

  </div>
</template>

<style scoped>
.conditions-container {
  background: rgb(244, 244, 244);
  border-radius: 8px;
  border-left: 4px solid rgb(51, 102, 0);
  padding: 12px 24px;
}

.condition {
  display: flex;
  align-items: center;
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
  margin-bottom: 10px;
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
  display: grid;
  grid-template-columns: 1fr minmax(280px, 380px);
  align-items: flex-start;
  flex-wrap: wrap;
}

.paragraphs {
  width: 100%;
}

.primary-button {
  margin: 1rem;
}

.images {
  display: none;
}

@media (min-width: 1080px) {
  .page-container {
    flex-wrap: nowrap;
  }

  .images-column-container {
    max-width: 25%;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .images {
    display: block;
  }

  .paragraphs {
    width: 75%
  }
}
</style>
