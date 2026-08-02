<script setup lang="ts">
import Button from 'primevue/button'
import { useCurrentPageStore } from '@/stores/current-page';
import { useRouter } from 'vue-router';
import DocumentCard from '@/components/DocumentCard.vue';
import { useI18n } from 'vue-i18n';

const { tm } = useI18n()
const router = useRouter()
const currentPageStore = useCurrentPageStore()
currentPageStore.setCurrentPage("technical")
</script>

<template>
  <div class="page-container">

    <div class="paragraphs">
      <h2>{{ $t('pages.technical.history.title') }}</h2>

      <div class="section-divider"></div>
      <p>{{ $t('pages.technical.history.p1') }}</p>
      <p>{{ $t('pages.technical.history.p2') }}</p>
      <p>{{ $t('pages.technical.history.p3') }}</p>
      <p>{{ $t('pages.technical.history.p4') }}</p>
      <p>{{ $t('pages.technical.history.p5') }}</p>

      <h2>{{ $t('pages.technical.technical-documents.title') }}</h2>
      <div class="section-divider"></div>
      <div class="subtitle">{{ $t('pages.technical.technical-documents.subtitle') }}</div>

      <div class="technical-documents">


        <div class="document-links">

          <DocumentCard :properties="d" v-for="d in tm('pages.technical.document-cards')" />
        </div>
      </div>

      <div class="about-button-container">

        <button @click="router.push('/about')" class="about-button button primary-button">{{
          $t('pages.technical.about-button')
        }}</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-button {
  padding: 1rem 1rem;
}

.about-button-container {
  display: flex;
  justify-content: center;
  width: 100%;
}

.subtitle {
  color: var(--grey);
  margin-bottom: 1.5rem;
}

.section-divider {
  margin-bottom: 1.5rem;
}

.document-links {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
  margin-bottom: 40px;
}

.right-column {
  margin-left: 1rem;
}

.buttons-bar {
  display: flex;
  justify-content: center;
}

.page-container {
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
}

.paragraphs {
  width: 100%;
}

.images {
  display: none;
}

.primary-button {
  margin: 1rem;
}

@media (min-width: 1080px) {
  .images {
    display: block;
  }

  .right-column {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 1rem;
    width: 25%;
  }

  .buttons-bar {
    display: flex;
    justify-content: center;
  }

  .page-container {
    display: flex;
    flex-wrap: nowrap;
  }

  .paragraphs {
    max-width: 75%;
  }

  .primary-button {
    margin: 1rem;
  }
}
</style>
