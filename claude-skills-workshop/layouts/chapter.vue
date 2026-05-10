<template>
  <div
    class="slidev-layout chapter-cover"
    :style="{ backgroundColor: bgColor }"
  >
    <div class="ch-tag">Chapter {{ num }}</div>
    <h1>
      <slot />
    </h1>
    <div style="margin-top: 1.5rem; font-family: var(--f-mono); font-size: 0.85rem; opacity: 0.7;">
      {{ subtitle }}
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  num: { type: [Number, String], default: 1 },
  bgColor: { type: String, default: '#8FA773' },
  subtitle: { type: String, default: '' }
})
</script>
