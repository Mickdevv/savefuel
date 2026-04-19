  <template>
    <div class="footer-container">
      <p>{{ $t('components.footer.save-fuel') }}</p>
      <img src="../assets/SFE_Logo.png" alt="">
      <p>{{ $t('components.footer.protect-earth') }}</p>
      <img src="../assets/SFE_Logo.png" alt="">
      <p>{{ $t('components.footer.reduce-costs') }}</p>

    </div>
  </template>

<style scoped>
.footer-container {
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
