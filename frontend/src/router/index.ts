import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FreeTrialProcedureView from '@/views/FreeTrialProcedureView.vue'
import HowFuelOxCutsCostsView from '@/views/HowFuelOxCutsCostsView.vue'
import FourGuaranteesView from '@/views/FourGuaranteesView.vue'
import TechnicalView from '@/views/TechnicalView.vue'
import VehiclesView from '@/views/VehiclesView.vue'
import GeneratorsView from '@/views/GeneratorsView.vue'
import AboutView from '@/views/AboutView.vue'
import ContactView from '@/views/ContactView.vue'
import PriceListView from '@/views/PriceListView.vue'
import GdprView from '@/views/GdprView.vue'
import HowToUseFOView from '@/views/HowToUseFOView.vue'
import FAQView from '@/views/FAQView.vue'
import { i18n } from '@/i18n'
import { DEFAULT_LOCALE, isSupportedLocale } from '@/lib/seo'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:locale',
      name: 'home',
      component: HomeView,
      meta: { pageKey: 'home', segment: '' },
    },
    {
      path: '/:locale/how-fuel-ox-cuts-costs',
      name: 'how-fuel-ox-cuts-costs',
      component: HowFuelOxCutsCostsView,
      meta: { pageKey: 'how-fo-cuts-costs', segment: 'how-fuel-ox-cuts-costs' },
    },
    {
      path: '/:locale/how-to-use-fuel-ox',
      name: 'how-to-use-fuel-ox',
      component: HowToUseFOView,
      meta: { pageKey: 'how-to-use-fuel-ox', segment: 'how-to-use-fuel-ox' },
    },
    {
      path: '/:locale/free-trial-procedure',
      name: 'free-trial-procedure',
      component: FreeTrialProcedureView,
      meta: { pageKey: 'free-trial-procedure', segment: 'free-trial-procedure' },
    },
    {
      path: '/:locale/four-guarantees',
      name: 'four-guarantees',
      component: FourGuaranteesView,
      meta: { pageKey: 'four-guarantees', segment: 'four-guarantees' },
    },
    {
      path: '/:locale/technical',
      name: 'technical',
      component: TechnicalView,
      meta: { pageKey: 'technical', segment: 'technical' },
    },
    {
      path: '/:locale/vehicles',
      name: 'vehicles',
      component: VehiclesView,
      meta: { pageKey: 'vehicles', segment: 'vehicles' },
    },
    {
      path: '/:locale/generators',
      name: 'generators',
      component: GeneratorsView,
      meta: { pageKey: 'generators', segment: 'generators' },
    },
    {
      path: '/:locale/faq',
      name: 'faq',
      component: FAQView,
      meta: { pageKey: 'faq', segment: 'faq' },
    },
    {
      path: '/:locale/gdpr',
      name: 'gdpr',
      component: GdprView,
      meta: { pageKey: 'gdpr', segment: 'gdpr' },
    },
    {
      path: '/:locale/price-list',
      name: 'price-list',
      component: PriceListView,
      meta: { pageKey: 'price-list', segment: 'price-list' },
    },
    {
      path: '/:locale/about',
      name: 'about',
      component: AboutView,
      meta: { pageKey: 'about', segment: 'about' },
    },
    {
      path: '/:locale/contact',
      name: 'contact',
      component: ContactView,
      meta: { pageKey: 'contact', segment: 'contact' },
    },
  ],

  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    return {
      top: 0,
      left: 0,
    }
  },
})

router.beforeEach((to) => {
  const firstSegment = to.path.split('/')[1]
  if (!isSupportedLocale(firstSegment)) {
    const rest = to.path.replace(/^\//, '')
    const target = `/${DEFAULT_LOCALE}${rest ? `/${rest}` : ''}`
    return { path: target, replace: true }
  }

  i18n.global.locale = firstSegment
  return true
})

export default router
