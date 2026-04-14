<script setup lang="ts">
import Button from 'primevue/button'
import { useCurrentPageStore } from '@/stores/current-page';


const currentPageStore = useCurrentPageStore()
currentPageStore.setCurrentPage("Free trial procedure")
</script>

<template>
  <div class="page-container">

    <div class="paragraphs">
      <p>A free trial allows you to test the reductyion in fuel consumption before buying. Sace Fuel Europe SAS [SFE]
        will
        provide enough Fuel Ox for your trial vehicle. The vehicle chosen will ideally refuel 2 or more times in a
        normal
        working week and drive under similar conditions during the test.</p>
      <p>SFE will provide a detailed test procedure. There are 3 phases.</p>
      <p>First, accurately establish the baseline untreated fuel consumption. Fill the tank(s) to the bottom of the
        filler
        tube or to a level that can be accurately repeated. Notice the odometer distance. Drice until you have used
        about
        75% of your total fuel capacity. Refuel to exactly the same level, note the odometer reading and the fuel added.
        Add
        Fuel Ox at twice the normal concentration to the full fuel capacity; 1mL per 5L of fuel.</p>
      <p>Next is the initial clean-up phase where the process of cleaning the fuel and ignition system begins. Drive
        until
        about 75% of the fuel is used. Refuel to exactly the same level, note the odometer reading and teh fuel added.
        Add
        the normal concentration of FuelOx to the volume of fuel added, 1mL per 10L of fuel.</p>
      <p>Finally, measure the treated fuel consumption. Drive until about 75% of your fuel is used. Refuel to exactly
        the
        same level, note the odometer reading and the fuel added.</p>
      <p>There are two conditions attached to a free trial. You report the results to Save Fuel Europe and if the fuel
        saving is at least 7% you buy at least 1 litre of FuelOx.</p>
      <p>Email to set up a free trial <a href="mailto:contact@save-fuel.eu">contact@save-fuel.eu</a> </p>
    </div>
    <div class="right-column">
      <img src="../assets/Both Fuelox bottles.png" style="border-radius: 5px; width: 100%" alt="">
      <div class="buttons-bar">
        <Button class="primary-button" label="Vehicles"></Button>
        <Button class="primary-button" label="Generators"></Button>
      </div>
    </div>

  </div>
</template>

<style scoped>
.right-column {
  margin-left: 1rem;
  width: 100%;
}

.buttons-bar {
  display: flex;
}

.page-container {
  display: flex
}

.paragraphs {
  max-width: 75%;
}

.primary-button {
  margin: 1rem;
}
</style>
