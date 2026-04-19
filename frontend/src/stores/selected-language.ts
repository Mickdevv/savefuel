import { LocaleOptions } from '@/types/enums/locales.enum'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

export const useLocaleStore = defineStore('localeStore', () => {
  const { t } = useI18n()
  const localeFromStorage = localStorage.getItem('locale')
  const currentLocale = ref<string>(
    localeFromStorage ? (localeFromStorage as LocaleOptions) : LocaleOptions.EN,
  )

  const selectLocale = (locale: string) => {
    currentLocale.value = locale
    localStorage.setItem('locale', locale)
  }

  return {
    selectedLanguage: currentLocale,
    selectLanguage: selectLocale,
  }
})
