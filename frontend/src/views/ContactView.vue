<script setup lang="ts">
import { useCurrentPageStore } from '@/stores/current-page';
import type { ContactForm } from '@/types/contact-form';
import Button from 'primevue/button'
import { ref } from 'vue';

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
    resetContactFormData()
  } catch {
    console.warn("Error")
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="outer-page-container">
    <div class="page-container">
      <div class="left-container">
        <h2>Contact form</h2>
        <div class="section-divider"></div>

        <form @submit.prevent="submitContactForm()">
          <div class="form-grid">

            <div class="input-group">
              <label for="name">Name</label>
              <input id="name" v-model="contactFormData.name" type="text" />
            </div>
            <div class="input-group">
              <label for="company">Company</label>
              <input id="company" v-model="contactFormData.company" type="text" />
            </div>
            <div class="input-group">
              <label for="email">Email</label>
              <input id="email" v-model="contactFormData.email" type="email" />
            </div>
            <div class="input-group">
              <label for="phone">Phone</label>
              <input id="phone" v-model="contactFormData.phoneNumber" type="text" />
            </div>
          </div>
          <div class="input-group">
            <label for="name">Reason</label>
            <select id="phone" v-model="contactFormData.phoneNumber" type="text" />
          </div>
          <div class="input-group">
            <label for="message">Message</label>
            <textarea id="message" v-model="contactFormData.message" type="text" />
          </div>
          <button :loading="loading" type="submit" class="button primary-button">Trial</button>
        </form>
      </div>
      <div class="right-container">
        <div class="contact-card">
          <h2>Contact details</h2>
          <div class="data-group">
            <i class="pi pi-phone"></i>
            <div>
              <p>Phone</p>
              <p>+33 6 328472409</p>
            </div>
          </div>
          <div class="data-group">
            <i class="pi pi-envelope"></i>
            <div>
              <p>Email</p>
              <p>+33 6 328472409</p>
            </div>

          </div>
          <div class="data-group">
            <i class="pi pi-map-marker"></i>

            <div>
              <p>Company</p>
              <p>+33 6 328472409</p>
              <p>France</p>
            </div>
          </div>
        </div>
        <div class="contact-card">test</div>
        <button class="button primary-button">Trial</button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.contact-card .data-group {
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
  display: grid;
  max-width: 1280px;
  grid-template-columns: 1fr minmax(280px, 380px);
  gap: 48px;
  aligh-items: start;
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

  .right-container {
    max-width: 25%;
  }

  .left-container {
    max-width: 75%;
  }
}
</style>
