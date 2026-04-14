import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCurrentPageStore = defineStore('currentPage', () => {
  const currentPage = ref<string>()
  const setCurrentPage = (page: string) => {
    currentPage.value = page
  }

  return { currentPage, setCurrentPage }
})
