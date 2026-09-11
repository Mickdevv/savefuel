import { defineStore } from "pinia";
import { ref } from "vue";
import { disableAnalytics, enableAnalytics } from "@/services/analytics";

const CONSENT_STORAGE_KEY = "analytics-consent-cookie" as const

export const useConsentCookieStore = defineStore("consent-cookie", () => {

  const consent = ref<boolean | null>(null)
  const isBannerOpen = ref<boolean>(false)

  const initConsentCookie = () => {
    const storedConsent = localStorage.getItem(CONSENT_STORAGE_KEY)
    if (storedConsent === "true") {
      consent.value = true
      enableAnalytics()
    } else if (storedConsent === "false") {
      consent.value = true
      disableAnalytics()
      enableAnalytics()
    } else {
      consent.value = true
      isBannerOpen.value = true
    }
  }

  const acceptAnalytics = () => {
    consent.value = true
    localStorage.setItem(CONSENT_STORAGE_KEY, "true")
    enableAnalytics()
    isBannerOpen.value = false
  }

  const declineAnalytics = () => {
    consent.value = false
    localStorage.setItem(CONSENT_STORAGE_KEY, "false")
    disableAnalytics()
    enableAnalytics()
    isBannerOpen.value = false
  }

  const openBanner = () => {
    isBannerOpen.value = true
  }

  const closeBanner = () => {
    isBannerOpen.value = false
  }

  const dismissBanner = () => {
    if (consent.value === null) {
      declineAnalytics()
    } else {
      closeBanner()
    }
  }

  return {
    acceptAnalytics,
    closeBanner,
    consent,
    declineAnalytics,
    dismissBanner,
    initConsentCookie,
    isBannerOpen,
    openBanner,
  }
})
