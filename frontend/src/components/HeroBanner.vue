<script setup lang="ts">
import router from '@/router';
import Button from 'primevue/button'

interface Props {
  bannerName: string
  image: string
  imageAlt?: string
}

defineProps<Props>()
</script>


<template>
  <section class="hero-banner" :style="{ backgroundImage: `url(${image})` }">
    <!-- <img :src="image" :alt="imageAlt" class="hero-image" /> -->

    <div class="hero-overlay">
    </div>
    <div class="hero-container-container">

      <div class="hero-container">
        <div class="hero-content">
          <h2>{{ $t(`components.hero-banners.${bannerName}.title`) }}</h2>

          <p>
            {{ $t(`components.hero-banners.${bannerName}.description`) }}
          </p>

          <Button @click="router.push($t(`components.hero-banners.${bannerName}.buttonLink`))" class="primary-button"
            :label="$t(`components.hero-banners.${bannerName}.buttonLabel`)"></Button>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
* {
  text-align: left;
}

.primary-button {
  max-width: 12rem;
}

.hero-container-container {
  width: 100%;
  max-width: 1280px !important;
  display: flex;
  align-items: center;
}

.hero-container {
  width: 100%;
  padding: 2rem;
}

.hero-banner {
  position: relative;
  width: 100%;
  height: clamp(280px, 40vw, 480px);
  overflow: hidden;
  display: flex;
  justify-content: center;

  background-size: cover;
  background-position: center 40%;
  background-repeat: no-repeat;
}

.hero-overlay {
  display: flex;
  justify-content: center;
  max-width: 1280px;
  background: linear-gradient(to right,
      rgba(0, 0, 0, 0.55) 0%,
      rgba(0, 0, 0, 0.15) 60%,
      transparent 100%);
}

.hero-content {

  display: flex;
  flex-direction: column;

  width: 100%;

  white-space: pre-line;
}

.hero-content h2 {
  margin: 0 0 12px;

  font-size: clamp(28px, 4vw, 48px);
  font-weight: 700;
  line-height: 1.2;

  color: white;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
}

.hero-content p {
  margin: 0 0 24px;

  font-size: clamp(16px, 2vw, 20px);
  line-height: 1.5;

  color: rgba(255, 255, 255, 0.92);
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
}

.btn-amber {
  align-self: flex-start;
}
</style>
