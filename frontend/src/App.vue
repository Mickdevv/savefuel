<script setup lang="ts">
import Toast from 'primevue/toast'
import MenuBar from './components/MenuBar.vue';
import Footer from './components/Footer.vue';
import AnalyticsConsentBanner from './components/AnalyticsConsentBanner.vue';
import { useConsentCookieStore } from '@/stores/cookie-consent';
import { trackPageView } from '@/services/analytics';
import { watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const consentStore = useConsentCookieStore()
consentStore.initConsentCookie()

const router = useRouter()
const route = useRoute()

router.afterEach((to) => {
  trackPageView(to.fullPath)
})

watch(
  () => consentStore.consent,
  (value) => {
    if (value === true) {
      trackPageView(route.fullPath)
    }
  },
)
</script>


<template>
  <MenuBar />
  <AnalyticsConsentBanner v-if="consentStore.isBannerOpen" />
  <div class="router-view">
    <RouterView />
    <Toast />
  </div>
  <Footer />
</template>


<style>
.p-menubar {
  max-width: 1280px;
  border: none;
  display: flex;
  justify-content: space-between;
}


.p-menubar-end {
  margin-left: 0 !important;
  margin: 0;
}
</style>
