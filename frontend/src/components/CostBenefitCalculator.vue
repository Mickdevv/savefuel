<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()
const efficiencyGains = ref(7)
const fuelPrice = ref(2.2)
const fuelVolume = ref(10000)
const fuelOxPricePerL = ref(198)

function reset() {
  efficiencyGains.value = 7
  fuelPrice.value = 2.2
  fuelVolume.value = 100000
  fuelOxPricePerL.value = 198
}

// ✅ FORMATTERS (French style: spaces + €)
function formatNumber(value: number) {
  return new Intl.NumberFormat(locale.value).format(value)
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat(locale.value, {
    style: 'currency',
    currency: 'EUR'
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
            <label>{{ $t('cost_benefit_calculator.fuel_price') }} (€ / L)</label>
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
            <label>{{ $t('cost_benefit_calculator.fuelOx_price_per_L') }} (€ / L)</label>
            <input type="number" :min="1" :step="1" v-model.number="fuelOxPricePerL" />
          </div>
        </div>

        <!-- RIGHT COLUMN -->
        <div class="calculator-right">

          <div class="result-box">
            <p>{{ $t('cost_benefit_calculator.fuelOx_cost_per_L') }}</p>
            <span>
              {{ formatCurrency((fuelOxPricePerL / 10000)) }}
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
            <span>{{ formatCurrency(costSavings) }}</span>
          </div>

        </div>

      </div>

      <div class="calculator-footer">
        <button @click="reset()">Reset</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.calculator-wrapper {
  display: flex;
  justify-content: center;
  padding: 1rem;
}

.calculator-card {
  width: 100%;
  max-width: 720px;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
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
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 1080px) {
  .calculator-grid {
    grid-template-columns: 1fr 1fr;
  }
}

.calculator-left {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.input-group {
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

.calculator-right {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  justify-content: space-between;
}

.result-box {
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 0.7rem;
  text-align: center;
}

.result-box p {
  font-size: 0.85rem;
  color: #6b7280;
  margin-bottom: 0.2rem;
}

.result-box span {
  font-size: 1.2rem;
  font-weight: 700;
  color: #111827;
}

.result-box.highlight {
  background: #ecfdf5;
  border-color: #10b981;
}

.result-box.highlight span {
  color: #059669;
}

.calculator-footer {
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
}

.calculator-footer button {
  background: #3b82f6;
  color: white;
  border: none;
  padding: 0.5rem 1.2rem;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.calculator-footer button:hover {
  background: #2563eb;
}

.calculator-footer button:active {
  transform: scale(0.97);
}
</style>
