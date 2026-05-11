<script setup lang="ts">

</script>

<template>
  <div class="footer-container">
    <div class="mission-statement-container">
      <p>{{ $t('components.footer.save-fuel') }}</p>
      <img src="../assets/SFE_Logo.png" alt="">
      <p>{{ $t('components.footer.protect-earth') }}</p>
      <img src="../assets/SFE_Logo.png" alt="">
      <p>{{ $t('components.footer.reduce-costs') }}</p>
    </div>
    <div class="contact-row-container">
<<<<<<< Updated upstream
      <p>Contact: Lesley Vaquero +33 06 34 35 85 15</p>
=======
      <p>Contact: Steve Devereux +33 6 75 79 08 16</p>
>>>>>>> Stashed changes
      <a target="_blank" :href="$t('links.documents.legal-details')">{{ $t('menubar.legal-details') }}</a>
      <a :href="`mailto:contact@save-fuel.eu${$t('links.email.website-enquiry')}`">contact@save-fuel.eu</a>

    </div>
  </div>
</template>

<style scoped>
.mission-statement-container {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}

.contact-row-container {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 2rem;
}

.footer-container {
  flex-direction: column;
  margin-top: 2rem;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
}

img {
  max-width: 50px;
}
</style>
