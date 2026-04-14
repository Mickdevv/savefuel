<script setup lang="ts">
import CostBenefitCalculator from '@/components/CostBenefitCalculator.vue';
import { useCurrentPageStore } from '@/stores/current-page';
import Button from 'primevue/button'

const currentPageStore = useCurrentPageStore()
currentPageStore.setCurrentPage('How Fuel Ox cuts costs')
</script>



<template>
  <div class="page-container">

    <div class="text-container">
      <p>Fuel Ox treatment cuts fuel consumption by two separate methods. It improves burn efficiency and improves
        engine
        efficiency.</p>
      <p>Treatment over several tanks of fuel cleans the fuel and ignition systems of sludges and deposits which maked
        the
        engine work more efficiently. With a 2005 high mileage turbo diesel vehicle, this made a dramatic difference.
        The
        road test showed a 17% reduction in fuel consumption from cleaning the engine systems. Treated fuel burns more
        completely, less fuel is required to give the same power output. This enhanced combustion cut consumption by
        another
        5%. The total saving was 22%. Read the full test report <a href="">here</a></p>
      <p>We guarantee that your vehicle will see reduced fuel consumption of at least 7%. This is guaranteed by you
        performing a free trial of Fuel Ox on a vehicle in your fleet.</p>
      <p>You can use our calculator to see the potential savings. Enter the current fuel price and your monthly fleet
        fuel
        consumption in litres to see the minimum cost savings if all your fleet treated fuel with Fuel Ox.</p>
      <p>Detailed technical information is in the Fuel Ox White Paper.</p>
    </div>

    <div class="cost-calculator-container">
      <CostBenefitCalculator class="cost-benefit-calculator" />
      <Button class="learn-more-button" label="Explore a free trial" severity="warning" />
    </div>
  </div>
</template>

<style scoped>
.page-container {
  gap: 1rem;
  display: block;
}

@media (min-width: 900px) {
  .page-container {
    display: flex;
  }
}

.text-container {}

p {
  font-size: 1rem;
  margin-top: 2rem;
  font-weight: bold;
}

.learn-more-button {
  background-color: gold;
  border: none !important;
  width: fit-content;
}

.learn-more-button:hover {
  background-color: yellow !important;
  transition: 0.2s;
}

.cost-benefit-calculator {
  margin-bottom: 1rem;
  border-radius: 5px;
  border: solid;
}

.cost-calculator-container {
  margin: 1rem, 0rem;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 45%;
}
</style>
