<script setup lang="ts">
import { useCurrentPageStore } from '@/stores/current-page'
import Button from 'primevue/button'
import { useI18n } from 'vue-i18n'

const currentPageStore = useCurrentPageStore()
currentPageStore.setCurrentPage('faq')

type FAQ = {
  question: string
  answers: string[]
  open: boolean
}
</script>
<template>
  <div class="page-container">
    <div class="FAQ-container">
      <div
        class="FAQ"
        :style="index % 2 == 0 ? 'background: rgb(244, 244, 244);' : ''"
        v-for="(faq, index) in $tm('pages.faq.FAQs') as FAQ[]"
        :key="index"
      >
        <div
          class="title"
          @click="
            () => {
              faq.open = !faq.open
            }
          "
        >
          <h3>{{ faq.question }}</h3>
          <i class="toggle-open" :class="faq.open ? 'pi pi-angle-up' : 'pi pi-angle-down'"></i>
        </div>
        <div class="body" v-if="faq.open">
          <p v-html="answer" v-for="(answer, answer_index) in faq.answers"></p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.toggle-open {
  scale: 1.5;
  margin-right: 1rem;
  margin-left: 1rem;
}
.FAQ-container .body {
  padding: 15px;
  width: 100%;
}

.FAQ-container .title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  cursor: pointer;
}

.FAQ-container {
  width: 100%;
}

.FAQ-container .FAQ:hover {
  border-color: var(--primary-color-gold);
  transition: 0.15s;
}

.FAQ-container .FAQ {
  padding: 1rem;
  border: 2px solid rgb(232, 232, 232);
  width: 100%;
}

.page-container {
  display: grid;
  width: 100%;
}

.right-container .left-container {
  width: 100%;
}
</style>
