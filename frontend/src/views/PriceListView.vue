<script setup lang="ts">
import router from '@/router';
import { useCurrentPageStore } from '@/stores/current-page';
import Button from 'primevue/button'

const currentPageStore = useCurrentPageStore()
currentPageStore.setCurrentPage('price-list')

const PRICES = [
  { size: "0.5 L", treats: "5,000 L", price: "€99", note: "0-5L" },
  { size: "1 L", treats: "10,000 L", price: "€198", note: "1L" },
  { size: "5 L", treats: "50,000 L", price: "€940", note: "5L" },
  { size: "10 L", treats: "100,000 L", price: "€1,782", note: "10L" },
  { size: "20 L", treats: "200,000 L", price: "€3,366", note: "20L" },
  { size: "200 L drum", treats: "2,000,000 L", price: "", note: "200L" },
];
</script>
<template>
  <div class="page-container">
    <!-- <h3>{{ $t('pages.price-list.price-list') }}</h3> -->
    <!-- <div class="section-divider"></div> -->
    <table class="price-list-table">
      <tr>
        <th>{{ $t('pages.price-list.table.headers.size') }}</th>
        <th>{{ $t('pages.price-list.table.headers.treats') }}</th>
        <th>{{ $t('pages.price-list.table.headers.price') }}</th>
        <th>{{ $t('pages.price-list.table.headers.notes') }}</th>
      </tr>
      <tr v-for="(price, i) in PRICES" :class="i % 2 == 0 ? 'white' : 'grey'">
        <td class="size">{{ price.size }}</td>
        <td>{{ price.treats }}</td>
        <td class="price">{{ price.price != "" ? price.price : $t('pages.price-list.table.on-request') }}</td>
        <td class="note">{{ $t(`pages.price-list.table.notes.${price.note}`) }}</td>
      </tr>
    </table>

    <div class="button-container">

      <button class="primary-button button" @click="router.push('/contact')">{{
        $t('pages.price-list.contact-button') }}</button>
    </div>
  </div>
</template>
<style scoped>
.button-container {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
}

.grey {
  background-color: rgb(244, 244, 244)
}


.note {
  color: var(--grey);
}

.price-list-table {
  width: 100%;
}

td.price {
  color: var(--primary-color-gold);
  font-weight: bold;
}

table {
  border-collapse: collapse;
  overflow: scroll;
  margin-top: 2rem;
}

td.size {
  font-weight: bold;
}

td,
th {
  padding: 22px 10px;
  text-align: left;
  /* border: 1px solid var(--grey); */
}

th {
  background-color: black;
  color: white;
}

.page-container {
  display: block;
}

.right-container .left-container {
  width: 100%;
}

@media (min-width: 1080px) {

  .right-container {
    max-width: 25%;
  }

  .left-container {
    max-width: 75%;
  }
}
</style>
