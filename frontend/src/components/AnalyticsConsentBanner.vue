<script setup lang="ts">
import { useConsentCookieStore } from '@/stores/cookie-consent'

const consentStore = useConsentCookieStore()
consentStore.acceptAnalytics()
</script>


<template>
  <div class="consent-banner-container">
    <button class="close-button" aria-label="Close" @click="consentStore.dismissBanner()">
      X
    </button>
    <div>
      <h3>{{ $t('components.analytics-consent-popup.title') }}</h3>
      <p>{{ $t('components.analytics-consent-popup.body') }}</p>
    </div>
    <div class="buttons">
      <button class="button primary-button" @click="consentStore.acceptAnalytics()">
        {{ $t('components.analytics-consent-popup.accept') }}
      </button>
      <button class="button secondary-button" @click="consentStore.declineAnalytics()">
        {{ $t('components.analytics-consent-popup.decline') }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.consent-banner-container {
  position: fixed;
  bottom: 1rem;
  left: 1rem;
  z-index: 100;
  border: solid 3px grey;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 1rem;
  box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19) !important;
  max-width: 400px;
}

.close-button {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: none;
  border: 1px solid transparent;
  cursor: pointer;
  color: #1c1c1c;
  font-size: 20px;
  padding: 4px;
  border-radius: 5px;
}

.close-button:hover {
  color: var(--primary-color-gold);
  border: 1px solid var(--primary-color-gold);
  background: rgba(221, 164, 17, 0.06);
  transition: 0.15s;
}

.buttons {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
}

.button {
  margin: 0.2rem;
}

h3 {
  font-size: 24px;
  text-align: left;
}

p {
  font-size: 16px;
  text-align: left;
}
</style>
