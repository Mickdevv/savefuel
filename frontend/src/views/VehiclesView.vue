<script setup lang="ts">
import { useCurrentPageStore } from '@/stores/current-page';
import Button from 'primevue/button'

const currentPageStore = useCurrentPageStore()
currentPageStore.setCurrentPage('Vehicles')
</script>
<template>
  <div>
    <div>
      <h2>Direct cost benefit</h2>
      <p>A large truck driving 150 000km per year burning 30L/100km uses 45 000L of fuel. At the minimum guaranteed 7%
        cut in consumption, this saves 3 150L.</p>
      <p>Treating 45 000 L of fuel takes 4.5L of Fuel Ox, costing &euro;891 + VAT. If fuel costs &euro;1.67 + VAT
        (&euro;2.00 total), Fuel Ox cuts your fuel cost by &euro;4 369 including the cost of Fuel Ox.</p>
      <h2>Other benefits</h2>
      <p>Read the <a href="">Fuel Ox white paper</a> for detailed technical information.</p>
      <ul class="custom-list">
        <li>
          Polymerisation of fuel molecules broken and re-polymerisation prevented. Maximises burn efficiency.
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
.custom-list {
  list-style: none;
  /* ❌ remove default bullets */
  padding-left: 0;
}

.custom-list li {
  position: relative;
  padding-left: 2rem;
  /* space for logo */
  margin-bottom: 0.5rem;
}

.custom-list li::before {
  content: "";
  padding: 0;
  position: absolute;
  left: 0;

  width: 1.5rem;
  height: 1.5rem;

  background-image: url('@/assets/SFE_Logo.png');
  /* ✅ your logo */
  background-size: contain;
  background-repeat: no-repeat;
}
</style>
