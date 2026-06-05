<script setup lang="ts">
const props = defineProps<{
  properties: { icon: string, title: string, description: string, link: string, type: string }
}>()
</script>


<template>
  <a target="_blank" :href="$t(`links.${properties.type}.${properties.link}`)">
    <i :class="`pi pi-${properties.icon}`"></i>
    <div>
      <div class="title">{{ properties.title }}</div>
      <div class="description">
        {{ properties.description }}
      </div>
    </div>
  </a>
</template>

<style scoped>
.title {
  text-align: left;
  font-weight: 600;
  font-size: 15px;
  margin-bottom: 4px;
  color: var(--primary-color-gold)
}

i {
  color: var(--primary-color-gold)
}

.description {
  color: var(--grey);
  text-align: left;
  margin-bottom: 20px;
  flex: 1;
  font-size: 13px;
  line-height: 1.4;
}

a {
  display: flex;
  gap: 12px;
  padding: 16px;
  background: rgb(244, 244, 244);
  border-radius: 8px;
  border: 1px solid rgb(232, 232, 232);
  text-decoration: none;
  color: rgb(28, 28, 28);
  transition: border-color 150ms, box-shadow 150ms;
  box-shadow: none;
}

a:hover {
  border: 1px solid var(--primary-color-gold);
}
</style>
