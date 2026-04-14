import { LocaleOptions } from '@/types/enums/locales.enum'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLocaleStore = defineStore('localeStore', () => {
  const localeFromStorage = localStorage.getItem('locale')
  const currentLocale = ref<LocaleOptions>(
    localeFromStorage ? (localeFromStorage as LocaleOptions) : LocaleOptions.EN,
  )

  const selectLocale = (locale: LocaleOptions) => {
    currentLocale.value = locale
    localStorage.setItem('locale', locale)
  }

  return {
    selectedLanguage: currentLocale,
    selectLanguage: selectLocale,
  }
})
