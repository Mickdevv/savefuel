<script setup lang="ts">
import { useCurrentPageStore } from '@/stores/current-page';
import type { ContactForm } from '@/types/contact-form';
import axios from 'axios';
import { useToast } from 'primevue/usetoast';
import Button from 'primevue/button'
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import { ref } from 'vue';


const toast = useToast()

const currentPageStore = useCurrentPageStore()
currentPageStore.setCurrentPage('contact')

const loading = ref<boolean>(false)
const contactForm = ref<ContactForm>({
  name: "",
  message: "",
  phoneNumber: "",
  reason: "",
  email: "",
  company: '',
})

const contactFormSubmit = async () => {
  loading.value = true
  try {
    await axios.post('/api/email/contact', { ...contactForm.value, phone_number: contactForm.value.phoneNumber })
    contactForm.value = {
      company: '',
      name: "",
      message: "",
      phoneNumber: "",
      reason: "",
      email: ""
    }
    toast.add({ severity: 'success', summary: 'contact form submitted', detail: 'success', life: 6000 })
  } catch {
    toast.add({ severity: 'error', summary: 'Fail', detail: 'Failed to send contact form', life: 6000 })
  } finally {
    loading.value = false
  }
}

</script>
<template>
  <div class="page-container">
    <form class="contact-form" @submit.prevent="contactFormSubmit()">
      <div class="field">
        <label>
          {{ $t('components.contact-form.name') }}
        </label>
        <InputText required v-model="contactForm.name" class="input" />
      </div>
      <div class="field">
        <label>
          {{ $t('components.contact-form.email') }}
        </label>
        <InputText required v-model="contactForm.email" class="input" />
      </div>
      <div class="field">
        <label>
          {{ $t('components.contact-form.phone-number') }}
        </label>
        <InputText required v-model="contactForm.phoneNumber" class="input" />
      </div>
      <div class="field">
        <label>
          {{ $t('components.contact-form.reason') }}
        </label>
        <InputText required v-model="contactForm.reason" class="input" />
      </div>
      <div class="field">
        <label>
          {{ $t('components.contact-form.message') }}
        </label>
        <Textarea required v-model="contactForm.message" class="input" />
      </div>
      <Button class="primary-button" type="submit" :label="$t('components.contact-form.button-label')"
        :loading="loading" />

    </form>
  </div>
  <!-- <div class="page-container"> -->
  <!--   <div class="left-container">testleft</div> -->
  <!--   <div class="right-container">testright</div> -->
  <!-- </div> -->
</template>
<style scoped>
.page-container {
  display: flex;
  justify-content: center;
}

.field .input {
  color: black;
  background-color: white;
  min-width: 50%;
}

.field .input:focus {
  outline: none;
  border-color: #3b82f6 !important;
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15);
}

.right-container .left-container {
  width: 100%;
}

.contact-form {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.field {
  justify-content: space-between;
  display: flex;
  margin-bottom: 1rem;
  width: 100%;
}

@media (min-width: 1080px) {
  label {
    margin-right: 2rem;
  }

  .page-container {
    display: flex;
  }

  .right-container {
    max-width: 25%;
  }

  .left-container {
    max-width: 75%;
  }
}
</style>
