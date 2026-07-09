<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()
const efficiencyGains = ref(9)
const fuelPrice = ref(2.0)
const fuelVolume = ref(45000)
const fuelOxPricePerL = ref(198)

function reset() {
  efficiencyGains.value = 9
  fuelPrice.value = 2.0
  fuelVolume.value = 45000
  fuelOxPricePerL.value = 198
}

function formatNumber(value: number) {
  return new Intl.NumberFormat(locale.value).format(value)
}

function formatCurrency(value: number, decimalPlaces: number) {
  return new Intl.NumberFormat(locale.value, {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: decimalPlaces
  }).format(value)
}

// COMPUTED VALUES
const fuelOxLitres = computed(() => {
  return fuelVolume.value / 10000
})

const fuelSavings = computed(() => {
  return (efficiencyGains.value * fuelVolume.value) / 100
})

const costSavings = computed(() => {
  return (
    (efficiencyGains.value * fuelVolume.value * fuelPrice.value) / 100 -
    fuelOxPricePerL.value * fuelOxLitres.value
  )
})
</script>

<template>
  <div class="calculator-wrapper">
    <div class="calculator-card">
      <h1 class="calculator-title">
        {{ $t('cost_benefit_calculator.title') }}
      </h1>

      <div class="calculator-grid">

        <!-- LEFT COLUMN -->
        <div class="calculator-left">
          <div class="input-group">
            <label>{{ $t('cost_benefit_calculator.fuel_price') }}
            </label>
            <input type="number" :min="0.1" :max="5" :step="0.1" v-model.number="fuelPrice" />
          </div>

          <div class="input-group">
            <label>{{ $t('cost_benefit_calculator.fuel_volume') }} (L)</label>
            <input type="number" :min="0" :step="1000" v-model.number="fuelVolume" />
          </div>

          <div class="input-group">
            <label>{{ $t('cost_benefit_calculator.efficiency_gains') }} (%)</label>
            <input type="number" :min="1" :max="30" v-model.number="efficiencyGains" />
          </div>

          <div class="input-group">
            <label>{{ $t('cost_benefit_calculator.fuelOx_price_per_L') }} </label>
            <input type="number" :min="1" :step="1" v-model.number="fuelOxPricePerL" />
          </div>
        </div>

        <!-- RIGHT COLUMN -->
        <div class="calculator-right">

          <div class="result-box">
            <p>{{ $t('cost_benefit_calculator.fuelOx_cost_per_L') }}</p>
            <span>
              {{ formatCurrency((fuelOxPricePerL / 10000),4) }}
            </span>
          </div>

          <div class="result-box">
            <p>{{ $t('cost_benefit_calculator.fuel_savings') }}</p>
            <span>{{ formatNumber(fuelSavings) }} L</span>
          </div>

          <div class="result-box">
            <p>{{ $t('cost_benefit_calculator.fuelOx_needed') }}</p>
            <span>{{ formatNumber(Number(fuelOxLitres.toFixed(2))) }} L</span>
          </div>

          <div class="result-box highlight">
            <p>{{ $t('cost_benefit_calculator.cost_savings') }}</p>
            <span>{{ formatCurrency(costSavings,2) }}</span>
          </div>

        </div>

      </div>

      <div class="calculator-footer">
        <button @click="reset()">{{ $t('cost_benefit_calculator.reset-button') }}</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.calculator-wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
}

.calculator-card {
  width: 100%;
  background: #f4f4f4;
  border: 1px solid var(--grey);
  border-radius: .5rem;
  /* box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1); */
  padding: 1.5rem;
}

.calculator-title {
  text-align: center;
  font-size: 1.6rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1.5rem;
}

.calculator-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}

.input-group {
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
}

.input-group label {
  font-weight: 600;
  margin-bottom: 0.3rem;
  color: #374151;
}

.input-group input {
  border: 1.5px solid #d1d5db;
  border-radius: 6px;
  padding: 0.45rem;
  font-size: 0.95rem;
  background: #f9fafb;
  transition: all 0.2s ease;
  color: #111827;
}

.input-group input:focus {
  outline: none;
  border-color: #3b82f6;
  background: #ffffff;
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15);
}


.result-box {
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 0.7rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0.3rem 0;
}

.result-box p {
  font-size: 0.85rem;
  color: #6b7280;
  margin-bottom: 0.2rem;
}

.result-box.highlight p {
  font-size: 0.85rem;
  color: white;
  margin-bottom: 0.2rem;
}

.result-box span {
  font-size: 1.2rem;
  font-weight: 700;
  color: #111827;
}

.result-box.highlight {
  background: var(--primary-color-green);
  color: white;
  border-color: #10b981;
}

.result-box.highlight span {
  color: white;
}

.calculator-footer {
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
}

.calculator-footer button {
  background: var(--grey);
  color: white;
  border: none;
  padding: 0.5rem 1.2rem;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  width: 100%;
}

.calculator-footer button:hover {
  background: grey;
}

.calculator-footer button:active {
  transform: scale(0.97);
}
</style>
