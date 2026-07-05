<script setup lang="ts">
import { computed, ref, Transition } from 'vue';
import 'primeicons/primeicons.css'
import Menu from 'primevue/menu';
import Button from 'primevue/button';
import Select from 'primevue/select';
import { useLocaleStore } from '@/stores/selected-language';
import { useCurrentPageStore } from '@/stores/current-page';
import { useRoute, useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import Dialog from 'primevue/dialog';

const visible = ref<boolean>(false)
const contactFormVisible = ref<boolean>(false)

const localeStore = useLocaleStore()
const currentPageStore = useCurrentPageStore()
const menu = ref();

const { t } = useI18n()

const router = useRouter()
const route = useRoute()

const items = computed(() => [
  {
    label: t('menubar.home'),
    activeFlag: '/',
    command: () => router.push('/')
  },

  {
    label: t('menubar.how-to-use-fuel-ox'),
    activeFlag: '/how-to-use-fuel-ox',
    command: () => router.push('/how-to-use-fuel-ox')
  },
  {
    label: t('menubar.how-fo-cuts-costs'),
    activeFlag: '/how-fuel-ox-cuts-costs',
    command: () => router.push('/how-fuel-ox-cuts-costs')
  },

  {
    label: t('menubar.free-trial-procedure'),
    activeFlag: '/free-trial-procedure',
    command: () => router.push('/free-trial-procedure')
  },

  {
    label: t('menubar.four-guarantees'),
    activeFlag: '/four-guarantees',
    command: () => router.push('/four-guarantees')
  },
  {
    label: t('menubar.technical'),
    activeFlag: '/technical',
    command: () => router.push('/technical')
  },

  {
    label: t('menubar.vehicles'),
    activeFlag: '/vehicles',
    command: () => router.push('/vehicles')
  },
  {
    label: t('menubar.generators'),
    activeFlag: '/generators',
    command: () => router.push('/generators')
  },
  {
    label: t('menubar.about'),
    activeFlag: '/about',
    command: () => router.push('/about')
  },
  {
    label: t('menubar.contact'),
    activeFlag: '/contact',
    command: () => router.push('/contact')
  },
  {
    label: t('menubar.price-list'),
    activeFlag: '',
    command: () => router.push('/price-list')
  },
  {
    label: t('menubar.gdpr'),
    activeFlag: '',
    command: () => window.open(t('links.documents.gdpr'))
    // command: () => router.push('/gdpr')
  }
])
const toggle = (event: any) => {
  menu.value.toggle(event);
};

const emit = defineEmits<{
  (e: 'update:menuOpen', value: boolean): void
}>()


const openMenu = () => {
  visible.value = true
}
const closeMenu = () => {
  visible.value = false
  console.log("test coe")
}

const currentPath = computed(() => route.path)

function navigate(path: string) {
  router.push(path)
  closeMenu()
}

</script>


<template>

  <Transition name="fade-in">
    <div v-if="visible" class="overlay-menu-backdrop" @click="closeMenu"></div>
  </Transition>
  <Transition name="drawer">
    <div v-if="visible" class="nav-drawer">

      <nav class="overlay-menu-panel">
        <div class="overlay-menu-header">
          <button class="close-button" @click="closeMenu" aria-label="Close menu">X</button>
        </div>

        <div class="menu-list-container">
          <ul class="menu-list">
            <li v-for="item in items" :key="item.label">
              <p @click="item.command(); closeMenu()" class="menu-link"
                :class="{ active: currentPath === (item.activeFlag) && item.activeFlag != '' }">
                {{ item.label }}
              </p>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </Transition>

  <!-- <Dialog :header="$t('components.contact-form.title')" v-model:visible="contactFormVisible"> -->
  <!--   <Contact /> -->
  <!-- </Dialog> -->


  <div class="page-top-container">
    <div class="menubar">
      <a class="logo-link" href="/">
        <div style="font-weight: bold; display: flex;">
          <img src="../assets/SFE_Logo.png" style="max-width: 3rem;" />
          <p class="company-name">Save Fuel Europe SAS</p>
        </div>
      </a>
      <div>
        <h2>{{ $t(`pages.${currentPageStore.currentPage}.page-title`) }}</h2>
      </div>
      <div class="links">
        <span class="icons">
          <a target="_blank" class="sm-link linkedin-link"
            href="https://www.linkedin.com/company/save-fuel-europe/?viewAsMember=true ">
            <i class="pi pi-linkedin"></i>
          </a>
          <a target="_blank" class="sm-link youtube-link" href="https://www.youtube.com/@SaveFuelEurope">
            <i class="pi pi-youtube"></i>
          </a>
        </span>
        <div class="border border-right menu">
          <button class="language-selector-select" @click="openMenu"><i class="pi pi-align-justify">
            </i>
            <p>Menu</p>
          </button>
        </div>
        <div class="language-selector">
          <button @click="localeStore.toggleLocale();" class="language-selector-select">{{ $i18n.locale.toUpperCase()
            }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h2 {
  text-align: left;
}

/* ENTER animation */
.drawer-enter-active,
.drawer-leave-active,
.fade-in-enter-from,
.fade-in-leave-to {
  transition: all 250ms ease;
}

/* start state (enter + leave end) */
.fade-in-enter-from,
.fade-in-leave-to {
  opacity: 0;
}

/* slide panel specifically */
.drawer-enter-from .overlay-menu-panel,
.drawer-leave-to .overlay-menu-panel {
  transform: translateX(100%);
}

/* final state */
.drawer-enter-to .overlay-menu-panel,
.drawer-leave-from .overlay-menu-panel {
  transform: translateX(0);
}

.drawer-enter-from,
.drawer-leave-to {
  transform: translateX(100%);
}

.drawer-enter-active,
.drawer-leave-active {
  transition: transform 250ms ease;
}

.drawer-enter-to,
.drawer-leave-from {
  transform: translateX(0);
}

.overlay-menu-panel {
  will-change: transform;
}

.nav-drawer {
  position: fixed;
  inset: 0;
  z-index: 2000;
  display: flex;
}

.overlay-menu {
  position: fixed;
  inset: 0;
  z-index: 1000;
}

/* backdrop */
.overlay-menu-backdrop {
  z-index: 1000;
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
}

/* panel */
.overlay-menu-panel {
  position: relative;
  margin-left: auto;
  width: 360px;
  max-width: 90vw;
  height: 100%;
  background: white;
  display: flex;
  flex-direction: column;
  box-shadow: -10px 0 30px rgba(0, 0, 0, 0.15);
}

/* header */
.overlay-menu-header {
  display: flex;
  justify-content: flex-end;
  padding: 16px 20px 8px;
  border-bottom: 1px solid #e8e8e8;
}

/* close button */
.close-button {
  background: none;
  border: none;
  cursor: pointer;
  color: #1c1c1c;
  padding: 4px;
}

.menu-list-container {
  overflow: auto;
}

/* menu list */
.menu-list {
  list-style: none;
  margin: 0;
  padding: 8px 0;
}

/* links */
.menu-link {
  display: block;
  padding: 12px 24px;
  font-size: 17px;
  font-weight: 400;
  color: #1c1c1c;
  text-decoration: none;
  border-left: 3px solid transparent;
  transition: all 150ms ease;
}

/* active state */
.menu-link.active {
  font-weight: 600;
  color: #dda411;
  border-left: 3px solid #dda411;
  background: rgba(221, 164, 17, 0.06);
}

.menu-link:hover {
  font-weight: 600;
  color: #dda411;
  border-left: 3px solid #dda411;
  background: rgba(221, 164, 17, 0.06);
  transition: 0.3s;
  cursor: pointer;
}

.company-name {
  display: none;
}

.youtube-link:hover .linkedin-link:hover {
  background: transparent;
}

.youtube-link {
  display: none;
  color: hsla(10, 100%, 37%, 1) !important;
}

.linkedin-link {
  display: none;
  color: hsla(195, 100%, 37%, 1);
}

@media (min-width: 100px) {}

@media (min-width: 1000px) {

  .youtube-link,
  .linkedin-link {
    display: inline;
  }

  .company-name {
    display: flex;
  }
}

.page-top-container {
  background: linear-gradient(to bottom,
      rgba(44, 57, 245, 0.2) 0%,
      /* rgba(44, 57, 205, 0.5) 50%, */
      rgba(44, 57, 245, 0) 100%);
}

.language-selector-select p {
  margin: 0;
}

.language-selector-select {
  font-size: 1rem;
  padding: 0.5rem;
  border-color: black;
  border-radius: 5px;
  border: 1px solid rgb(224, 224, 224);
  background-color: transparent;
  color: #1c1c1c;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

}

.language-selector-select:hover {
  cursor: pointer;
}

.language-selector-select:focus {
  border-color: black !important;
}

.language-selector {
  padding: 0rem 0.5rem;
  border-color: black !important;
}

.sm-link {
  border-radius: 5px;
  margin: 0.5rem
}

.menu-internal-element {
  margin: 0.2rem !important;
  padding: 0.4rem !important;
  background-color: gold !important;

  border: none !important;
}

.menu-internal-element:focus {
  background-color: gold !important;
  border: none !important;
}

.menubar {
  max-width: 1280px;
  margin: 0 auto;
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
}

.links {
  display: flex;
  align-items: center;
}

.active {
  background-color: white;
}

.border-left {
  border-left: solid;
  padding: 0rem 0.5rem;
}

.border-right {
  border-right: 1px solid rgb(224, 224, 224);
  padding: 0rem 0.5rem;
}


.logo-link {
  text-decoration: none;
  color: inherit;
  transition: 0.2s;
}

.logo-link:hover {
  background: none;
}

.menubar-item {
  margin: 1rem;
}

.border {
  border-width: 1px;
}
</style>
