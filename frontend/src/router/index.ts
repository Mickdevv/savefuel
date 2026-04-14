import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FreeTrialProcedureView from '@/views/FreeTrialProcedureView.vue'
import HowFuelOxCutsCostsView from '@/views/HowFuelOxCutsCostsView.vue'
import FourGuaranteesView from '@/views/FourGuaranteesView.vue'
import TechnicalView from '@/views/TechnicalView.vue'
import VehiclesView from '@/views/VehiclesView.vue'
import GeneratorsView from '@/views/GeneratorsView.vue'
import AboutView from '@/views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/how-fuel-ox-cuts-costs',
      name: 'how-fuel-ox-cuts-costs',
      component: HowFuelOxCutsCostsView,
    },
    {
      path: '/free-trial-procedure',
      name: 'free-trial-procedure',
      component: FreeTrialProcedureView,
    },
    {
      path: '/four-guarantees',
      name: 'four-guarantees',
      component: FourGuaranteesView,
    },
    {
      path: '/technical',
      name: 'technical',
      component: TechnicalView,
    },
    {
      path: '/vehicles',
      name: 'vehicles',
      component: VehiclesView,
    },
    {
      path: '/generators',
      name: 'generators',
      component: GeneratorsView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
  ],
})

export default router
