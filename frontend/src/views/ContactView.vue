<script setup lang="ts">
import { useCurrentPageStore } from '@/stores/current-page';
import type { ContactForm } from '@/types/contact-form';
import axios from 'axios';
import { ref } from 'vue';
import { useToast } from 'primevue/usetoast';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';

const toast = useToast();
const { t } = useI18n()
const router = useRouter()

const currentPageStore = useCurrentPageStore()
currentPageStore.setCurrentPage('contact')
const loading = ref<boolean>(false)

const blankContactForm: ContactForm = {
  name: "",
  company: "",
  email: "",
  phoneNumber: "",
  reason: "",
  message: ""
}
const contactFormData = ref<ContactForm>(structuredClone(blankContactForm))

function resetContactFormData() {
  contactFormData.value = structuredClone(blankContactForm)
}


const submitContactForm = async () => {
  try {
    loading.value = true
    console.log(contactFormData.value)
    await axios.post("/api/email/contact", contactFormData.value)
    toast.add({ severity: "success", summary: t('pages.contact.form.toast.success.summary'), detail: t('pages.contact.form.toast.success.detail'), life: 6000 })
    resetContactFormData()
  } catch {
    toast.add({ severity: "error", summary: t('pages.contact.form.toast.fail.summary'), detail: t('pages.contact.form.toast.fail.detail'), life: 6000 })
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="page-container">
    <div class="left-container">
      <!-- <h2>{{ $t('pages.contact.title') }}</h2> -->
      <!-- <div class="section-divider"></div> -->

      <form @submit.prevent="submitContactForm()">
        <div class="form-grid">

          <div class="input-group">
            <label for="name">{{ $t('pages.contact.form.name') }}</label>
            <input id="name" required v-model="contactFormData.name" type="text" />
          </div>
          <div class="input-group">
            <label for="company">{{ $t('pages.contact.form.company') }}</label>
            <input id="company" v-model="contactFormData.company" type="text" />
          </div>
          <div class="input-group">
            <label for="email">{{ $t('pages.contact.form.email') }}</label>
            <input id="email" required v-model="contactFormData.email" type="email" />
          </div>
          <div class="input-group">
            <label for="phone">{{ $t('pages.contact.form.phone-number') }}</label>
            <input id="phone" required v-model="contactFormData.phoneNumber" type="text" />
          </div>
        </div>
        <div class="input-group">
          <label for="reason">{{ $t('pages.contact.form.reason') }}</label>
          <select id="reason" required v-model="contactFormData.reason" type="text">
            <option v-for="option in $tm('pages.contact.form.reason-options')" :value="option.value">{{
              option.title }}
            </option>
          </select>
        </div>
        <div class="input-group">
          <label for="message">{{ $t('pages.contact.form.message') }}</label>
          <textarea id="message" required v-model="contactFormData.message" type="text" />
        </div>
        <button :disabled="loading" type="submit" class="button primary-button">{{
          $t('pages.contact.form.submit-button')
        }}
          <i v-if="loading" class="pi-spinner pi" />
        </button>
      </form>
    </div>
    <div class="right-container">
      <div class="contact-card">
        <h2>Contact</h2>
        <div class="data-group">
          <i class="pi pi-phone"></i>
          <div>
            <p>{{ $t('pages.contact.contact-details.phone-label') }}</p>
            <p>{{ $t('pages.contact.contact-details.phone-number') }}</p>
          </div>
        </div>
        <div class="data-group">
          <i class="pi pi-envelope"></i>
          <div>
            <p>{{ $t('pages.contact.contact-details.email') }}</p>
            <a :href="`mailto:contact@save-fuel.eu${$t('links.email.website-enquiry')}`">contact@save-fuel.eu</a>
          </div>

        </div>
        <div class="data-group">
          <i class="pi pi-map-marker"></i>

          <div>
            <p>{{ $t('pages.contact.contact-details.company') }}</p>
            <p style="font-weight: bold;">Save Fuel Europe SAS</p>
            <p>France</p>
          </div>
        </div>
      </div>
      <button @click="router.push('/free-trial-procedure')" class="button primary-button">{{
        $t('pages.contact.contact-details.free-trial-button')
        }}</button>
    </div>
  </div>
</template>
<style scoped>
.pi-spinner {
  animation: spin 1s linear infinite;
}

button {
  width: 100%;
}

.contact-card .data-group {
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 22px;
}

.contact-card p {
  padding: 0;
  margin: 0;
}

.contact-card {
  margin-bottom: 12px;
  display: flex;
  flex-direction: column;
  background: rgb(244, 244, 244);
  padding: 24px;
  border-radius: 8px;
}

.contact-card h2 {
  color: var(--primary-color-green);
}

.contact-card i {
  margin-top: 12px;
  color: var(--primary-color-gold)
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

label {
  margin-bottom: 5px;
}

textarea,
select,
input {
  border-radius: 6px;
  width: 100%;
  border: 1px solid rgb(224, 224, 224);
  font-size: 17px;
  padding: 10px 14px;
  background: white;
  color: black;
}

textarea:focus,
select:focus,
input:focus {
  border: 1px solid var(--primary-color-gold);
  outline: none;
  box-shadow: 0 0 0 2px rgba(212, 175, 55, 0.3);
  transition: 0.2s;
}

.input-group {
  margin: 12px 0;
  display: flex;
  flex-direction: column;
  width: 100%;
}

.page-container {
  margin-top: 3rem;
  display: grid;
  max-width: 1280px;
  grid-template-columns: 1fr minmax(280px, 380px);
  gap: 48px;
  align-items: start;
  width: 100%;
}

.right-container .left-container {
  width: 100%;
}

@media (max-width: 960px) {
  .form-grid {
    grid-template-columns: 1fr;
  }

}

@media (max-width: 768px) {
  .page-container {
    grid-template-columns: 1fr;
  }
}
</style>
