import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import Material from '@primeuix/themes/material'
import App from './App.vue'
import router from './router'
import { i18n } from './i18n'
import { createHead } from '@unhead/vue/client'
import ToastService from 'primevue/toastservice'

const app = createApp(App)
const head = createHead()

app.use(head)
app.use(ToastService)
app.use(i18n)
app.use(PrimeVue, {
  theme: {
    preset: Material,
    options: {},
  },
})
app.use(createPinia())
app.use(router)

app.mount('#app')
