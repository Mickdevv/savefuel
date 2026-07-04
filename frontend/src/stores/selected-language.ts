import { LocaleOptions } from '@/types/enums/locales.enum'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

export const useLocaleStore = defineStore('localeStore', () => {
  const { locale } = useI18n()
  const localeFromStorage = localStorage.getItem('locale')
  const currentLocale = ref<string>(
    localeFromStorage ? (localeFromStorage as LocaleOptions) : LocaleOptions.EN,
  )

  const selectLocale = (locale: string) => {
    currentLocale.value = locale
    localStorage.setItem('locale', locale)
  }

  const toggleLocale = () => {
    if (currentLocale.value == LocaleOptions.EN) {
      currentLocale.value = LocaleOptions.FR
    } else {
      currentLocale.value = LocaleOptions.EN
    }
    localStorage.setItem('locale', currentLocale.value)
    locale.value = currentLocale.value
  }

  return {
    currentLocale,
    selectLocale,
    toggleLocale,
  }
})
